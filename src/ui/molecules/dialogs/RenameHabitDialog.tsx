import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import useForm from 'hooks/useForm';
import useHabit from 'redux-modules/habits/hooks/useHabit';
import useUpdateHabit from 'redux-modules/habits/hooks/useUpdateHabit';

type RenameHabitDialogProps = {
  habitId: string;
  isOpen: boolean;
  setIsRenameOpen: Function;
};

const RenameHabitDialog: FunctionComponent<RenameHabitDialogProps> = ({
  habitId,
  isOpen,
  setIsRenameOpen,
}) => {
  const habit: { name: string; history: object | undefined } = useHabit(habitId);
  const { formState, updateField, resetForm } = useForm();
  const updateHabit = useUpdateHabit();
  return (
    <Dialog open={isOpen} onClose={() => setIsRenameOpen(false)} aria-labelledby="update-dialog">
      <DialogTitle id="update-dialog">Update Habit Name - {habit.name}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="habitName"
          name="habitName"
          value={formState.habitName || ''}
          onChange={updateField}
          label="Habit Name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsRenameOpen(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={(e) => {
            updateHabit({ id: habitId, habit: { name: formState.habitName } });
            resetForm();
            setIsRenameOpen(false);
          }}
          color="primary"
        >
          Update Name
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RenameHabitDialog;

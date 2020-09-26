import React, { FunctionComponent, useState, useRef, MutableRefObject } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import useDeleteHabit from 'redux-modules/habits/hooks/useDeleteHabit';
import useForm from 'hooks/useForm';
import useHabit from 'redux-modules/habits/hooks/useHabit';
import useUpdateHabit from 'redux-modules/habits/hooks/useUpdateHabit';

type HabitOptionProps = {
  habitId: string;
};

const HabitOptions: FunctionComponent<HabitOptionProps> = ({ habitId }) => {
  const habit: { name: string; history: object | undefined } = useHabit(habitId);

  const iconButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openOptions = () => setIsOpen(true);
  const closeOptions = () => setIsOpen(false);

  const [renameOpen, setIsRenameOpen] = useState(false);
  const { formState, updateField, resetForm } = useForm();

  const deleteHabit = useDeleteHabit(habitId);
  const updateHabit = useUpdateHabit();

  if (!habit) {
    return null;
  }
  return (
    <>
      <IconButton
        ref={iconButtonRef}
        edge="end"
        aria-label="options for habit"
        onClick={openOptions}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={iconButtonRef.current}
        keepMounted
        open={isOpen}
        onClose={closeOptions}
      >
        <MenuItem
          onClick={() => {
            setIsRenameOpen(true);
            closeOptions();
          }}
        >
          Rename
        </MenuItem>
        <MenuItem
          onClick={() => {
            deleteHabit();
            closeOptions();
          }}
        >
          Delete
        </MenuItem>
      </Menu>
      <Dialog
        open={renameOpen}
        onClose={() => setIsRenameOpen(false)}
        aria-labelledby="update-dialog"
      >
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
    </>
  );
};

export default HabitOptions;

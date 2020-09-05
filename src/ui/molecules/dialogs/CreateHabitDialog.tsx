import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'hooks/useForm';
import useCreateHabit from 'redux-modules/habits/hooks/useCreateHabit';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const { formState, updateField } = useForm();
  const createHabit = useCreateHabit();

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Habit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="create-habit-title">
        <DialogTitle id="create-habit-title">Create Habit</DialogTitle>
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              createHabit(formState);
              handleClose();
            }}
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useForm from 'hooks/useForm';
import useCreateHabit from 'redux-modules/habits/hooks/useCreateHabit';
import useLoggedIn from 'hooks/useLoggedIn';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const { formState, updateField, resetForm } = useForm();
  const createHabit = useCreateHabit();
  const isLoggedIn = useLoggedIn();

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Create Habit</Button>
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
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={(e) => {
              createHabit(formState);
              resetForm();
              handleClose();
            }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

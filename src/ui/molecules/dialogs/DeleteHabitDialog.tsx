import React, { FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type DeleteHabitDialogProps = {
  isOpen: boolean;
  deleteHabit: Function;
  closeDialog: Function;
};

const DeleteHabitDialog: FunctionComponent<DeleteHabitDialogProps> = ({
  isOpen,
  deleteHabit,
  closeDialog,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        closeDialog();
      }}
      aria-labelledby="update-dialog"
    >
      <DialogTitle id="update-dialog">Delete Habit</DialogTitle>
      <DialogContent>Are you sure you want to delete this habit?</DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            closeDialog();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={(e) => {
            deleteHabit();
            closeDialog();
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteHabitDialog;

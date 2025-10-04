import React, { FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useHabit from "redux-modules/habits/hooks/useHabit";
import useUpdateHabit from "redux-modules/habits/hooks/useUpdateHabit";

type ArchiveHabitDialogProps = {
  habitId: string;
  isOpen: boolean;
  setIsArchiveOpen: Function;
};

const ArchiveHabitDialog: FunctionComponent<ArchiveHabitDialogProps> = ({
  habitId,
  isOpen,
  setIsArchiveOpen,
}) => {
  const habit: { name: string; archived: boolean } = useHabit(habitId);
  const updateHabit = useUpdateHabit();

  const label = habit.archived ? "Unarchive" : "Archive";
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsArchiveOpen(false)}
      aria-labelledby="update-dialog"
    >
      <DialogTitle id="update-dialog">
        {label} Habit - {habit.name}
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={() => setIsArchiveOpen(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={(e) => {
            updateHabit({ id: habitId, habit: { archived: !habit.archived } });
            setIsArchiveOpen(false);
          }}
          color="primary"
        >
          {label}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ArchiveHabitDialog;

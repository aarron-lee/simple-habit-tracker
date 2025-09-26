import React, { FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import useForm from "hooks/useForm";
import useReorderHabit from "redux-modules/habits/hooks/useReorderHabit";
import useHabitIds from "redux-modules/habits/hooks/useHabitIds";
import { InputLabel, Select } from "@material-ui/core";
import useHabits from "redux-modules/habits/hooks/useHabits";

type ReorderHabitDialogProps = {
  habitId: string;
  isOpen: boolean;
  setIsReorderOpen: Function;
};

const ReorderHabitDialog: FunctionComponent<ReorderHabitDialogProps> = ({
  habitId,
  isOpen,
  setIsReorderOpen,
}) => {
  const habits = useHabits();
  const habit = habits[habitId];
  // habitIds has the correct order, don't use order based on useHabits()
  const habitsIds = useHabitIds();
  const { formState, updateField, resetForm } = useForm();
  const reorderHabit = useReorderHabit();

  const currentPosition = habitsIds.indexOf(habitId) + 1;
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsReorderOpen(false)}
      aria-labelledby="update-dialog"
    >
      <DialogTitle id="update-dialog">Update Order - {habit.name}</DialogTitle>
      <DialogContent>
        <InputLabel>Current Position: {currentPosition}</InputLabel>
        <Select
          id="habitPosition"
          name="habitPosition"
          value={formState.habitPosition || currentPosition}
          onChange={updateField}
          fullWidth
        >
          {habitsIds.map((id: string, idx: number) => {
            const k = `select-${habitId}-menu-item-${id}`;
            const pos = idx + 1;
            return (
              <MenuItem key={k} value={pos} id={k}>
                Position {pos}: {habits[id]?.name}
              </MenuItem>
            );
          })}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsReorderOpen(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={(e) => {
            const newPosition = formState.habitPosition - 1;
            if (newPosition >= 0) {
              reorderHabit({ habitId, newPosition });
            }
            resetForm();
            setIsReorderOpen(false);
          }}
          color="primary"
        >
          Update Position
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReorderHabitDialog;

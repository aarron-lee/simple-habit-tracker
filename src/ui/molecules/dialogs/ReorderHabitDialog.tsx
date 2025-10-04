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
import { Select } from "@material-ui/core";
import useHabits from "redux-modules/habits/hooks/useHabits";
import { useSelector } from "react-redux";
import selectIsArchiveRoute from "redux-modules/habits/selectors/selectIsArchiveRoute";

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
  const isArchivePage = useSelector(selectIsArchiveRoute);
  const habit = habits[habitId];
  // habitIds has the correct order, don't use order based on useHabits()
  const habitsIds = useHabitIds();
  const { formState, updateField, resetForm } = useForm();
  const reorderHabit = useReorderHabit();

  const currentPosition = habitsIds.indexOf(habitId) + 1;

  // if there are any archived habits, the dropdown will skip position numbers
  // so track the label separately from the actual idx
  let idxLabel = 0;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsReorderOpen(false)}
      aria-labelledby="update-dialog"
    >
      <DialogTitle id="update-dialog">Update Order - {habit.name}</DialogTitle>
      <DialogContent>
        <Select
          id="habitPosition"
          name="habitPosition"
          value={formState.habitPosition || currentPosition}
          onChange={updateField}
          fullWidth
        >
          {habitsIds.map((id: string, idx: number) => {
            const habit = habits[id];
            if (isArchivePage && habit?.archived === false) {
              return null;
            }

            if (!isArchivePage && habit?.archived === true) {
              return null;
            }

            const k = `select-${habitId}-menu-item-${id}`;
            const pos = idx + 1;
            return (
              <MenuItem key={k} value={pos} id={k}>
                Position {idxLabel++}: {habits[id]?.name}
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
            if (newPosition >= 0 && newPosition !== currentPosition - 1) {
              reorderHabit({ habitId, newPosition });
            }
            resetForm();
            setIsReorderOpen(false);
          }}
          color="primary"
          disabled={
            !formState.habitPosition ||
            formState.habitPosition === currentPosition
          }
        >
          Update Position
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReorderHabitDialog;

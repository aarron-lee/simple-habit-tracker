import React, { FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import useForm from "hooks/useForm";
import useHabit from "redux-modules/habits/hooks/useHabit";
import useReorderHabit from "redux-modules/habits/hooks/useReorderHabit";
import useHabitIds from "redux-modules/habits/hooks/useHabitIds";
import { InputLabel, Select } from "@material-ui/core";

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
  const habit: { name: string; history: object | undefined } =
    useHabit(habitId);
  const habitsIds = useHabitIds();
  const { formState, updateField, resetForm } = useForm();
  const reorderHabit = useReorderHabit();
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsReorderOpen(false)}
      aria-labelledby="update-dialog"
    >
      <DialogTitle id="update-dialog">
        Update Habit Order - {habit.name}
      </DialogTitle>
      <DialogContent>
        <InputLabel>Habit Position</InputLabel>
        <Select
          id="habitPosition"
          name="habitPosition"
          value={formState.habitPosition || habitsIds.indexOf(habitId)}
          onChange={updateField}
          fullWidth
        >
          {habitsIds.map((id: string, idx: number) => {
            const k = `select-${habitId}-menu-item-${id}`;
            return (
              <MenuItem key={k} value={idx} id={k}>
                {idx}
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
            reorderHabit({ habitId, newPosition: formState.habitPosition });
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

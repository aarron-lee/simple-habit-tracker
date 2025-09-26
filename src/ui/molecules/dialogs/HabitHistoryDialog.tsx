import React, { FunctionComponent } from "react";
import CalendarYear from "ui/molecules/calendar/CalendarYear";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import useForm from "hooks/useForm";
import { Select, Typography } from "@material-ui/core";
import useHabit from "redux-modules/habits/hooks/useHabit";
import { getYear } from "date-fns";

type HabitHistoryDialogProps = {
  habitId: string;
  isOpen: boolean;
  setIsHistoryOpen: Function;
};

const HabitHistoryDialog: FunctionComponent<HabitHistoryDialogProps> = ({
  habitId,
  isOpen,
  setIsHistoryOpen,
}) => {
  const habit = useHabit(habitId);
  const { history } = habit;
  const { formState, updateField } = useForm();

  let years = undefined;

  if (history) {
    years = Object.keys(history);
  }

  const currentYear = getYear(Date.now());

  return (
    <Dialog
      open={isOpen}
      fullScreen
      onClose={() => setIsHistoryOpen(false)}
      aria-labelledby="update-dialog"
    >
      <DialogTitle id="update-dialog">Habit History - {habit.name}</DialogTitle>
      <DialogContent>
        {(!years || !history) && (
          <Typography variant="h6">No History</Typography>
        )}
        {years && (
          <>
            <Select
              id="year"
              name="year"
              value={formState.year || currentYear}
              onChange={updateField}
              fullWidth
            >
              {years.map((year: string, idx: number) => {
                const k = `select-${habitId}-menu-item-${year}`;
                return (
                  <MenuItem key={k} value={year} id={k}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
            <CalendarYear
              year={formState.year || currentYear}
              habitId={habitId}
            />
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setIsHistoryOpen(false)} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HabitHistoryDialog;

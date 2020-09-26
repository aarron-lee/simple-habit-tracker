import React, { FunctionComponent, useState } from 'react';
import Button from '@material-ui/core/Button';
import Calendar from 'ui/molecules/calendar/Calendar';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import MonthNav from 'ui/molecules/calendar/MonthNav';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useDeleteHabit from 'redux-modules/habits/hooks/useDeleteHabit';
import useForm from 'hooks/useForm';
import useHabit from 'redux-modules/habits/hooks/useHabit';
import { css } from 'emotion';
import useUpdateHabit from 'redux-modules/habits/hooks/useUpdateHabit';

const cardStyles: string = css`
  margin: 8px;
  padding: 16px;
  text-transform: capitalize;
  position: relative;
`;

const fillerStyles: string = css`
  flex-grow: 1;
`;

const cardHeaderStyles: string = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type HabitProps = {
  habitId: string;
};

const Habit: FunctionComponent<HabitProps> = ({ habitId }) => {
  const habit: { name: string; history: object | undefined } = useHabit(habitId);
  const [optionsOpen, setIsOptionsOpen] = useState(false);
  const { formState, updateField, resetForm } = useForm();

  const deleteHabit = useDeleteHabit(habitId);

  const updateHabit = useUpdateHabit();

  if (!habit) {
    return null;
  }
  const { name } = habit;
  return (
    <Card className={cardStyles}>
      <div className={cardHeaderStyles}>
        <div onDoubleClick={() => setIsOptionsOpen(true)}>
          <Typography variant="h6">{name}</Typography>
        </div>
        <div className={fillerStyles} />
        <IconButton onClick={deleteHabit} style={{ padding: '8px', width: '12px', height: '12px' }}>
          <CloseIcon />
        </IconButton>
      </div>
      <MonthNav>
        {({ month, year }: { month: number; year: number }) => (
          <Calendar month={month} year={year} habitId={habitId} />
        )}
      </MonthNav>
      <Dialog
        open={optionsOpen}
        onClose={() => setIsOptionsOpen(false)}
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
          <Button onClick={() => setIsOptionsOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              updateHabit({ id: habitId, habit: { name: formState.habitName } });
              resetForm();
              setIsOptionsOpen(false);
            }}
            color="primary"
          >
            Update Name
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Habit;

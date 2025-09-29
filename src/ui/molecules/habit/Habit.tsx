import React, { FunctionComponent } from "react";
import Calendar from "ui/molecules/calendar/Calendar";
import Card from "@material-ui/core/Card";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import IconButton from "@material-ui/core/IconButton";
import MonthNav from "ui/molecules/calendar/MonthNav";
import Typography from "@material-ui/core/Typography";
import useHabit from "redux-modules/habits/hooks/useHabit";
import { css } from "emotion";
import { useDrag } from "react-dnd";
import HabitOptions from "./HabitOptions";
import HabitDropZone from "./HabitDropZone";
import HabitNotes from "./HabitNotes";
import useUpdateHabit from "redux-modules/habits/hooks/useUpdateHabit";

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

const titleStyles: string = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 18ch;
`;

type HabitProps = {
  habitId: string;
  order: number;
  habitViewType: "day" | "week" | "month";
};

export type HabitDragItem = {
  type: string;
  id: string;
  order: number;
};

type HabitType = {
  name: string;
  history: object | undefined;
  notes: string | undefined;
};

const Habit: FunctionComponent<HabitProps> = ({
  habitId,
  order,
  habitViewType,
}) => {
  const habit: HabitType = useHabit(habitId);

  const [, drag, preview] = useDrag({
    item: { id: habitId, type: "habit", order },
  });

  const updateHabit = useUpdateHabit();

  const updateNotes = (notes: string) => {
    updateHabit({ id: habitId, habit: { notes } });
  };

  if (!habit) {
    return null;
  }
  const { name, notes } = habit;
  return (
    <HabitDropZone habitId={habitId}>
      <Card className={cardStyles} ref={preview}>
        <div className={cardHeaderStyles}>
          <IconButton
            ref={drag}
            edge="start"
            aria-label="drag drop indicator for reordering habits"
          >
            <DragIndicatorIcon />
          </IconButton>
          <Typography variant="h6" className={titleStyles}>
            {name}
          </Typography>
          <div className={fillerStyles} />
          <HabitOptions habitId={habitId} />
        </div>
        <MonthNav showMonthNavButtons={habitViewType === "month"}>
          {({
            month,
            year,
            notesOpen,
          }: {
            month: number;
            year: number;
            notesOpen: boolean;
          }) => (
            <>
              <HabitNotes
                notes={notes ?? ""}
                notesOpen={notesOpen}
                updateNotes={updateNotes}
              />
              <Calendar
                month={month}
                year={year}
                habitId={habitId}
                habitViewType={habitViewType}
              />
            </>
          )}
        </MonthNav>
      </Card>
    </HabitDropZone>
  );
};

export default Habit;

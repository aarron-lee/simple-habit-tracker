import { Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import useHabit from "redux-modules/habits/hooks/useHabit";

import Calendar from "ui/molecules/calendar/Calendar";
import { css } from "emotion";

const yearContainerStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const monthContainerStyles = css`
  margin: auto;
  min-height: 320px;
`;

type mType = {
  [key: string]: string;
};

const Months: mType = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

type CalendarYearProps = {
  year: number;
  habitId: string;
};

const NoHistory: FunctionComponent = () => (
  <Typography variant="h6">No History</Typography>
);

const CalendarYear: FunctionComponent<CalendarYearProps> = ({
  year,
  habitId,
}) => {
  const habit = useHabit(habitId);

  const { history } = habit;

  if (!history) {
    return <NoHistory />;
  }

  const yr = history[year];

  if (!yr) {
    return <NoHistory />;
  }

  const months = Object.keys(yr) as string[];

  if (!months || months.length === 0) {
    return <NoHistory />;
  }

  return (
    <div className={yearContainerStyles}>
      {months.map((m) => {
        const monthStr = Months[m];
        return (
          <div key={`${habitId}-${m}-${year}`} className={monthContainerStyles}>
            <Typography variant="h6">{monthStr}</Typography>
            <Calendar
              month={m}
              year={year}
              habitId={habitId}
              habitViewType="month"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CalendarYear;

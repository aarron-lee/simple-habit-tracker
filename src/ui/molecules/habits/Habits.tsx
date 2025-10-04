import React, { FunctionComponent } from "react";
import useHabitIds from "redux-modules/habits/hooks/useHabitIds";
import Habit from "../habit/Habit";
import { css } from "emotion";
import { Flipper, Flipped } from "react-flip-toolkit";
import useUpdateHabitViewType from "redux-modules/session/hooks/useUpdateHabitView";
import useHabitViewType from "redux-modules/session/hooks/useHabitViewType";
import DayHabit from "../habit/DayHabit";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import { getCurrentDateComponents } from "utils";
import { useSelector } from "react-redux";
import selectIsArchiveRoute from "redux-modules/habits/selectors/selectIsArchiveRoute";

const HABIT_VIEW_TYPE = {
  day: "day",
  week: "week",
  month: "month",
};

const habitViewTypeButtonGroupStyle = css`
  margin: 1rem;
`;

const habitContainerStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

const useSetViewType = () => {
  const updateHabitViewType = useUpdateHabitViewType();

  return (viewType: string) => {
    if (
      viewType === HABIT_VIEW_TYPE.month ||
      viewType === HABIT_VIEW_TYPE.day ||
      viewType === HABIT_VIEW_TYPE.week
    ) {
      return updateHabitViewType({ habitViewType: viewType });
    }
  };
};

const Habits: FunctionComponent = () => {
  const habitIds = useHabitIds();
  const isArchivePage = useSelector(selectIsArchiveRoute);
  const habitViewType = useHabitViewType();

  const setViewType = useSetViewType();

  const { year, month, day } = getCurrentDateComponents();

  return (
    <>
      {isArchivePage ? (
        <Typography variant="h6">Archive</Typography>
      ) : (
        <>
          <ButtonGroup
            variant="contained"
            size="large"
            className={habitViewTypeButtonGroupStyle}
          >
            <Button onClick={() => setViewType(HABIT_VIEW_TYPE.day)}>
              Today
            </Button>
            <Button onClick={() => setViewType(HABIT_VIEW_TYPE.week)}>
              Week
            </Button>
            <Button onClick={() => setViewType(HABIT_VIEW_TYPE.month)}>
              Month
            </Button>
          </ButtonGroup>
        </>
      )}
      {habitIds.length > 0 && (
        <Flipper flipKey={habitIds.join("")}>
          <div className={habitContainerStyles}>
            {habitIds.map((habitId: string, idx: number) => {
              if (habitViewType === "day") {
                return (
                  <Flipped key={habitId} flipId={habitId}>
                    {/* <Flipped/> needs a div child */}
                    <div>
                      <DayHabit
                        habitId={habitId}
                        year={year}
                        month={month}
                        day={day}
                      />
                    </div>
                  </Flipped>
                );
              }

              return (
                <Flipped key={habitId} flipId={habitId}>
                  {/* <Flipped/> needs a div child */}
                  <div>
                    <Habit
                      habitId={habitId}
                      order={idx}
                      habitViewType={habitViewType}
                    />
                  </div>
                </Flipped>
              );
            })}
          </div>
        </Flipper>
      )}
    </>
  );
};

export default Habits;

import React, { FunctionComponent } from "react";
import useHabitIds from "redux-modules/habits/hooks/useHabitIds";
import Habit from "../habit/Habit";
import { css } from "emotion";
import { Flipper, Flipped } from "react-flip-toolkit";
import useUpdateHabitViewType from "redux-modules/session/hooks/useUpdateHabitView";
import useHabitViewType from "redux-modules/session/hooks/useHabitViewType";

const HABIT_VIEW_TYPE = {
  week: "week",
  month: "month",
};

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

// const weekHabitContainerStyles = css`
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   max-width: 1000px;
//   align-items: center;
//   @media only screen and (max-width: 1000px) {
//     justify-content: center;
//   }
// `;

const useToggleHabitViewType = () => {
  const habitViewType = useHabitViewType();

  const updateHabitViewType = useUpdateHabitViewType();
  const toggleHabitViewType = () => {
    if (habitViewType === HABIT_VIEW_TYPE.month) {
      updateHabitViewType({ habitViewType: HABIT_VIEW_TYPE.week });
    } else {
      updateHabitViewType({ habitViewType: HABIT_VIEW_TYPE.month });
    }
  };

  return { habitViewType, toggleHabitViewType };
};

const Habits: FunctionComponent = () => {
  const habitIds = useHabitIds();

  const { habitViewType, toggleHabitViewType } = useToggleHabitViewType();

  return (
    <>
      <button onClick={toggleHabitViewType}>toggle habit view</button>
      {habitIds.length > 0 && (
        <Flipper flipKey={habitIds.join("")}>
          <div className={habitContainerStyles}>
            {habitIds.map((habitId: string, idx: number) => {
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

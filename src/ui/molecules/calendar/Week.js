import React from 'react';
import { css, cx } from 'emotion';

const dayContainerStyles = css`
  display: flex;
  flex-direction: row;
`;

const dayStyles = css`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background-color: rgb(220, 220, 220);
  margin: 5px;
  &:hover {
    background-color: rgb(180, 180, 180);
  }
`;

function Week({ week = [] }) {
  return (
    <div className={cx(dayContainerStyles)}>
      {week.map((day, idx) => {
        return (
          <div key={`${day}-${idx}`} className={cx(dayStyles)}>
            {day > 0 ? day : ''}
          </div>
        );
      })}
    </div>
  );
}

export default Week;

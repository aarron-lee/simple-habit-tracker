import React from 'react';
import noop from 'lodash/noop';
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
    cursor: pointer;
    background-color: rgb(180, 180, 180);
  }
`;

function Week({ week = [], onDayClick }) {
  return (
    <div className={cx(dayContainerStyles)}>
      {week.map((day, idx) => {
        const onClick = day > 0 ? () => onDayClick && onDayClick(day) : noop;

        return (
          <div key={`${day}-${idx}`} className={cx(dayStyles)} onClick={onClick}>
            {day > 0 ? day : ''}
          </div>
        );
      })}
    </div>
  );
}

export default Week;

import React, { useCallback, useState } from 'react';
import { getMonth, getYear } from 'date-fns';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import { css } from 'emotion';

const monthNavContainerStyles = css`
  display: flex;
  flex-direction: column;
`;

const navStyles = css`
  display: flex;
  flex-direction: row;
`;

const Months = [
  { name: 'January' },
  { name: 'February' },
  { name: 'March' },
  { name: 'April' },
  { name: 'May' },
  { name: 'June' },
  { name: 'July' },
  { name: 'August' },
  { name: 'September' },
  { name: 'October' },
  { name: 'November' },
  { name: 'December' },
];

function MonthNav({
  children,
  currentMonth = getMonth(Date.now()),
  currentYear = getYear(Date.now()),
}) {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const navigateBackwards = useCallback(() => {
    let newMonth = month - 1;
    if (newMonth < 0) {
      newMonth = 11;
      let newYear = year - 1;
      setYear(newYear);
    }
    setMonth(newMonth);
  }, [month, year]);

  const navigateForwards = useCallback(() => {
    let newMonth = month + 1;
    if (newMonth > 11) {
      newMonth = 0;
      let newYear = year + 1;
      setYear(newYear);
    }
    setMonth(newMonth);
  }, [month, year]);

  return (
    <div className={monthNavContainerStyles}>
      <div className={navStyles}>
        <IconButton size="small" onClick={navigateBackwards}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton size="small" onClick={navigateForwards}>
          <ArrowForwardIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {Months[month].name} {year}
        </Typography>
      </div>
      <div>{children({ month, year })}</div>
    </div>
  );
}

export default MonthNav;

import React, { useCallback, useState } from 'react';
import { getMonth, getYear } from 'date-fns';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { css } from 'emotion';

const monthNavContainerStyles = css`
  display: flex;
  flex-direction: column;
`;

const navStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  showMonthNavButtons = true
}) {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [notesOpen, setNotesOpen] = useState(false);

  const toggleNotes = () => {
    setNotesOpen(!notesOpen)
  }

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
        <div className={navStyles}>
          {showMonthNavButtons &&
            <>
              <IconButton size="small" onClick={navigateBackwards}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton size="small" onClick={navigateForwards}>
                <ArrowForwardIcon />
              </IconButton>
            </>
          }
          <Typography variant="h6" noWrap>
            {Months[month].name} {year}
          </Typography>
        </div>
        <IconButton size="small" onClick={toggleNotes}>
          {notesOpen ?
            <KeyboardArrowUpIcon /> :
            <KeyboardArrowDownIcon />
          }
        </IconButton>
      </div>
      <div>{children({ month, year, notesOpen })}</div>
    </div>
  );
}

export default MonthNav;

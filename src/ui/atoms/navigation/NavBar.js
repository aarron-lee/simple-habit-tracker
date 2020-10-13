import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CreateHabitDialog from 'ui/molecules/dialogs/CreateHabitDialog';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import Drawer from 'ui/molecules/drawer/Drawer';
import MenuItem from '@material-ui/core/MenuItem';

import MuiLink from '@material-ui/core/Link';
import MenuList from '@material-ui/core/MenuList';
import NotesIcon from '@material-ui/icons/Notes';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import useToggle from 'hooks/useToggle';
import useLogout from 'redux-modules/session/hooks/useLogout';
import useLoggedIn from 'hooks/useLoggedIn';
import { Link } from 'react-router-dom';
import { useIsDarkTheme } from '../themeProvider/ThemeProvider';
import { css } from 'emotion';
import { getDate } from 'date-fns';

const currentDay = () => {
  return `${getDate(Date.now())}`.padStart(2, '0');
};

const calendarStyles = css`
  position: relative;
  ::after {
    content: '${currentDay()}';
    position: absolute;
    left: 10px;
    top: 10px;
  }
`;

const linkStyles = css`
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`;

const NavBar = (props) => {
  const [toggle, toggleState] = useToggle();
  const openMenuRef = useRef();

  const isLoggedIn = useLoggedIn();
  const logout = useLogout();

  const isDarkTheme = useIsDarkTheme();

  return (
    <AppBar color={isDarkTheme ? 'inherit' : 'primary'} position="sticky">
      <Toolbar
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Drawer>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
            <Drawer.ListItem text="Habits" icon={EventNoteIcon} />
          </Link>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/notes">
            <Drawer.ListItem text="Notes" icon={NotesIcon} />
          </Link>
        </Drawer>
        <Typography variant="h6" noWrap>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
            Habit Tracker
          </Link>
        </Typography>
        <div
          style={{
            flexGrow: 1,
            maxWidth: '960px',
          }}
        />
        <CreateHabitDialog />
        <div className={calendarStyles}>
          <CalendarTodayIcon fontSize="large" />
        </div>
        <IconButton
          edge="end"
          aria-label="account of current user"
          ref={openMenuRef}
          onClick={toggleState}
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Popper open={toggle} anchorEl={openMenuRef.current} transition>
          {({ TransitionProps, placement }) => {
            return (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={toggleState}>
                    <>
                      {!isLoggedIn && (
                        <MenuList
                          autoFocusItem={toggle}
                          id="menu-list-grow"
                          onKeyDown={toggleState}
                          className={linkStyles}
                        >
                          <MenuItem onClick={toggleState}>
                            <Link component={MuiLink} to="/signin">
                              Login
                            </Link>
                          </MenuItem>
                          {process.env.NODE_ENV !== 'production' && (
                            <MenuItem onClick={toggleState}>
                              <Link component={MuiLink} to="/signup">
                                Sign Up
                              </Link>
                            </MenuItem>
                          )}
                        </MenuList>
                      )}
                      {isLoggedIn && (
                        <MenuList
                          autoFocusItem={toggle}
                          id="menu-list-grow"
                          onKeyDown={toggleState}
                          className={linkStyles}
                        >
                          {/* <MenuItem onClick={toggleState}>
                            <Link component={MuiLink} to="/profile">
                              Profile
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={toggleState}>My account</MenuItem> */}
                          <MenuItem
                            onClick={() => {
                              logout();
                              toggleState();
                            }}
                          >
                            Logout
                          </MenuItem>
                        </MenuList>
                      )}
                    </>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            );
          }}
        </Popper>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import useToggle from 'hooks/useToggle';
import useLogout from 'redux-modules/session/hooks/useLogout';
import useLoggedIn from 'hooks/useLoggedIn';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [toggle, toggleState, setToggle] = useToggle();
  const openMenuRef = useRef();

  const isLoggedIn = useLoggedIn();
  const logout = useLogout();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Habit Tracker
        </Typography>
        <IconButton
          edge="end"
          aria-label="account of current user"
          ref={openMenuRef}
          onClick={setToggle}
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
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={toggleState}>
                    <MenuList autoFocusItem={toggle} id="menu-list-grow" onKeyDown={toggleState}>
                      {!isLoggedIn && (
                        <>
                          <Link to="/signin">
                            <MenuItem onClick={toggleState}>Login</MenuItem>
                          </Link>
                          <Link to="/signup">
                            <MenuItem onClick={toggleState}>Sign Up</MenuItem>
                          </Link>
                        </>
                      )}
                      {isLoggedIn && (
                        <>
                          <MenuItem onClick={toggleState}>Profile</MenuItem>
                          <MenuItem onClick={toggleState}>My account</MenuItem>
                          <MenuItem
                            onClick={() => {
                              logout();
                              toggleState();
                            }}
                          >
                            Logout
                          </MenuItem>
                        </>
                      )}
                    </MenuList>
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

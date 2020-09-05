import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MuiLink from '@material-ui/core/Link';
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
      <Toolbar
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" noWrap>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
            Habit Tracker
          </Link>
        </Typography>
        <div
          style={{
            flexGrow: 1,
            maxWidth: '1000px',
          }}
        />
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
                style={{
                  transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={toggleState}>
                    <MenuList autoFocusItem={toggle} id="menu-list-grow" onKeyDown={toggleState}>
                      {!isLoggedIn && (
                        <>
                          <Link component={MuiLink} to="/signin">
                            <MenuItem onClick={toggleState}>Login</MenuItem>
                          </Link>
                          <Link component={MuiLink} to="/signup">
                            <MenuItem onClick={toggleState}>Sign Up</MenuItem>
                          </Link>
                        </>
                      )}
                      {isLoggedIn && (
                        <>
                          <Link component={MuiLink} to="/profile">
                            <MenuItem onClick={toggleState}>Profile</MenuItem>
                          </Link>
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

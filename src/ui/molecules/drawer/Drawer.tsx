import React, { createContext, useContext, FunctionComponent } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MuiListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import noop from 'lodash/noop';

type DrawerContextType = {
  toggleDrawer: Function;
};
const initialContext: DrawerContextType = { toggleDrawer: noop };

const DrawerContext = createContext(initialContext);

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'left' | 'top' | 'bottom' | 'right';

type ListItemProps = {
  text: string;
  icon: React.ComponentType;
};

const ListItem: FunctionComponent<ListItemProps> = (props) => {
  const { text, icon: Icon } = props;
  return (
    <MuiListItem button key={text}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </MuiListItem>
  );
};

type ListProps = {
  anchor: Anchor;
  toggleDrawer: Function;
  classes: any;
  children?: React.ReactNode;
};

/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  <ListItem button key={text}>
    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))}
</List>
<Divider />
<List>
{['All mail', 'Trash', 'Spam'].map((text, index) => (
  <ListItem button key={text}>
    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))} */

const DrawerList: FunctionComponent<ListProps> = ({ anchor, classes, children }) => {
  const { toggleDrawer } = useContext(DrawerContext);
  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>{children}</List>
    </div>
  );
};

function Drawer(props: { direction?: Anchor; children?: React.ReactNode }) {
  const { direction = 'left', children } = props;

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {([direction] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <DrawerContext.Provider value={{ toggleDrawer }}>
              <DrawerList anchor={anchor} toggleDrawer={toggleDrawer} classes={classes}>
                {children}
              </DrawerList>
            </DrawerContext.Provider>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

Drawer.ListItem = ListItem;
Drawer.Divider = Divider;

export default Drawer;

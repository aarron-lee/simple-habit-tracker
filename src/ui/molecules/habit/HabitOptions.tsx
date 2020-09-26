import React, { FunctionComponent, useState, useRef, MutableRefObject } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useDeleteHabit from 'redux-modules/habits/hooks/useDeleteHabit';
import useHabit from 'redux-modules/habits/hooks/useHabit';
import RenameHabitDialog from '../dialogs/RenameHabitDialog';

type HabitOptionProps = {
  habitId: string;
};

const HabitOptions: FunctionComponent<HabitOptionProps> = ({ habitId }) => {
  const habit: { name: string; history: object | undefined } = useHabit(habitId);

  const iconButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openOptions = () => setIsOpen(true);
  const closeOptions = () => setIsOpen(false);

  const [renameOpen, setIsRenameOpen] = useState(false);

  const deleteHabit = useDeleteHabit(habitId);

  if (!habit) {
    return null;
  }
  return (
    <>
      <IconButton
        ref={iconButtonRef}
        edge="end"
        aria-label="options for habit"
        onClick={openOptions}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={iconButtonRef.current}
        keepMounted
        open={isOpen}
        onClose={closeOptions}
      >
        <MenuItem
          onClick={() => {
            setIsRenameOpen(true);
            closeOptions();
          }}
        >
          Rename
        </MenuItem>
        <MenuItem
          onClick={() => {
            deleteHabit();
            closeOptions();
          }}
        >
          Delete
        </MenuItem>
      </Menu>
      <RenameHabitDialog isOpen={renameOpen} habitId={habitId} setIsRenameOpen={setIsRenameOpen} />
    </>
  );
};

export default HabitOptions;

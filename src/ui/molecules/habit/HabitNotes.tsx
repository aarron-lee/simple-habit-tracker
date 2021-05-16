import React, { FunctionComponent, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import useForm from 'hooks/useForm';
import { css } from 'emotion';

const formStyles: string = css`
  display: flex;
  flex-direction: column;
`
const buttonContainerStyles: string = css`
  display: flex;
  flex-direction: row;
`
const preStyles: string = css`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid black;
`

const textAreaStyles = css`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  outline: none;
`

type Props = {
  notes: string;
  notesOpen: boolean;
  updateNotes?: (notes: string) => any;
}

const HabitNotes: FunctionComponent<Props> = ({ notes, notesOpen, updateNotes }) => {
  const [editNotes, setEditNotes] = useState(false)
  const { formState, updateField, resetForm } = useForm();

  const toggleEditNotes = () => {
    setEditNotes(!editNotes)
  }

  if (!notesOpen) {
    return null;
  }

  if (!editNotes) {
    return <pre className={preStyles} onClick={toggleEditNotes}>{notes.length ? notes : 'No Notes'}</pre>
  }
  return (
    <div className={formStyles}>
      <TextareaAutosize
        className={textAreaStyles}
        autoFocus
        id="notes"
        name="notes"
        value={formState.notes ?? notes ?? ''}
        onChange={updateField}
        autoComplete="off"
      />
      <div className={buttonContainerStyles}>
        <Button onClick={() => setEditNotes(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={(e) => {
            updateNotes && updateNotes(formState.notes)
            resetForm();
            setEditNotes(false);
          }}
          color="primary"
        >Update</Button>
      </div>
    </div>
  );
}

export default HabitNotes;
import React, { FunctionComponent, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useForm from 'hooks/useForm';

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
    return <div onClick={toggleEditNotes}>{notes.length ? notes : 'No Notes'}</div>
  }
  return (
    <div>
      <TextField
        autoFocus
        margin="dense"
        id="notes"
        name="notes"
        value={formState.notes ?? notes ?? ''}
        onChange={updateField}
        label="Notes"
        type="text"
        fullWidth
        autoComplete="off"
      />
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
  );
}

export default HabitNotes;
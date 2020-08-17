import { useReducer } from 'react';

const SET = 'SET';
const RESET = 'RESET';

const formReducer = (state, action) => {
  if (action.type === SET) {
    return { ...state, [action.field]: action.payload };
  }
  if (action.type === RESET) {
    return {};
  }
};

function useForm() {
  const [state, dispatch] = useReducer(formReducer, {});

  const updateField = ({ target }) =>
    dispatch({
      type: SET,
      field: target.name,
      payload: target.value,
    });
  const resetForm = ({ target }) =>
    dispatch({
      type: RESET,
    });
  return { formState: state, updateField, resetForm };
}

export default useForm;

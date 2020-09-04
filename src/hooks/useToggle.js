import { useCallback, useState } from 'react';

function useToggle(defaultValue = false) {
  const [toggle, setToggle] = useState(defaultValue);

  const toggleValue = useCallback(() => {
    setToggle((state) => !state);
  }, []);

  return [toggle, toggleValue, setToggle];
}

export default useToggle;

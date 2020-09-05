import { useCallback, useState } from 'react';

function useToggle(defaultValue = false) {
  const [toggle, setToggle] = useState(defaultValue);

  const toggleValue = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return [toggle, toggleValue, setToggle];
}

export default useToggle;

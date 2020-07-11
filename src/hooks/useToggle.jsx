import { useState } from 'react';

function useToggle(initialToggle = false) {
  const [isActive, setActive] = useState(initialToggle);

  const toggle = (toggleState = isActive) => {
    setActive(!toggleState);
  };

  return [isActive, toggle];
}

export default useToggle;

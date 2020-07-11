import { useState } from 'react';

function useToggle(initialToggle = false) {
  const [isActive, setActive] = useState(initialToggle);

  const toggle = () => {
    setActive(!isActive);
  };

  return [isActive, toggle];
}

export default useToggle;

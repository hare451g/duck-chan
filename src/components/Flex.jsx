import React from 'react';

import './Flex.css';

function Flex({ children, direction, align, justify, maxWidth, ...rest }) {
  const styles = {
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    maxWidth,
    ...rest,
  };

  return (
    <div style={styles} className="flex" {...rest}>
      {children}
    </div>
  );
}

export default Flex;

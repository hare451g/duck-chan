import React from 'react';

function Flex({ children, direction, align, justify, width, height, ...rest }) {
  const styles = {
    display: 'flex',
    flexDirection: direction || 'row',
    alignItems: align,
    justifyContents: justify,
    width,
    height,
    ...rest.style,
  };

  return (
    <div style={styles} {...rest}>
      {children}
    </div>
  );
}

export default Flex;

import React from 'react';

function Box({
  children,
  width,
  height,
  border,
  borderRadius,
  background,
  ...rest
}) {
  const styles = {
    width,
    height,
    border: border || 'none',
    borderRadius,
    background,
    ...rest.style,
  };

  return (
    <div style={styles} {...rest}>
      {children}
    </div>
  );
}

export default Box;

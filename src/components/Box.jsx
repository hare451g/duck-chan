import React from 'react';

function Box({
  children,
  width,
  height,
  border,
  borderRadius,
  background,
  margin,
  padding,
  ...rest
}) {
  const styles = {
    width,
    height,
    border: border || 'none',
    borderRadius,
    background,
    margin,
    padding,
    ...rest.style,
  };

  return (
    <div style={styles} {...rest}>
      {children}
    </div>
  );
}

export default Box;

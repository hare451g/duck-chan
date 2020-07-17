import React from 'react';

import './Box.css';

function Box({
  children,
  width,
  height,
  border,
  borderRadius,
  background,
  margin,
  padding,
  isBordered,
  ...rest
}) {
  const styles = {
    width,
    height,
    borderRadius,
    background,
    margin,
    padding,
    ...rest.style,
  };

  const className = `box ${isBordered && 'is-bordered'}`;

  return (
    <div className={className} style={styles} {...rest}>
      {children}
    </div>
  );
}

export default Box;

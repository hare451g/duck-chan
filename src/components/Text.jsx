import React from 'react';
import './Text.css';

function Text({
  fontSize,
  fontWeight,
  lineHeight,
  color,
  padding,
  margin,
  children,
  ...rest
}) {
  const styles = {
    fontSize,
    fontWeight,
    color,
    padding,
    margin,
  };

  return (
    <span style={styles} className={`text-${color}`} {...rest}>
      {children}
    </span>
  );
}

export default Text;

import React from 'react';

function Text({
  fontSize = '16px',
  fontWeight = 400,
  color = 'body',
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

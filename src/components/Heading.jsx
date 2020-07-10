import React from 'react';

function Heading({
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
    <h2 style={styles} className={`text-${color}`} {...rest}>
      {children}
    </h2>
  );
}

export default Heading;

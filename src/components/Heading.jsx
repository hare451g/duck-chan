import React from 'react';
import './Heading.css';

function Heading({ color, children, margin, padding, ...rest }) {
  const styles = {
    color,
    padding,
    margin,
  };

  const colorClass = color ? `text-${color}` : '';

  return (
    <h2 style={styles} className={`heading ${colorClass}`} {...rest}>
      {children}
    </h2>
  );
}

export default Heading;

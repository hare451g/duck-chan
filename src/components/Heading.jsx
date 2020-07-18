import React from 'react';

import './Heading.css';

function Heading({ color, children, margin, padding, isSiteTitle, ...rest }) {
  const styles = {
    color,
    padding,
    margin,
  };

  const variantClass = isSiteTitle ? 'site-title' : '';
  const colorClass = color ? `text-${color}` : '';

  return (
    <h2
      style={styles}
      className={`heading ${variantClass} ${colorClass}`}
      {...rest}
    >
      {children}
    </h2>
  );
}

export default Heading;

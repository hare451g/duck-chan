import React from 'react';
import './styles.css';

function Text({ color = 'body', heading = false, children }) {
  const className = `text-${color}`;

  if (heading) {
    return <h1 className={`heading-${heading} ${className}`}>{children}</h1>;
  }

  return <span className={className}>{children}</span>;
}

export default Text;

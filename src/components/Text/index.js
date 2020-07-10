import React from 'react';

function Text({ color = 'body', heading = false, children, ...rest }) {
  const className = `text-${color}`;

  if (heading) {
    return (
      <h1 className={`heading-${heading} ${className}`} {...rest}>
        {children}
      </h1>
    );
  }

  return (
    <span className={className} {...rest}>
      {children}
    </span>
  );
}

export default Text;

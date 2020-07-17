import React from 'react';
import './Button.css';

function Button({ children, variant = '', color = '', ...rest }) {
  const variantClass = variant ? `btn-${variant}` : '';
  const colorClass = variant ? `btn-${color}` : '';

  return (
    <button className={`btn ${variantClass} ${colorClass}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

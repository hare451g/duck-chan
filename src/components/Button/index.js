import React from 'react';
import './styles.css';

function Button({ children, variant, ...rest }) {
  return (
    <button className={`btn btn-${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

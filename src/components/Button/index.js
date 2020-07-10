import React from 'react';
import './styles.css';

function Button({ children, ...rest }) {
  return (
    <button className="btn-naked" {...rest}>
      {children}
    </button>
  );
}

export default Button;

import React from 'react';
import './styles.css';

const containerStyles = {
  padding: '16px 8px',
  border: '1px solid gainsboro',
};

function Box({ children, style }) {
  return <div style={{ ...containerStyles, ...style }}>{children}</div>;
}

export default Box;

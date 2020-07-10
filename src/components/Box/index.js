import React from 'react';
import './styles.css';

const containerStyles = {
  border: '1px solid #acacac',
  borderRadius: '4px',
};

function Box({ children, ...rest }) {
  return <div style={{ ...containerStyles, ...rest.style }}>{children}</div>;
}

export default Box;

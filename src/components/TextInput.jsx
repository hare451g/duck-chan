import React from 'react';

import './TextInput.css';

function TextInput({
  minHeight,
  width,
  border,
  borderRadius,
  padding,
  fontSize,
  ...rest
}) {
  const styles = {
    minHeight,
    border,
    borderRadius,
    padding,
    fontSize,
  };

  return <input style={styles} className="text-input" {...rest} />;
}

export default TextInput;

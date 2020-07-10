import React from 'react';

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
    minHeight: minHeight || '24px',
    border: border || '1px solid var(--color-gray)',
    borderRadius: borderRadius || '4px',
    padding: padding || '8px',
    fontSize: fontSize || '14px',
  };

  return <input style={styles} {...rest} />;
}

export default TextInput;

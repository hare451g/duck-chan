import React from 'react';

function Textarea({
  minHeight,
  width,
  border,
  borderRadius,
  padding,
  fontSize,
  ...rest
}) {
  const styles = {
    minHeight: minHeight || '95px',
    border: border || '1px solid var(--color-gray)',
    borderRadius: borderRadius || '4px',
    padding: padding || '16px',
    fontSize: fontSize || '14px',
  };

  return <textarea style={styles} {...rest} />;
}

export default Textarea;

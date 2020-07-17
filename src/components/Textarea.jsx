import React from 'react';
import './Textarea.css';

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
    minHeight,
    border,
    borderRadius,
    padding,
    fontSize,
  };

  return <textarea style={styles} className="textarea" {...rest} />;
}

export default Textarea;

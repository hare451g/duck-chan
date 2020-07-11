import React from 'react';
import Box from './Box';

function Flex({ children, direction, align, justify, maxWidth, ...rest }) {
  const styles = {
    display: 'flex',
    flexDirection: direction || 'row',
    alignItems: align,
    justifyContent: justify,
    maxWidth,
    ...rest,
  };

  return (
    <Box style={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Flex;

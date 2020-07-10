import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './components/Text';
import Box from './components/Box';

ReactDOM.render(
  <React.StrictMode>
    <Text color="primary" heading={4}>
      Duck chan
    </Text>
    <Box
      style={{
        width: '250px',
      }}
    >
      <Text color="primary" heading={6}>
        This is title
      </Text>
      <Text>this is a body text lorem ipsum dolor sit amet</Text>
    </Box>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './components/Text';
import Box from './components/Box';
import Button from './components/Button';

ReactDOM.render(
  <React.StrictMode>
    <Box style={{ maxWidth: '720px', margin: 'auto' }} isBorderless>
      <Text color="primary" heading="5" style={{ marginBottom: '52px' }}>
        Duck chan
      </Text>
      <Box
        style={{
          width: '250px',
        }}
      >
        <Text color="primary" heading="5">
          This is title
        </Text>
        <Text>this is a body text lorem ipsum dolor sit amet</Text>
        <Button variant="primary">Create Thread</Button>
      </Box>
    </Box>
  </React.StrictMode>,
  document.getElementById('root')
);

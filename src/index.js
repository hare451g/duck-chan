import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './components/Text';

ReactDOM.render(
  <React.StrictMode>
    <Text color="primary" heading={4}>
      Duck chan
    </Text>
  </React.StrictMode>,
  document.getElementById('root')
);

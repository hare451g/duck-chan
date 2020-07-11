import React from 'react';

import Flex from '../components/Flex';
import Heading from '../components/Heading';
import useThread from '../hooks/useThread';

import ThreadList from './ThreadList';

function App() {
  const { threads, selected, onThreadSelected, onPostComment } = useThread([]);

  return (
    <>
      <Flex direction="column" margin="auto" maxWidth="calc(100vw - 64px)">
        <Heading color="primary" fontSize="24px" fontWeight="bold">
          duck-chan
        </Heading>
        <ThreadList
          threads={threads}
          onThreadSelected={onThreadSelected}
          selected={selected}
          onPostComment={onPostComment}
        />
      </Flex>
    </>
  );
}

export default App;

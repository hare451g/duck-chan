import React from 'react';

import Flex from '../components/Flex';
import Heading from '../components/Heading';

import useThread from '../hooks/useThread';

// mocks
import mockThreads from '../threads.mock';

import ThreadList from './ThreadList';
import ThreadDetails from './ThreadDetails';

function App() {
  const { threads, selected, onThreadSelected, onPostComment } = useThread(
    mockThreads
  );
  return (
    <>
      <Flex direction="column" margin="auto" maxWidth="420px">
        <Heading color="primary" fontSize="24px" fontWeight="bold">
          duck-chan
        </Heading>
        {threads[selected] ? (
          <ThreadDetails
            selected={selected}
            selectedThread={threads[selected]}
            onThreadSelected={onThreadSelected}
            onPostComment={onPostComment}
          />
        ) : (
          <ThreadList threads={threads} onThreadSelected={onThreadSelected} />
        )}
      </Flex>
    </>
  );
}

export default App;

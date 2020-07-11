import React from 'react';

import Flex from '../components/Flex';
import Heading from '../components/Heading';
import Button from '../components/Button';

import useThread from '../hooks/useThread';
import useToggle from '../hooks/useToggle';

import ThreadList from './ThreadList';
import NewThreadForm from './NewThreadForm';
import ThreadDetails from './ThreadDetails';

function App() {
  const {
    threads,
    selected,
    onCreateThread,
    onThreadSelected,
    onPostComment,
  } = useThread([]);

  const [isThreadFormVisible, toggleThreadForm] = useToggle(false);

  const onPost = (data) => {
    onCreateThread(data);
    toggleThreadForm();
  };

  return (
    <>
      <Flex direction="column" margin="auto" maxWidth="420px">
        <Heading color="primary" fontSize="24px" fontWeight="bold">
          <span role="img" aria-label="duck">
            🦆
          </span>
          -chan
        </Heading>
        {isThreadFormVisible ? (
          <NewThreadForm onCancel={toggleThreadForm} onPost={onPost} />
        ) : threads[selected] ? (
          <ThreadDetails
            selected={selected}
            selectedThread={threads[selected]}
            onThreadSelected={onThreadSelected}
            onPostComment={onPostComment}
          />
        ) : (
          <>
            <ThreadList threads={threads} onThreadSelected={onThreadSelected} />
            <Button variant="naked" color="primary" onClick={toggleThreadForm}>
              Create New Thread
            </Button>
          </>
        )}
      </Flex>
    </>
  );
}

export default App;

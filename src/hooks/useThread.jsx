import { useState } from 'react';

function useThread(initialThreads = []) {
  const [threads, setThreads] = useState(initialThreads);
  const [selected, setSelected] = useState([]);

  const onThreadSelected = (index) => {
    setSelected(threads[index]);
  };

  const onCreateThread = ({ title, name, content }) => {
    setThreads([...threads, { title, name, content }]);
  };

  return {
    threads,
    selected,
    onThreadSelected,
    onCreateThread,
  };
}

export default useThread;

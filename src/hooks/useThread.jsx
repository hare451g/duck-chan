import { useState } from 'react';

function useThread(initialThreads = []) {
  const [threads, setThreads] = useState(initialThreads);
  const [selected, setSelected] = useState([]);

  const onThreadSelected = (index) => {
    setSelected(threads[index] || {});
  };

  const onCreateThread = ({ title, name, content }) => {
    setThreads([
      ...threads,
      {
        createdAt: new Date().toISOString(),
        comments: [],
        title,
        name,
        content,
      },
    ]);
  };

  const onPostComment = ({ threadIndex, content }) => {
    const comment = {
      sender: 'anon',
      createdAt: new Date().toISOString(),
      content,
    };

    setThreads(
      threads.map((thread, index) => {
        if (threadIndex === index) {
          return {
            ...thread,
            comments: [...thread.comments, comment],
          };
        }
        return thread;
      })
    );
  };

  return {
    threads,
    selected,
    onThreadSelected,
    onCreateThread,
    onPostComment,
  };
}

export default useThread;

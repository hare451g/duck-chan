import { useState } from 'react';

function useThread(initialThreads = []) {
  const [threads, setThreads] = useState(initialThreads);
  const [selected, setSelected] = useState();

  const onThreadSelected = (index) => {
    console.log(index);
    setSelected(index);
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
    console.log(threadIndex, content);
    const comment = {
      sender: 'anon',
      createdAt: new Date().toISOString(),
      content,
    };

    console.log(
      threads.map((thread, index) =>
        threadIndex === index
          ? {
              ...thread,
              comments: [...thread.comments, comment],
            }
          : thread
      )
    );

    setThreads(
      threads.map((thread, index) =>
        threadIndex === index
          ? {
              ...thread,
              comments: [...thread.comments, comment],
            }
          : thread
      )
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

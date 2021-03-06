import React from 'react';

import { Flex, Button, Thread } from '../components';
import { CommentList, CommentForm } from './index';

function ThreadDetails({
  selected,
  selectedThread,
  onThreadSelected,
  onPostComment,
}) {
  return (
    <Flex direction="column">
      <Thread {...selectedThread} isDetail />
      <CommentList comments={selectedThread.comments} />
      <CommentForm
        threadName={selectedThread.title}
        threadIndex={selected}
        onPost={onPostComment}
        onCancel={() => onThreadSelected(null)}
      />
      <Button
        onClick={() => onThreadSelected(null)}
        variant="naked"
        color="primary"
      >
        Back to Threads
      </Button>
    </Flex>
  );
}

export default ThreadDetails;

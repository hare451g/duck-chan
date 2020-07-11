import React from 'react';

import Flex from '../components/Flex';
import Button from '../components/Button';

import Thread from './Thread';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function ThreadDetails({
  selected,
  selectedThread,
  onThreadSelected,
  onPostComment,
}) {
  return (
    <Flex direction="column">
      <Button
        onClick={() => onThreadSelected(null)}
        variant="naked"
        color="primary"
      >
        Back to Threads
      </Button>
      <Thread {...selectedThread} isDetail />
      <CommentList comments={selectedThread.comments} />
      <CommentForm
        threadName={selectedThread.title}
        threadIndex={selected}
        onPost={onPostComment}
        onCancel={() => onThreadSelected(null)}
      />
    </Flex>
  );
}

export default ThreadDetails;

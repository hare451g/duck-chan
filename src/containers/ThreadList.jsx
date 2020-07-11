import React from 'react';

import Flex from '../components/Flex';

import Thread from './Thread';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Text from '../components/Text';

function ThreadList({
  threads = [],
  onThreadSelected = () => {},
  selected = {},
  onPostComment = () => {},
}) {
  if (threads.length > 0) {
    return threads.map(
      ({ id, sender, content, createdAt, title, comments }, index) => (
        <Flex direction="column" key={`thread-${index}`}>
          <Thread
            sender={sender}
            content={content}
            createdAt={createdAt}
            title={title}
            onReplyClick={onThreadSelected}
            index={index}
          />
          {comments && <CommentList comments={comments} threadIndex={index} />}
          {selected.id === id && (
            <CommentForm
              threadName={title}
              threadIndex={index}
              onPost={onPostComment}
              onCancel={() => onThreadSelected(null)}
            />
          )}
        </Flex>
      )
    );
  }
  return <Text> No available threads</Text>;
}

export default ThreadList;

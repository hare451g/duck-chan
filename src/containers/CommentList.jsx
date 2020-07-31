import React from 'react';

import { Comment } from '../components';

function CommentList({ comments, threadIndex }) {
  return comments.map(({ sender, createdAt, content }, index) => (
    <Comment
      sender={sender}
      createdAt={createdAt}
      content={content}
      key={`comments-${threadIndex}-${index}`}
    />
  ));
}
export default CommentList;

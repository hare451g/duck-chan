import React from 'react';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Text from '../components/Text';

import './Comment.css';

function Comment({ sender = 'anon', createdAt = 'n/a', content = '' }) {
  return (
    <Box isBordered>
      <Flex direction="column">
        <Text className="comment-label">
          {sender} - {createdAt}
        </Text>
        <Text className="comment-content">{content}</Text>
      </Flex>
    </Box>
  );
}

export default Comment;

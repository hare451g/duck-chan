import React from 'react';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Text from '../components/Text';

function Comment({ sender = 'anon', createdAt = 'n/a', content = '' }) {
  return (
    <Box
      border="1px solid #ACACAC"
      borderRadius="4px"
      padding="8px 8px"
      margin="0 0 0 48px"
    >
      <Flex direction="column">
        <Text fontSize="14px" fontWeight="normal" color="muted">
          {sender} - {createdAt}
        </Text>
        <Box padding="16px 0">
          <Text
            fontSize="14px"
            fontWeight="normal"
            color="body"
            lineHeight="20px"
          >
            {content}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Comment;

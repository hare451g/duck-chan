import React from 'react';
import Flex from '../components/Flex';
import Box from '../components/Box';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Button from '../components/Button';

function Thread({
  title = 'untitled',
  sender = 'anon',
  createdAt = 'n/a',
  content = '',
  onReplyClick = () => {},
}) {
  return (
    <Box border="1px solid #ACACAC" padding="8px 8px" margin="16px 0px">
      <Flex direction="column">
        <Heading fontSize="18px" fontWeight="bold" color="heading">
          {title}
        </Heading>
        <Text fontSize="14px" fontWeight="normal" color="body">
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
      <Flex justify="flex-end" width="100%">
        <Button variant="naked" onClick={onReplyClick}>
          Reply
        </Button>
      </Flex>
    </Box>
  );
}

export default Thread;

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
  onDetailsClick = () => {},
  isDetail = false,
  index,
}) {
  return (
    <Box
      border="1px solid #ACACAC"
      borderRadius="4px"
      padding="8px 8px"
      margin="16px 0px"
    >
      <Flex direction="column">
        <Heading fontSize="18px" fontWeight="bold" color="heading">
          {title}
        </Heading>
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
      <Flex justify="flex-end" width="100%">
        {!isDetail && (
          <Button
            variant="naked"
            color="primary"
            onClick={() => onDetailsClick(index)}
          >
            show thread
          </Button>
        )}
      </Flex>
    </Box>
  );
}

export default Thread;

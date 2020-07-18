import React from 'react';

import Flex from '../components/Flex';
import Box from '../components/Box';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Button from '../components/Button';

import './Thread.css';

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
    <Box isBordered>
      <Flex direction="column">
        <Heading>{title}</Heading>
        <Text className="thread-label">
          {sender} - {createdAt}
        </Text>
        <Text className="thread-content">{content}</Text>
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

import React from 'react';

import Flex from '../components/Flex';
import Text from '../components/Text';
import Thread from '../components/Thread';

function ThreadList({ threads = [], onThreadSelected = () => {} }) {
  if (threads.length > 0) {
    return threads.map(
      ({ sender, content, createdAt, title, comments }, index) => (
        <Flex direction="column" key={`thread-${index}`}>
          <Thread
            sender={sender}
            content={content}
            createdAt={createdAt}
            title={title}
            onDetailsClick={onThreadSelected}
            index={index}
          />
        </Flex>
      )
    );
  }
  return <Text> No available threads</Text>;
}

export default ThreadList;

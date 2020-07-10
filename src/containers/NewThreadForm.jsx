import React from 'react';

import Flex from '../components/Flex';
import Text from '../components/Text';
import TextInput from '../components/TextInput';
import Textarea from '../components/Textarea';
import Button from '../components/Button';

function NewThreadForm() {
  return (
    <Flex direction="column" padding="0 16px">
      <Text fontSize="14px" fontWeight="bold" margin="8px 0px">
        Post New Thread
      </Text>
      <Flex direction="column" margin="16px 0">
        <Text fontSize="14px" fontWeight="bold" margin="8px 0px">
          Title
        </Text>
        <TextInput type="text" />
      </Flex>
      <Flex direction="column" margin="16px 0">
        <Text fontSize="14px" fontWeight="bold" margin="8px 0px">
          Post as
        </Text>
        <TextInput type="text" />
      </Flex>
      <Flex direction="column" margin="16px 0">
        <Text fontSize="14px" fontWeight="bold" margin="8px 0px">
          Content
        </Text>
        <Textarea placeholder="Write your thread" />
      </Flex>
      <Flex justify="flex-end" align="center" margin="8px 0px">
        <Button variant="naked" color="muted">
          cancel
        </Button>
        <Button variant="naked" color="primary">
          post
        </Button>
      </Flex>
    </Flex>
  );
}

export default NewThreadForm;

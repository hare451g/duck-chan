import React from 'react';

// components
import { Flex, Text, TextInput, Textarea, Button } from '../components';

// hooks
import { useForm } from '../hooks';

function NewThreadForm({ onPost = () => {}, onCancel = () => {} }) {
  const [title, setTitle] = useForm('');
  const [name, setName] = useForm('Anon');
  const [content, setContent] = useForm('');

  return (
    <Flex direction="column">
      <Flex direction="column" margin="16px 0">
        <Text fontSize="14px" fontWeight="bold" margin="8px 0px">
          Title
        </Text>
        <TextInput type="text" value={title} onChange={setTitle} />
      </Flex>
      <Flex direction="column" margin="16px 0">
        <Text fontSize="14px" fontWeight="bold" margin="8px 0px">
          Post as
        </Text>
        <TextInput type="text" value={name} onChange={setName} />
      </Flex>

      <Flex direction="column" margin="16px 0">
        <Text fontSize="14px" fontWeight="bold" margin="8px 0px">
          Content
        </Text>
        <Textarea
          placeholder="Write your thread"
          value={content}
          onChange={setContent}
        />
      </Flex>

      <Flex justify="flex-end" align="center" margin="8px 0px">
        <Button variant="naked" color="muted" onClick={onCancel}>
          cancel
        </Button>
        <Button
          variant="naked"
          color="primary"
          onClick={() => onPost({ title, name, content })}
        >
          post
        </Button>
      </Flex>
    </Flex>
  );
}

export default NewThreadForm;

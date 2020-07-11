import React from 'react';

import Flex from '../components/Flex';
import Textarea from '../components/Textarea';
import Text from '../components/Text';
import Button from '../components/Button';
import useForm from '../hooks/useForm';

function CommentForm({
  threadName = 'untitled',
  threadIndex = 0,
  onCancel = () => {},
  onPost = () => {},
}) {
  const [content, setContent] = useForm('');
  return (
    <Flex direction="column" margin="16px 0 0 48px">
      <Text fontSize="14px" fontWeight="bold" margin="8px 0px">
        Reply to: {threadName}
      </Text>
      <Textarea
        placeholder="Write comments . . . "
        value={content}
        onChange={setContent}
      />
      <Flex justify="flex-end" align="center" margin="8px 0px">
        <Button variant="naked" color="muted" onClick={onCancel}>
          cancel
        </Button>
        <Button
          variant="naked"
          color="primary"
          onClick={() => onPost({ threadIndex, content })}
        >
          post
        </Button>
      </Flex>
    </Flex>
  );
}

export default CommentForm;

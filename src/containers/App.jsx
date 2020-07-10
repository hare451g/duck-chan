import React from 'react';

import Flex from '../components/Flex';
import Thread from './Thread';
import Comment from './Comment';
import Textarea from '../components/Textarea';
import Text from '../components/Text';
import Button from '../components/Button';

function App() {
  return (
    <>
      <Flex direction="column" margin="0px 16px">
        <Thread
          title="KINO - Quibi Greenlights 'Tomie'"
          sender="anon"
          createdAt="07/07/2020 - 20:03:12"
          content="Written by Johnson-McGoldrick, Tomie is the story of a beautiful high school girl (Rudolph) who goes missing and pieces of her body are discovered scattered around a small town. But what starts out as a murder mystery turns into something even more horrific."
        />
        <Comment
          sender="anon"
          createdAt="07/07/2020 - 20:03:12"
          content="Johnson-McGoldrick co-wrote Aquaman, which grossed over $1 billion worldwide and he is currently writing its sequel. "
        />
        <Flex direction="column" margin="16px 0 0 48px">
          <Text fontSize="14px" fontWeight="bold" margin="8px 0px">
            Reply to: KINO - Quibi Greenlights 'Tomie'
          </Text>
          <Textarea placeholder="Write comments . . . " />
          <Flex justify="flex-end" align="center" margin="8px 0px">
            <Button variant="naked" color="muted">
              cancel
            </Button>
            <Button variant="naked" color="primary">
              post
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App;

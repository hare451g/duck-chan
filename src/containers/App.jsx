import React from 'react';

import Flex from '../components/Flex';
import Thread from './Thread';
import Comment from './Comment';
import CommentForm from './CommentForm';
import NewThreadForm from './NewThreadForm';

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
        <CommentForm threadName="KINO - Quibi Greenlights 'Tomie'" />
        <NewThreadForm />
      </Flex>
    </>
  );
}

export default App;

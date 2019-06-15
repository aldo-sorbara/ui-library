import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { QuestionTitle, Description } from '../../components/web/question';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Question', module)
  .addDecorator(withKnobs)
  .add('QuestionTitle', () => (
    <QuestionTitle>
      {getData(text, 'texts', 'This is a QuestionTitle component')}
    </QuestionTitle>
  ))
  .add('Description', () => (
    <Description>
      {getData(text, 'texts', 'This is a Description component')}
    </Description>
  ));

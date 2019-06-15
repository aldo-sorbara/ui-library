import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Emoji from '../../components/web/emoji';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Emoji', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <Emoji>{getData(text, 'texts', 'This is an Emoji Component 👌')}</Emoji>
  ));

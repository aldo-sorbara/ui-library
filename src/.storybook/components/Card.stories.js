import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Card from '../../components/web/card';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <Card data='cardDefault'>
      {getData(text, 'texts', 'This is a card container')}
    </Card>
  ))
  .add('active card', () => (
    <Card data='cardActive' active={getData(boolean, 'active', true)}>
      {getData(text, 'texts', 'This is an active card')}
    </Card>
  ));

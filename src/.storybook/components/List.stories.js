import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { List, ListItem } from '../../components/web/list';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <List data='listDefault'>
      <ListItem> {getData(text, 'texts', 'Test 1')}</ListItem>
      <ListItem> {getData(text, 'texts', 'Test 2')}</ListItem>
      <ListItem> {getData(text, 'texts', 'Test 3')}</ListItem>
    </List>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { RadioGroup, RadioButton } from '../../components/web/radiobutton';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('RadioButton', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <RadioGroup
      name='test'
      onChange={value => {
        console.log(value);
      }}
    >
      <RadioButton
        data='test1'
        value={getData(text, 'texts', 'Test1')}
        label='test1'
      />
      <RadioButton
        data='test2'
        value={getData(text, 'texts', 'Test2')}
        label='test2'
      />
    </RadioGroup>
  ))
  .add('with radioButton selected', () => (
    <RadioGroup
      name='test'
      onChange={value => {
        console.log(value);
      }}
    >
      <RadioButton
        selected
        value={getData(text, 'texts', 'Test1')}
        label='test1'
        data='test1'
      />
    </RadioGroup>
  ))
  .add('with inline prop', () => (
    <RadioGroup
      name='test'
      onChange={value => {
        console.log(value);
      }}
      inline
    >
      <RadioButton
        data='test1'
        value={getData(text, 'texts', 'Test1')}
        label='test1'
      />
      <RadioButton
        data='test2'
        value={getData(text, 'texts', 'Test2')}
        label='test2'
      />
    </RadioGroup>
  ));

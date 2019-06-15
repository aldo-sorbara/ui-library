import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Checkbox from '../../components/web/checkbox';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <Checkbox data='checkbox'>
      {getData(text, 'texts', 'This is a checkbox')}
    </Checkbox>
  ))
  .add('with label link', () => (
    <Checkbox data='checkbox'>
      {getData(text, 'texts', 'This is a checkbox')}
      <a href='#'> Terminos y condiciones</a>
    </Checkbox>
  ))
  .add('with checked and onChange prop', () => (
    <Checkbox
      data='checkbox-onclick'
      onChange={e => {
        console.log(e.target.checked);
      }}
      checked={getData(boolean, 'checked', true)}
    >
      {getData(text, 'texts', 'This is a checked checkbox with onChange')}
    </Checkbox>
  ));

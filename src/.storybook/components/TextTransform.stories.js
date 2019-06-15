import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import TextTransform from '../../components/web/texttransform';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('TextTransform', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <TextTransform text={getData(text, 'texts', 'This is a form container')} />
  ));

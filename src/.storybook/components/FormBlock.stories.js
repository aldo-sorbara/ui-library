import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import FormBlock from '../../components/web/formblock';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('FormBlock', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <FormBlock>{getData(text, 'texts', 'This is a form container')}</FormBlock>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Select from '../../components/web/select';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <Select
      placeholder={getData(text, 'texts', 'Ingrese un brand')}
      options={[
        { label: 'Mango', value: 'mango' },
        { label: 'Welp', value: 'welp' },
        { label: 'Posta', value: 'posta' }
      ]}
    />
  ))
  .add('with label', () => (
    <Select
      placeholder={getData(text, 'texts', 'Ingrese un brand')}
      label={getData(text, 'texts', 'Seleccione un brand')}
      options={[
        { label: 'Mango', value: 'mango' },
        { label: 'Welp', value: 'welp' },
        { label: 'Posta', value: 'posta' }
      ]}
    />
  ));

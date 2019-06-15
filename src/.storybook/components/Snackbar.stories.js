import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Snackbar from '../../components/web/snackbar';
import { Button } from '../../components/web/button';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Snackbar', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <Snackbar
      title={getData(text, 'texts', '¡Revisá tus mensajes!')}
      content={getData(
        text,
        'texts',
        'Si no recibiste el código podés reenviarlo usando el siguiente link.'
      )}
    />
  ))
  .add('success snackbar', () => (
    <Snackbar
      title={getData(text, 'texts', '¡Revisá tus mensajes!')}
      content={getData(
        text,
        'texts',
        'Si no recibiste el código podés reenviarlo usando el siguiente link.'
      )}
      modifier='success'
    />
  ))
  .add('warning snackbar', () => (
    <Snackbar
      title={getData(text, 'texts', '¡Revisá tus mensajes!')}
      content={getData(
        text,
        'texts',
        'Si no recibiste el código podés reenviarlo usando el siguiente link.'
      )}
      modifier='warning'
    />
  ))
  .add('error snackbar', () => (
    <Snackbar
      title={getData(text, 'texts', '¡Revisá tus mensajes!')}
      content={getData(
        text,
        'texts',
        'Si no recibiste el código podés reenviarlo usando el siguiente link.'
      )}
      modifier='error'
    />
  ))
  .add('with action snackbar', () => (
    <Snackbar
      title={getData(text, 'texts', '¡Revisá tus mensajes!')}
      content={getData(
        text,
        'texts',
        'Si no recibiste el código podés reenviarlo usando el siguiente link.'
      )}
      action={
        <Button data='dismiss'>{getData(text, 'texts', 'Dismiss')}</Button>
      }
    />
  ))
  .add('fixed snackbar', () => (
    <Snackbar
      title={getData(text, 'texts', '¡Revisá tus mensajes!')}
      content={getData(
        text,
        'texts',
        'Si no recibiste el código podés reenviarlo usando el siguiente link.'
      )}
      action={
        <Button data='dismiss'>{getData(text, 'texts', 'Dismiss')}</Button>
      }
      fixed
    />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Hero from '../../components/web/hero';
import { Button } from '../../components/web/button';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Hero', module)
  .addDecorator(withKnobs)
  .add('with title', () => (
    <Hero
      title='Soña en grande'
      style={{ backgroundColor: '#0082FF', width: '400px' }}
    >
      {getData(
        text,
        'texts',
        'Créditos personales 100% online, con plazos y tasas a tu medida.'
      )}
    </Hero>
  ))
  .add('with action and title props', () => (
    <Hero
      title='Soña en grande'
      style={{ backgroundColor: '#0082FF', width: '400px' }}
      action={
        <Button
          modifiers={['inverse']}
          handleOnClick={() => console.log('CLICKED')}
          data='siguente'
        >
          Comenzar
        </Button>
      }
    >
      {getData(
        text,
        'texts',
        'Créditos personales 100% online, con plazos y tasas a tu medida.'
      )}
    </Hero>
  ));

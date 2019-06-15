import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Button, ButtonContainer } from '../../components/web/button';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <ButtonContainer>
      <Button data='button'>{getData(text, 'texts', 'Click me')}</Button>
    </ButtonContainer>
  ))
  .add('with onClick', () => (
    <ButtonContainer>
      <Button onClick={() => console.log('Click')} data='click'>
        {getData(text, 'text2', 'Click')}
      </Button>
    </ButtonContainer>
  ))
  .add('with small modifier', () => (
    <ButtonContainer>
      <Button modifiers={['small']} data='small'>
        {getData(text, 'text', 'Small')}
      </Button>
    </ButtonContainer>
  ))
  .add('with link modifier', () => (
    <ButtonContainer>
      <Button
        modifiers={['link']}
        href={getData(text, 'href', '#')}
        data='link'
      >
        {getData(text, 'text', 'Link')}
      </Button>
    </ButtonContainer>
  ))
  .add('with inverse modifier', () => (
    <ButtonContainer style={{ background: 'black', paddingTop: '1rem' }}>
      <Button modifiers={['inverse']} data='inverse'>
        {getData(text, 'text', 'Inverse')}
      </Button>
    </ButtonContainer>
  ))
  .add('with rounded modifier and icon', () => (
    <ButtonContainer>
      <Button modifiers={['rounded']} data='rounded'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          height='24'
          width='24'
          viewBox='0 0 35 35'
        >
          {/* eslint-disable max-len */}
          <path d='M26 22.87A2.14 2.14 0 0 1 26 26a2.14 2.14 0 0 1-3.13 0l-5.54-5.54-5.5 5.5c-.45.45-.98.68-1.58.7A2.1 2.1 0 0 1 8.67 26 2.1 2.1 0 0 1 8 24.42c.01-.6.24-1.13.7-1.58l5.5-5.5-5.54-5.55a2.15 2.15 0 0 1 0-3.12 2.14 2.14 0 0 1 3.12 0l5.54 5.54 5.54-5.54a2.15 2.15 0 0 1 3.13 0 2.14 2.14 0 0 1 0 3.12l-5.54 5.54L26 22.87z' />
          {/* eslint-enable max-len */}
        </svg>
      </Button>
    </ButtonContainer>
  ))
  .add('disabled', () => (
    <ButtonContainer>
      <Button disabled={getData(boolean, 'disable', true)} data='disabled'>
        {getData(text, 'textDisable', 'Cannot click me')}
      </Button>
    </ButtonContainer>
  ))
  .add('isBlocked', () => (
    <ButtonContainer>
      <Button isBlocked={getData(boolean, 'isBlocked', true)} data='isBlocked'>
        {getData(text, 'textBlocked', 'Blocked')}
      </Button>
    </ButtonContainer>
  ));

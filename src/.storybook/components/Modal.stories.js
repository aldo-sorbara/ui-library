import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Modal from '../../components/web/modal';
import { Button } from '../../components/web/button';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('with title', () => (
    <Modal title={getData(text, 'titletext', 'This is a title')}>
      {getData(
        text,
        'modaltext',
        'Modal with title Modal with title Modal with title Modal with title Modal with title Modal with titleModal with titleModal with titleModal with titleModal with title'
      )}
    </Modal>
  ))
  .add('with close button', () => (
    <Modal
      onClose={() => {
        console.log('closed!');
      }}
      title={getData(text, 'titletext', 'Has a close button')}
    >
      {getData(
        text,
        'modaltitle',
        'This can be closed modal modal modalmodal modal modalmodal modal'
      )}
    </Modal>
  ))
  .add('with action buttons', () => (
    <Modal
      onClose={() => {
        console.log('closed');
      }}
      title={getData(text, 'titletext', 'This is a title')}
      actionButtons={
        <Button isBlocked data='I-got-it'>
          I got it!
        </Button>
      }
    >
      {getData(
        text,
        'actions',
        'This is a Modal. This is a Modal. This is a Modal. This is a Modal. This is a Modal'
      )}
    </Modal>
  ))
  .add('with custom styles', () => (
    <Modal
      style={{ color: 'white', background: 'black' }}
      onClose={() => {
        console.log('closed');
      }}
      title={getData(text, 'title', 'This is a title')}
      actionButtons={<Button data='I-got-it'>I got it!</Button>}
    >
      {getData(
        text,
        'actions',
        'This is a Modal. I am setting style prop with background and color attributes'
      )}
    </Modal>
  ))
  .add('with custom close button', () => (
    <Modal
      style={{ color: 'white', background: 'black' }}
      onClose={() => {
        console.log('closed');
      }}
      closeButton={
        <Button
          onClick={() => console.log('Click')}
          data='button'
          modifiers={['rounded']}
        >
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
      }
      title={getData(text, 'title', 'This is a title')}
      actionButtons={<Button data='I-got-it'>I got it!</Button>}
    >
      {getData(
        text,
        'actions',
        'This is a Modal. I have a custom close button'
      )}
    </Modal>
  ));

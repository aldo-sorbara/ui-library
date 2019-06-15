import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';

import AppBar from '../../components/web/appbar';

storiesOf('AppBar', module)
  .addDecorator(
    withBackgrounds([
      { name: 'black', value: '#000000', default: true },
      { name: 'white', value: '#FFFFFF' }
    ])
  )

  .addDecorator(withKnobs)
  .add('with default props', () => <AppBar />, {
    backgrounds: { disable: true }
  })
  .add('inverse', () => <AppBar inverse />)
  .add('sticky', () => <AppBar sticky />, {
    backgrounds: { disable: true }
  });

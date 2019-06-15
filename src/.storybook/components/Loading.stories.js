import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Loading from '../../components/web/loading';

storiesOf('Loading', module)
  .addDecorator(withKnobs)
  .add('with default props', () => <Loading loading />)
  .add('with custom text', () => (
    <Loading text='Estamos calculando el mejor préstamo para vos.' loading />
  ));

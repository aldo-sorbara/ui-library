import React from 'react';
import { storiesOf } from '@storybook/react';

import SpotlightInput from '../../components/web/spotlightinput';

storiesOf('SpotlightInput', module).add('With info', () => (
  <div style={{ margin: '20px' }}>
    <SpotlightInput
      name='phone'
      label='Ingrese su celular'
      placeholder='42424242'
      prefix='15'
      descriptionBottom
      autoComplete={'off'}
      description='celular'
      info='Te enviaremos un codigo por SMS'
    />
  </div>
));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import welp_ar from '../../branding/brands/welp_ar';

import FacebookButton from '../../components/web/facebookbutton';

storiesOf('FacebookButton', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <FacebookButton
      facebookCallback={response => console.log(response)}
      config={welp_ar.config.onboarding}
    />
  ))
  .add('with custom text', () => (
    <FacebookButton
      facebookCallback={response => console.log(response)}
      config={welp_ar.config.onboarding}
      text='This is a Facebook button'
    />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Stepper from '../../components/web/stepper';

storiesOf('Stepper', module)
  .addDecorator(withKnobs)
  .add('with default props', () => <Stepper steps={4} />)
  .add('with current step', () => <Stepper steps={5} currentStep={2} />);

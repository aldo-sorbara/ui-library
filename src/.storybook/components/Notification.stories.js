import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import welp_ar from '../../branding/brands/welp_ar';

import Notification from '../../components/web/notification';
import { Button } from '../../components/web/button';

const getData = (func, label, textVal) => func(label, textVal);

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .add('with default props', () => (
    <Notification
      header={getData(
        text,
        'texts',
        welp_ar.wording.onboarding.notifications.productNotAvailable.headline
      )}
      subHeader={getData(
        text,
        'texts',
        welp_ar.wording.onboarding.notifications.productNotAvailable.description
      )}
    />
  ))
  .add('with icon', () => (
    <Notification
      header={getData(
        text,
        'texts',
        welp_ar.wording.onboarding.notifications.productNotAvailable.headline
      )}
      subHeader={getData(
        text,
        'texts',
        welp_ar.wording.onboarding.notifications.productNotAvailable.description
      )}
      data={welp_ar.wording.onboarding.notifications.productNotAvailable.list}
      icon={welp_ar.wording.onboarding.notifications.productNotAvailable.emoji}
    />
  ))
  .add('with action', () => (
    <Notification
      header={getData(
        text,
        'texts',
        welp_ar.wording.onboarding.notifications.productNotAvailable.headline
      )}
      subHeader={getData(
        text,
        'texts',
        welp_ar.wording.onboarding.notifications.productNotAvailable.description
      )}
      data={welp_ar.wording.onboarding.notifications.productNotAvailable.list}
      icon={welp_ar.wording.onboarding.notifications.productNotAvailable.emoji}
      action={
        <Button isBlocked data='notification_button'>
          Siguiente
        </Button>
      }
    />
  ))
  .add('with image', () => (
    <Notification
      header={getData(
        text,
        'texts',
        welp_ar.wording.onboarding.notifications.productNotAvailable.headline
      )}
      subHeader={getData(
        text,
        'texts',
        welp_ar.wording.onboarding.notifications.productNotAvailable.description
      )}
      data={welp_ar.wording.onboarding.notifications.productNotAvailable.list}
      imageUrl={'./images/posta-success.png'}
    />
  ));

import React from 'react';
import Notification from '../../../components/web/notification';
import { Button } from '../../../components/web/button';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Notification component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Notification
          header={
            welp_ar.wording.onboarding.notifications.productNotAvailable
              .headline
          }
          subHeader={
            welp_ar.wording.onboarding.notifications.productNotAvailable
              .description
          }
          data={
            welp_ar.wording.onboarding.notifications.productNotAvailable.list
          }
        />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a Notification default component', () => {
    const wrapper = mountWithTheme(
      <Notification
        header={
          welp_ar.wording.onboarding.notifications.productNotAvailable.headline
        }
        subHeader={
          welp_ar.wording.onboarding.notifications.productNotAvailable
            .description
        }
      />,
      welp_ar.theme
    );
    expect(wrapper.props().data).toBe(null);
    expect(wrapper.props().imageUrl).toBe(null);
    expect(wrapper.props().icon).toBe(null);
  });
  it('should render a Notification component with icon', () => {
    const wrapper = mountWithTheme(
      <Notification
        header={
          welp_ar.wording.onboarding.notifications.productNotAvailable.headline
        }
        subHeader={
          welp_ar.wording.onboarding.notifications.productNotAvailable
            .description
        }
        data={welp_ar.wording.onboarding.notifications.productNotAvailable.list}
        icon={
          welp_ar.wording.onboarding.notifications.productNotAvailable.emoji
        }
      />,
      welp_ar.theme
    );
    expect(wrapper.props().icon).not.toBe(null);
  });
  it('should render a Notification component with image', () => {
    const wrapper = mountWithTheme(
      <Notification
        header={
          welp_ar.wording.onboarding.notifications.productNotAvailable.headline
        }
        subHeader={
          welp_ar.wording.onboarding.notifications.productNotAvailable
            .description
        }
        data={welp_ar.wording.onboarding.notifications.productNotAvailable.list}
        imageUrl={'./images/posta-success'}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().image).not.toBe(null);
  });
  it('should render a Notification component with a content', () => {
    const wrapper = mountWithTheme(
      <Notification
        header={
          welp_ar.wording.onboarding.notifications.productNotAvailable.headline
        }
        subHeader={
          welp_ar.wording.onboarding.notifications.productNotAvailable
            .description
        }
        data={welp_ar.wording.onboarding.notifications.productNotAvailable.list}
        content={
          welp_ar.wording.onboarding.notifications.productNotAvailable
            .description
        }
        imageUrl={'./images/posta-success'}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().content).not.toBe(null);
  });
  it('should render a Notification component with an action', () => {
    const wrapper = mountWithTheme(
      <Notification
        header={
          welp_ar.wording.onboarding.notifications.productNotAvailable.headline
        }
        subHeader={
          welp_ar.wording.onboarding.notifications.productNotAvailable
            .description
        }
        data={welp_ar.wording.onboarding.notifications.productNotAvailable.list}
        content={
          welp_ar.wording.onboarding.notifications.productNotAvailable
            .description
        }
        imageUrl={'./images/posta-success'}
        action={
          <Button isBlocked data='notification_button'>
            Siguiente
          </Button>
        }
      />,
      welp_ar.theme
    );
    expect(wrapper.props().action).not.toBe(null);
  });
});

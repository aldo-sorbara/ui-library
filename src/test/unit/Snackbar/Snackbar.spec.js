import React from 'react';
import Snackbar from '../../../components/web/snackbar';
import { Button } from '../../../components/web/button';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Snackbar component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Snackbar
          title={
            welp_ar.wording.onboarding.basicInfo.inputSMS.alert.contentFeatured
          }
          content={welp_ar.wording.onboarding.basicInfo.inputSMS.alert.content}
        />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a success snackbar', () => {
    const wrapper = mountWithTheme(
      <Snackbar
        title={
          welp_ar.wording.onboarding.basicInfo.inputSMS.alert.contentFeatured
        }
        content={welp_ar.wording.onboarding.basicInfo.inputSMS.alert.content}
        modifier='success'
      />,
      welp_ar.theme
    );
    expect(wrapper.props().modifier).toEqual('success');
  });
  it('should render a warning snackbar', () => {
    const wrapper = mountWithTheme(
      <Snackbar
        title={
          welp_ar.wording.onboarding.basicInfo.inputSMS.alert.contentFeatured
        }
        content={welp_ar.wording.onboarding.basicInfo.inputSMS.alert.content}
        modifier='warning'
      />,
      welp_ar.theme
    );
    expect(wrapper.props().modifier).toEqual('warning');
  });
  it('should render an error snackbar', () => {
    const wrapper = mountWithTheme(
      <Snackbar
        title={
          welp_ar.wording.onboarding.basicInfo.inputSMS.alert.contentFeatured
        }
        content={welp_ar.wording.onboarding.basicInfo.inputSMS.alert.content}
        modifier='error'
      />,
      welp_ar.theme
    );
    expect(wrapper.props().modifier).toEqual('error');
  });
  it('should render a snackbar with action', () => {
    const wrapper = mountWithTheme(
      <Snackbar
        title={
          welp_ar.wording.onboarding.basicInfo.inputSMS.alert.contentFeatured
        }
        content={welp_ar.wording.onboarding.basicInfo.inputSMS.alert.content}
        action={<Button data='dismiss'>Dismiss</Button>}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().action).not.toBe(undefined);
  });
  it('should render a fixed snackbar', () => {
    const wrapper = mountWithTheme(
      <Snackbar
        title={
          welp_ar.wording.onboarding.basicInfo.inputSMS.alert.contentFeatured
        }
        content={welp_ar.wording.onboarding.basicInfo.inputSMS.alert.content}
        action={<Button data='dismiss'>Dismiss</Button>}
        fixed
      />,
      welp_ar.theme
    );
    expect(wrapper.props().fixed).toBe(true);
    expect(wrapper).toHaveStyleRule('position', 'fixed');
  });
  it('should render a snackbar without spacerFb', () => {
    const theme = welp_ar.theme;
    theme.spacer.blockSpacerFb = null;
    const wrapper = mountWithTheme(
      <Snackbar
        title={
          welp_ar.wording.onboarding.basicInfo.inputSMS.alert.contentFeatured
        }
        content={welp_ar.wording.onboarding.basicInfo.inputSMS.alert.content}
      />,
      theme
    );
    expect(wrapper).toHaveStyleRule('margin-top', '1.25rem');
  });
});

import React from 'react';
import Stepper from '../../../components/web/stepper';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Stepper component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Stepper steps={5} />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a default stepper', () => {
    const wrapper = mountWithTheme(<Stepper steps={3} />, welp_ar.theme);
    expect(wrapper.props().steps).toBe(3);
    expect(wrapper.props().currentStep).toBe(1);
  });
  it('should render a Stepper with steps and currentStep', () => {
    const wrapper = mountWithTheme(
      <Stepper steps={5} currentStep={2} />,
      welp_ar.theme
    );
    expect(wrapper.props().steps).toBe(5);
    expect(wrapper.props().currentStep).toBe(2);
  });
  it('should render a complete Stepper', () => {
    const wrapper = mountWithTheme(
      <Stepper steps={5} currentStep={5} />,
      welp_ar.theme
    );
    expect(wrapper.props().steps).toBe(5);
    expect(wrapper.props().currentStep).toBe(5);
  });
});

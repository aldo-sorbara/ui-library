import React from 'react';
import Loading from '../../../components/web/loading';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Loading component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Loading loading />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a loading with custom text', () => {
    const wrapper = mountWithTheme(
      <Loading loading text='Estamos calculando el mejor préstamo para vos.' />,
      welp_ar.theme
    );
    expect(wrapper.props().text).not.toBe(null);
  });
  it('should render a disabled loading', () => {
    const wrapper = mountWithTheme(<Loading loading={false} />, welp_ar.theme);
    expect(wrapper.props().loading).toBe(false);
  });
  it('should render a big loading', () => {
    const wrapper = mountWithTheme(
      <Loading windowWidth={1024} loading />,
      welp_ar.theme
    );
    expect(wrapper.props().windowWidth > 1000).toBeTruthy();
  });
});

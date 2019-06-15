import React from 'react';
import AppBar from '../../../components/web/appbar';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('AppBar component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <AppBar className='test-appBar' />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a default AppBar', () => {
    const wrapper = mountWithTheme(
      <AppBar inverse={false} sticky={false} className='test-appbar' />,
      welp_ar.theme
    );
    expect(wrapper.props().inverse).toBe(false);
    expect(wrapper.props().sticky).toBe(false);
  });
  it('should render an inverse AppBar', () => {
    const wrapper = mountWithTheme(
      <AppBar inverse className='inverse-appBar' />,
      welp_ar.theme
    );
    expect(wrapper.props().inverse).toBe(true);
  });
  it('should render a sticky AppBar', () => {
    const wrapper = mountWithTheme(
      <AppBar sticky className='sticky-appBar' />,
      welp_ar.theme
    );
    expect(wrapper.props().sticky).toBe(true);
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('top', '0');
    expect(wrapper).toHaveStyleRule('left', '0');
  });
});

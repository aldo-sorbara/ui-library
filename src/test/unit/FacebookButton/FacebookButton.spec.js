import React from 'react';
import FacebookButton from '../../../components/web/facebookbutton';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Emoji component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <FacebookButton
          facebookCallback={response => console.log(response)}
          config={welp_ar.config.onboarding}
        />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a Facebook Button with custom text', () => {
    const facebookCallback = jest.fn();

    const wrapper = mountWithTheme(
      <FacebookButton
        facebookCallback={facebookCallback}
        config={welp_ar.config.onboarding}
        text='This is a facebook button'
      />,
      welp_ar.theme
    );
    expect(wrapper.props().text).toEqual('This is a facebook button');
    expect(wrapper.find('span').prop('style')).toHaveProperty(
      'border',
      '1px solid white'
    );
  });
  it('should render a Facebook Button without styles', () => {
    const facebookCallback = jest.fn();
    const wrapper = mountWithTheme(
      <FacebookButton
        facebookCallback={facebookCallback}
        config={{ ...welp_ar.config.onboarding, BRAND: 'mango' }}
      />,
      welp_ar.theme
    );
    expect(wrapper.find('span').prop('style')).not.toHaveProperty(
      'border',
      '1px solid white'
    );
  });
});

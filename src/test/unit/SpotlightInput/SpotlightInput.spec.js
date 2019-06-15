import React from 'react';
import SpotlightInput from '../../../components/web/spotlightinput';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import { act } from 'react-dom/test-utils';

describe('Input component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <SpotlightInput
          name='phone'
          data='phone'
          label='Ingrese su celular'
          placeholder='42424242'
          prefix='15'
          info='para enviarte un sms'
          meta={{ active: true, valid: true }}
        />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('focus and blur input', () => {
    const wrapper = mountWithTheme(
      <SpotlightInput
        name='phone'
        data='phone'
        label='Ingrese su celular'
        placeholder='42424242'
        prefix='15'
        info='para enviarte un sms'
        meta={{ active: true }}
      />,
      welp_ar.theme
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
  });
  it('should close modal on press enter', () => {
    const wrapper = mountWithTheme(
      <SpotlightInput
        name='phone'
        data='phone'
        label='Ingrese su celular'
        placeholder='42424242'
        prefix='15'
        info='para enviarte un sms'
        meta={{ active: true }}
      />,
      welp_ar.theme
    );
    expect(wrapper.find('div').length).toBe(4);
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('div').length).toBe(4);
    let eventEnter = new KeyboardEvent('keydown', { keyCode: 13 });
    act(() => {
      document.dispatchEvent(eventEnter);
    });
    setTimeout(() => {
      expect(wrapper.find('div').length).toBe(4);
    }, 1500);
  });
  it('should close modal on press esc', () => {
    const wrapper = mountWithTheme(
      <SpotlightInput
        name='phone'
        label='Ingrese su celular'
        placeholder='42424242'
        prefix='15'
        info='para enviarte un sms'
        meta={{ active: true }}
      />,
      welp_ar.theme
    );
    expect(wrapper.find('div').length).toBe(4);
    wrapper.find('input').simulate('focus');
    expect(wrapper.find('div').length).toBe(4);
    let eventEsc = new KeyboardEvent('keydown', { keyCode: 27 });
    act(() => {
      document.dispatchEvent(eventEsc);
    });
    setTimeout(() => {
      expect(wrapper.find('div').length).toBe(4);
    }, 1500);
  });
  it('should do nothing on keycode 30', () => {
    const wrapper = mountWithTheme(
      <SpotlightInput
        name='phone'
        label='Ingrese su celular'
        placeholder='42424242'
        prefix='15'
        info='para enviarte un sms'
        meta={{ active: true }}
      />,
      welp_ar.theme
    );
    wrapper.find('input').simulate('focus');
    let eventEsc = new KeyboardEvent('keydown', { keyCode: 30 });
    act(() => {
      document.dispatchEvent(eventEsc);
    });
  });
});

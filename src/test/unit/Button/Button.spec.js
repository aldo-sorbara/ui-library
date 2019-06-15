import React from 'react';
import { Button, ButtonContainer } from '../../../components/web/button';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';

import 'jest-styled-components';

describe('Button component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Button className='test-button' data='click-me'>
          Click me
        </Button>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a disabled button', () => {
    const wrapper = mountWithTheme(
      <Button className='test-button' disabled data='disabled'>
        Disabled Button
      </Button>,
      welp_ar.theme
    );
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper).toHaveStyleRule('cursor', 'not-allowed');
    expect(wrapper).toHaveStyleRule('opacity', '0.3');
  });
  it('should render a block button', () => {
    const wrapper = mountWithTheme(
      <Button className='test-button' isBlocked data='isBlocked'>
        Button isBlocked
      </Button>,
      welp_ar.theme
    );
    expect(wrapper.props().isBlocked).toBe(true);
    expect(wrapper).toHaveStyleRule('display', 'block');
    expect(wrapper).toHaveStyleRule('width', '100%');
  });
  it('should render ButtonContainer snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <ButtonContainer
          className='test-buttonContainer'
          data='button-container'
        >
          This is a button container
        </ButtonContainer>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call button onClick', () => {
    const onClickCallback = jest.fn();
    const wrapper = mountWithTheme(
      <Button onClick={onClickCallback} className='test-button' data='click'>
        Button Click
      </Button>,
      welp_ar.theme
    );
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(onClickCallback).toHaveBeenCalled();
  });
  it('should render a link', () => {
    const wrapper = mountWithTheme(
      <Button href='#' className='test-button' data='link'>
        Link Button
      </Button>,
      welp_ar.theme
    );
    expect(wrapper.props().href).toBe('#');
    expect(
      wrapper
        .find('a')
        .at(0)
        .exists()
    ).toEqual(true);
  });
  it('should render a button with link modifier', () => {
    const modifiers = ['link'];
    const wrapper = mountWithTheme(
      <Button
        href='#'
        modifiers={modifiers}
        className='test-button'
        data='link'
      >
        Link Button
      </Button>,
      welp_ar.theme
    );
    expect(wrapper.props().href).toBe('#');
    expect(wrapper.props().modifiers).toEqual(
      expect.arrayContaining(modifiers)
    );
    expect(
      wrapper
        .find('a')
        .at(0)
        .exists()
    ).toEqual(true);
    expect(wrapper).toHaveStyleRule('background', 'transparent');
    expect(wrapper).toHaveStyleRule('border', '1px solid transparent');
  });
  it('should render a button with small modifier', () => {
    const modifiers = ['small'];
    const wrapper = mountWithTheme(
      <Button modifiers={modifiers} className='test-button' data='small'>
        small Button
      </Button>,
      welp_ar.theme
    );
    expect(wrapper.props().modifiers).toEqual(
      expect.arrayContaining(modifiers)
    );
    expect(wrapper).toHaveStyleRule('padding', '.75rem 1.5rem');
  });
  it('should render a button with rounded modifier', () => {
    const modifiers = ['rounded'];
    const wrapper = mountWithTheme(
      <Button modifiers={modifiers} className='test-button' data='rounded'>
        rounded Button
      </Button>,
      welp_ar.theme
    );
    expect(wrapper.props().modifiers).toEqual(
      expect.arrayContaining(modifiers)
    );
    expect(wrapper).toHaveStyleRule('border-radius', '50%');
    expect(wrapper).toHaveStyleRule('width', '50px');
    expect(wrapper).toHaveStyleRule('height', '50px');
    expect(wrapper).toHaveStyleRule('padding', '0');
  });
  it('should render a button with inverse modifier', () => {
    const modifiers = ['inverse'];
    const wrapper = mountWithTheme(
      <Button modifiers={modifiers} className='test-button' data='inverse'>
        inverse Button
      </Button>,
      welp_ar.theme
    );
    expect(wrapper.props().modifiers).toEqual(
      expect.arrayContaining(modifiers)
    );
    expect(wrapper).toHaveStyleRule('border', '1px solid #ffffff');
    expect(wrapper).toHaveStyleRule('color', '#ffffff');
  });
});

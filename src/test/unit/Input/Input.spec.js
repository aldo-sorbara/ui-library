import React from 'react';
import Input from '../../../components/web/input';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Input component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Input
          data='ingrese su celular'
          label='Ingrese su celular'
          name='validationcellphone'
          prefix='15'
          type='number'
          placeholder='42424242'
        />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render an input with description', () => {
    const wrapper = mountWithTheme(
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
        description='test'
        descriptionBottom
      />,
      welp_ar.theme
    );
    expect(wrapper.props().descriptionBottom).toBe(true);
    expect(wrapper.props().descriptionTop).not.toBe(true);
  });
  it('should render an input with error', () => {
    const wrapper = mountWithTheme(
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
        description='test'
        descriptionBottom
        meta={{
          error: 'error',
          valid: false,
          touched: true,
          dirty: true,
          visited: true
        }}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().meta).toEqual({
      valid: false,
      touched: true,
      dirty: true,
      visited: true,
      error: 'error'
    });
  });
  it('should render an input with description error', () => {
    const wrapper = mountWithTheme(
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
        description='test'
        descriptionBottom
        meta={{
          valid: false,
          touched: true,
          dirty: true,
          visited: true
        }}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().meta).toEqual({
      valid: false,
      touched: true,
      dirty: true,
      visited: true
    });
  });
  it('should render an active input', () => {
    const wrapper = mountWithTheme(
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
        description='test'
        descriptionBottom
        meta={{ active: true }}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().meta).toEqual({ active: true });
  });
  it('should render an icon success', () => {
    const wrapper = mountWithTheme(
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
        description='test'
        descriptionBottom
        meta={{ dirty: true, visited: true, valid: true }}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().meta).toEqual({
      dirty: true,
      visited: true,
      valid: true
    });
  });
  it('should render an input with default size', () => {
    const wrapper = mountWithTheme(
      <Input
        data='ingrese su celular'
        label='Ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
        description='test'
        descriptionBottom
        size='test'
        meta={{ active: true }}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().size).toBe('test');
    expect(
      wrapper
        .find('span')
        .at(0)
        .prop('size')
    ).toBe('test');
  });
  it('should render an input with descriptionTop', () => {
    const wrapper = mountWithTheme(
      <Input
        data='ingrese su celular'
        name='validationcellphone'
        prefix='15'
        type='number'
        placeholder='42424242'
        description='test'
        descriptionTop
        meta={{ active: true }}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().description).toBe('test');
    expect(wrapper.props().descriptionTop).toBe(true);
  });
  it('should render an input with suggester', () => {
    const wrapper = mountWithTheme(
      <Input
        data='ingrese su celular'
        name='validationcellphone'
        type='email'
        placeholder='42424242'
        description='test'
        descriptionTop
        meta={{ active: true }}
        value='test@'
      />,
      welp_ar.theme
    );
    wrapper.find('input').simulate('keyDown', { which: 50 });
    expect(wrapper.props().value).toBe('test@');
  });
});

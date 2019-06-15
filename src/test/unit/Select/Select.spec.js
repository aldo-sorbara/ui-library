import React from 'react';
import Select from '../../../components/web/select';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Select component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Select
          placeholder='Ingrese un brand'
          label='Seleccione un brand'
          options={[
            { label: 'Mango', value: 'mango' },
            { label: 'Welp', value: 'welp' },
            { label: 'Posta', value: 'posta' }
          ]}
        />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a default select', () => {
    const wrapper = mountWithTheme(
      <Select
        placeholder='Ingrese un brand'
        label='Seleccione un brand'
        options={[
          { label: 'Mango', value: 'mango' },
          { label: 'Welp', value: 'welp' },
          { label: 'Posta', value: 'posta' }
        ]}
        input={{
          name: 'select',
          value: {
            label: 'select'
          }
        }}
        isOpen
      />,
      welp_ar.theme
    );
    expect(Array.isArray(wrapper.props().options)).toBeTruthy();
    expect(wrapper.props().label).toEqual('Seleccione un brand');
    expect(wrapper.props().placeholder).toEqual('Ingrese un brand');
  });
  it('should render a disabled select', () => {
    const wrapper = mountWithTheme(
      <Select
        placeholder='Ingrese un brand'
        label='Seleccione un brand'
        options={[
          { label: 'Mango', value: 'mango' },
          { label: 'Welp', value: 'welp' },
          { label: 'Posta', value: 'posta' }
        ]}
        input={{
          name: 'select',
          value: {
            label: 'select'
          }
        }}
        disabled
      />,
      welp_ar.theme
    );
    expect(Array.isArray(wrapper.props().options)).toBeTruthy();
    expect(wrapper.props().label).toEqual('Seleccione un brand');
    expect(wrapper.props().placeholder).toEqual('Ingrese un brand');
  });
  it('should render an active select', () => {
    const wrapper = mountWithTheme(
      <Select
        placeholder='Ingrese un brand'
        label='Seleccione un brand'
        options={[
          { label: 'Mango', value: 'mango' },
          { label: 'Welp', value: 'welp' },
          { label: 'Posta', value: 'posta' }
        ]}
        input={{
          name: 'select',
          value: {
            label: 'select'
          }
        }}
        isActive
      />,
      welp_ar.theme
    );
    expect(Array.isArray(wrapper.props().options)).toBeTruthy();
    expect(wrapper.props().label).toEqual('Seleccione un brand');
    expect(wrapper.props().placeholder).toEqual('Ingrese un brand');
  });
  it('should render a default select with onChange', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const wrapper = mountWithTheme(
      <Select
        placeholder='Ingrese un brand'
        label='Seleccione un brand'
        options={[
          { label: 'Mango', value: 'mango' },
          { label: 'Welp', value: 'welp' },
          { label: 'Posta', value: 'posta' }
        ]}
        input={{ value: 'value', name: 'select', onFocus: onFocus }}
        onClick={onClick}
        onChange={onChange}
      />,
      welp_ar.theme
    );
    expect(Array.isArray(wrapper.props().options)).toBeTruthy();
    expect(wrapper.props().label).toEqual('Seleccione un brand');
    expect(wrapper.props().placeholder).toEqual('Ingrese un brand');
  });
  it('should render an error select', () => {
    const wrapper = mountWithTheme(
      <Select
        placeholder='Ingrese un brand'
        label='Seleccione un brand'
        options={[
          { label: 'Mango', value: 'mango' },
          { label: 'Welp', value: 'welp' },
          { label: 'Posta', value: 'posta' }
        ]}
        meta={{
          error: true,
          dirty: true,
          touched: true,
          visited: true
        }}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().meta.error).toBe(true);
    expect(wrapper.props().meta.dirty).toBe(true);
    expect(wrapper.props().meta.touched).toBe(true);
    expect(wrapper.props().meta.visited).toBe(true);
  });
  it('should render a valid select', () => {
    const wrapper = mountWithTheme(
      <Select
        placeholder='Ingrese un brand'
        label='Seleccione un brand'
        options={[
          { label: 'Mango', value: 'mango' },
          { label: 'Welp', value: 'welp' },
          { label: 'Posta', value: 'posta' }
        ]}
        meta={{
          valid: true,
          dirty: true,
          touched: true,
          visited: true
        }}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().meta.valid).toBe(true);
    expect(wrapper.props().meta.dirty).toBe(true);
    expect(wrapper.props().meta.touched).toBe(true);
    expect(wrapper.props().meta.visited).toBe(true);
  });
  it('should render a valid select', () => {
    const wrapper = mountWithTheme(
      <Select
        placeholder='Ingrese un brand'
        label='Seleccione un brand'
        value='mango'
        options={[
          { label: 'Mango', value: 'mango' },
          { label: 'Welp', value: '-' },
          { label: 'Posta', value: 'posta' }
        ]}
        meta={{
          valid: true,
          dirty: true,
          touched: true,
          visited: true
        }}
      />,
      welp_ar.theme
    );
    // before open
    expect(wrapper.find('div').length).toBe(7);
    wrapper.find('button').simulate('click');
    // after open
    expect(wrapper.find('div').length).toBe(11);
    wrapper.find('div[data-w="Mango"]').simulate('click');
  });
  it('should render a valid select', () => {
    const wrapper = mountWithTheme(
      <div style={{ maxHeight: 300 }}>
        <Select
          placeholder='Ingrese un brand'
          label='Seleccione un brand'
          value='mango'
          options={[
            { label: 'Mango', value: 'mango' },
            { label: 'Welp', value: '-' },
            { label: 'Posta', value: 'posta' }
          ]}
          meta={{
            valid: true,
            dirty: true,
            touched: true,
            visited: true
          }}
        />
      </div>,
      welp_ar.theme
    );
    // before open
    expect(wrapper.find('div').length).toBe(8);
    wrapper.find('button').simulate('click');
    // after open
    expect(wrapper.find('div').length).toBe(12);
    wrapper.find('button').simulate('click');
  });
});

import React from 'react';
import { RadioButton, RadioGroup } from '../../../components/web/radiobutton';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import 'jest-styled-components';

describe('RadioButton component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <RadioGroup
          className='test-radio'
          name='test'
          onChange={value => {
            console.log(value);
          }}
        >
          <RadioButton data='test1' value='test1' label='test1' />
          <RadioButton data='test2' value='test2' label='test2' />
        </RadioGroup>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render with default props', () => {
    const wrapper = mountWithTheme(
      <RadioGroup
        className='test-radio'
        name='test'
        onChange={value => {
          console.log(value);
        }}
      >
        <RadioButton data='test1' value='test1' label='test1' />
        <RadioButton data='test2' value='test2' label='test2' />
      </RadioGroup>,
      welp_ar.theme
    );
    expect(wrapper).toHaveStyleRule('display', 'block');
  });
  it('should render with selected prop by default', () => {
    const wrapper = mountWithTheme(
      <RadioButton selected data='test1' value='test1' label='test1' />,
      welp_ar.theme
    );
    expect(wrapper.props().selected).toBe(true);
    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '0 3px 14px 0 rgba(21,67,118,0.12)'
    );
    expect(wrapper).toHaveStyleRule('border', '1px solid #c346f9');
  });
  it('should render null - not valid children element', () => {
    const wrapper = mountWithTheme(
      <RadioGroup
        className='test-radio'
        name='test'
        onChange={value => {
          console.log(value);
        }}
      >
        test
      </RadioGroup>,
      welp_ar.theme
    );
    expect(wrapper.props().children).toBe('test');
  });
  it('should handle onChange func', () => {
    const onChange = jest.fn();
    const wrapper = mountWithTheme(
      <RadioGroup className='test-radio' name='test' onChange={onChange}>
        <RadioButton data='test1' value='test1' label='test1' />
        <RadioButton data='test2' value='test2' label='test2' />
      </RadioGroup>,
      welp_ar.theme
    );
    expect(
      wrapper
        .find('input')
        .at(0)
        .simulate('change')
    );
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('should render inline radioButtons', () => {
    const wrapper = mountWithTheme(
      <RadioButton inline data='test2' value='test2' label='test2' />,
      welp_ar.theme
    );
    expect(wrapper.props().inline).toBe(true);
    expect(wrapper).toHaveStyleRule('display', 'inline-block');
    expect(wrapper).toHaveStyleRule('margin-right', '0.5rem');
  });
});

import React from 'react';
import Checkbox from '../../../components/web/checkbox';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import { ThemeProvider } from 'styled-components';
import welp_ar from '../../../branding/brands/welp_ar';
import 'jest-styled-components';

describe('Checkbox component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Checkbox className='test-checkbox' data='checkbox'>
          Checkbox
        </Checkbox>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render checked checkbox', () => {
    const wrapper = mountWithTheme(
      <Checkbox
        className='test-checkbox'
        checked
        onChange={() => {
          console.log('test');
        }}
        data='checkbox'
      >
        Checked
      </Checkbox>,
      welp_ar.theme
    );
    expect(wrapper.props().checked).toBe(true);
  });
  it('should render checkbox with default props', () => {
    const wrapper = mountWithTheme(
      <Checkbox className='test-checkbox' data='checkbox'>
        checkbox
      </Checkbox>,
      welp_ar.theme
    );
    expect(wrapper.props().data).toBe('checkbox');
    expect(wrapper.props().children).toBe('checkbox');
  });
});

import React from 'react';
import FormBlock from '../../../components/web/formblock';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('FormBlock component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <FormBlock className='test-formBlock'>FormBlock container</FormBlock>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a formBlock with padding', () => {
    const wrapper = mountWithTheme(
      <FormBlock className='test-formBlock'>FormBlock</FormBlock>,
      welp_ar.theme
    );
    expect(wrapper).toHaveStyleRule('padding-bottom', '2rem');
  });
});

import React from 'react';
import Card from '../../../components/web/card';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Card component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Card className='test-card' data='card'>
          Card container
        </Card>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render an active card', () => {
    const wrapper = mountWithTheme(
      <Card className='test-card' active data='active-card'>
        Active Card
      </Card>,
      welp_ar.theme
    );
    expect(wrapper.props().active).toBe(true);
    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '0 3px 14px 0 rgba(21,67,118,0.12)'
    );
    expect(wrapper).toHaveStyleRule('border', '1px solid #d5d8df');
  });
  it('should render card with default props', () => {
    const wrapper = mountWithTheme(
      <Card className='test-card' data='default-card'>
        Card default
      </Card>,
      welp_ar.theme
    );
    expect(wrapper.props().active).toBe(false);

    expect(wrapper).toHaveStyleRule('border', '1px solid #d5d8df');
    expect(wrapper).toHaveStyleRule('box-shadow', 'none');
    expect(wrapper).toHaveStyleRule('padding', '1rem');
  });
});

import React from 'react';
import { List, ListItem } from '../../../components/web/list';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('List component', () => {
  it('should render List snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <List className='test-list' data='list'>
          <ListItem>Test 1</ListItem>
          <ListItem>Test 2</ListItem>
          <ListItem>Test 3</ListItem>
        </List>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render list with default props', () => {
    const wrapper = mountWithTheme(
      <List className='test-list' data='default-list'>
        <ListItem>Test 1</ListItem>
        <ListItem>Test 2</ListItem>
        <ListItem>Test 3</ListItem>
      </List>,
      welp_ar.theme
    );

    expect(wrapper).toHaveStyleRule('margin', '0');
  });
  it('should render listItem with default props', () => {
    const wrapper = mountWithTheme(<ListItem>Test 1</ListItem>, welp_ar.theme);

    expect(wrapper).toHaveStyleRule('margin-bottom', '.5rem');
    expect(wrapper).toHaveStyleRule('padding', '0 0 0 1rem');
    expect(wrapper).toHaveStyleRule('margin-bottom', '0', {
      modifier: ':last-child'
    });
    expect(wrapper).toHaveStyleRule('top', '.25rem', {
      modifier: ':before'
    });
  });
});

import React from 'react';
import Emoji from '../../../components/web/emoji';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Emoji component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Emoji>This is a Emoji component 👌</Emoji>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a default Emoji', () => {
    const wrapper = mountWithTheme(
      <Emoji>This is a Emoji component 👌 </Emoji>,
      welp_ar.theme
    );
    expect(wrapper.props().children).not.toBe(null);
  });
});

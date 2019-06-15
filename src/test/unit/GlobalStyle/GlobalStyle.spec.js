import React from 'react';
import GlobalStyle from '../../../components/web/globalstyle';
import renderer from 'react-test-renderer';
import welp_ar from '../../../branding/brands/welp_ar';

import 'jest-styled-components';

describe('GlobalStyle component', () => {
  it('should render globalStyle snapshot', () => {
    const component = renderer.create(<GlobalStyle theme={welp_ar.theme} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

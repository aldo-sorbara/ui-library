import React from 'react';
import { Grid, GridContainer } from '../../../components/web/grids';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Grid component', () => {
  it('should render snapshot (only grid)', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Grid lg={25} md={25} sm={25} xs={25}>
          This is a Grid component
        </Grid>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render snapshot (with container)', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <GridContainer>
          <Grid lg={75} md={75} sm={75} xs={75}>
            This is a Grid component with container
          </Grid>
        </GridContainer>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a default grid', () => {
    const wrapper = mountWithTheme(
      <Grid> This is a default Grid component </Grid>,
      welp_ar.theme
    );
    expect(wrapper.props().lg).toBe(0);
    expect(wrapper.props().md).toBe(0);
    expect(wrapper.props().sm).toBe(0);
    expect(wrapper.props().xs).toBe(0);
  });
});

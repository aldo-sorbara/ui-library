import React from 'react';
import Hero from '../../../components/web/hero';
import { Button } from '../../../components/web/button';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Hero component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Hero className='test-card' title='Soña en grande'>
          Hero children
        </Hero>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render hero with action prop', () => {
    const wrapper = mountWithTheme(
      <Hero
        className='test-card'
        title='Soña en grande'
        action={
          <Button
            modifiers={['inverse']}
            handleOnClick={() => console.log('CLICKED')}
            data='siguente'
          >
            Comenzar
          </Button>
        }
      >
        Hero children
      </Hero>,
      welp_ar.theme
    );
    expect(wrapper.props().action).not.toBe(null);
  });
  it('should render hero with custom background image prop', () => {
    const wrapper = mountWithTheme(
      <Hero
        className='test-card'
        title='Soña en grande'
        imageUrl='src/test'
        action={
          <Button
            modifiers={['inverse']}
            handleOnClick={() => console.log('CLICKED')}
            data='siguente'
          >
            Comenzar
          </Button>
        }
      >
        Hero children
      </Hero>,
      welp_ar.theme
    );
    expect(wrapper.props().imageUrl).toBe('src/test');
    expect(wrapper).toHaveStyleRule('background-image', 'url(src/test)');
  });
});

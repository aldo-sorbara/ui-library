import React from 'react';
import TextTransform from '../../../components/web/texttransform';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('TextTransform component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <TextTransform
          modifiers={['links']}
          text={
            'Acepto los [Términos y Condiciones][https://welponlinecomar.com/wp-content/uploads/2019/01/welp-tyc.pdf] and [another link][http://localhost:3001]'
          }
        />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render text with a tag', () => {
    const wrapper = mountWithTheme(
      <TextTransform
        modifiers={['links']}
        text={
          'Acepto los [Términos y Condiciones][https://welponlinecomar.com/wp-content/uploads/2019/01/welp-tyc.pdf] and [another link][http://localhost:3001]'
        }
      />,
      welp_ar.theme
    );
    expect(wrapper.props().modifiers).toContain('links');
    expect(typeof wrapper.props().text).toBe('string');
    expect(wrapper.render().find('a').length).toBe(2);
  });

  it('should render text with b tag', () => {
    const wrapper = mountWithTheme(
      <TextTransform
        modifiers={['bold']}
        text={'this *text* must be *bold*'}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().modifiers).toContain('bold');
    expect(typeof wrapper.props().text).toBe('string');
    expect(wrapper.render().find('a').length).toBe(0);
    expect(wrapper.render().find('b').length).toBe(2);
  });

  it('should render text with i tag', () => {
    const wrapper = mountWithTheme(
      <TextTransform
        modifiers={['italic']}
        text={'this _text_ must be _italic_'}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().modifiers).toContain('italic');
    expect(typeof wrapper.props().text).toBe('string');
    expect(wrapper.render().find('b').length).toBe(0);
    expect(wrapper.render().find('i').length).toBe(2);
  });

  it('should render text', () => {
    const wrapper = mountWithTheme(
      <TextTransform
        modifiers={['default']}
        text={'this _text_ must be _italic_'}
      />,
      welp_ar.theme
    );
    expect(wrapper.props().modifiers).toContain('default');
    expect(typeof wrapper.props().text).toBe('string');
    expect(wrapper.render().find('b').length).toBe(0);
  });

  it('should render non special text', () => {
    const wrapper = mountWithTheme(
      <TextTransform modifiers={['bold']} text={'non special text'} />,
      welp_ar.theme
    );
    expect(wrapper.props().modifiers).toContain('bold');
    expect(typeof wrapper.props().text).toBe('string');
    expect(wrapper.render().find('b').length).toBe(0);
  });
});

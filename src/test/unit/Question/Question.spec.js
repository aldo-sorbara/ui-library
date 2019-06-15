import React from 'react';
import { QuestionTitle, Description } from '../../../components/web/question';
import renderer from 'react-test-renderer';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Question component', () => {
  it('should render QuestionTitle snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <QuestionTitle className='test-questionTitle' data='question-title'>
          This is a QuestionTitle component
        </QuestionTitle>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Question component', () => {
  it('should render Description snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Description className='test-description' data='description'>
          This is a Description component
        </Description>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

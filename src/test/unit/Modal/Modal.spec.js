import React from 'react';
import { Button } from '../../../components/web/button';
import Modal from '../../../components/web/modal';
import renderer from 'react-test-renderer';
import { mountWithTheme } from '../../../../utils/helper';
import welp_ar from '../../../branding/brands/welp_ar';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';

describe('Modal component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={welp_ar.theme}>
        <Modal open className='test-card'>
          <div>test</div>
        </Modal>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render a modal with title', () => {
    const wrapper = mountWithTheme(
      <Modal open className='test-card' title='title'>
        <div>test</div>
      </Modal>,
      welp_ar.theme
    );
    expect(wrapper.props().title).toBe('title');
    expect(wrapper.find('h1').at(0)).not.toBe(undefined);
  });
  it('should render a modal with close button', () => {
    const onClose = jest.fn();
    const wrapper = mountWithTheme(
      <Modal open className='test-card' title='title' onClose={onClose}>
        <div>test</div>
      </Modal>,
      welp_ar.theme
    );
    expect(wrapper.props().onClose).not.toBe(null);
    wrapper
      .find('div')
      .at(4)
      .simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
  it('should render a modal with closeButton prop', () => {
    const onClose = jest.fn();
    const wrapper = mountWithTheme(
      <Modal
        open
        className='test-card'
        title='title'
        closeButton={
          <Button data='button' modifiers={['rounded']}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              height='24'
              width='24'
              viewBox='0 0 35 35'
            >
              {/* eslint-disable max-len */}
              <path d='M26 22.87A2.14 2.14 0 0 1 26 26a2.14 2.14 0 0 1-3.13 0l-5.54-5.54-5.5 5.5c-.45.45-.98.68-1.58.7A2.1 2.1 0 0 1 8.67 26 2.1 2.1 0 0 1 8 24.42c.01-.6.24-1.13.7-1.58l5.5-5.5-5.54-5.55a2.15 2.15 0 0 1 0-3.12 2.14 2.14 0 0 1 3.12 0l5.54 5.54 5.54-5.54a2.15 2.15 0 0 1 3.13 0 2.14 2.14 0 0 1 0 3.12l-5.54 5.54L26 22.87z' />
              {/* eslint-enable max-len */}
            </svg>
          </Button>
        }
        onClose={onClose}
      >
        <div>test</div>
      </Modal>,
      welp_ar.theme
    );
    expect(wrapper.props().onClose).not.toBe(null);
    wrapper
      .find('div')
      .at(4)
      .simulate('click');
    expect(onClose).toHaveBeenCalled();
    expect(wrapper.props().closeButton).not.toBe(null);
  });
  it('should render a modal with action buttons', () => {
    const wrapper = mountWithTheme(
      <Modal open className='test-card' actionButtons={<div>test</div>}>
        <div>test</div>
      </Modal>,
      welp_ar.theme
    );
    expect(wrapper.props().actionButtons).not.toBe(undefined);
  });
  it('should render a modal with windowWidth > 1000', () => {
    const wrapper = mountWithTheme(
      <Modal open className='test-card' windowWidth={1050}>
        <div>test</div>
      </Modal>,
      welp_ar.theme
    );
    expect(wrapper.props().windowWidth).toBe(1050);
    window.dispatchEvent(new Event('resize'));
    wrapper.unmount();
  });
});

import { shallow, mount } from 'enzyme';

import { ThemeConsumer } from 'styled-components';

export const shallowWithTheme = (children, theme) => {
  ThemeConsumer._currentValue = theme;
  return shallow(children);
};

export const mountWithTheme = (children, theme) => {
  ThemeConsumer._currentValue = theme;
  return mount(children);
};

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import GlobalStyle from '../../components/web/globalstyle';

storiesOf('GlobalStyle', module)
  .addDecorator(withKnobs)
  .add('h1 with GlobalStyle and default props', () => (
    <div>
      <GlobalStyle />
      <h1>global style H1</h1>
    </div>
  ));

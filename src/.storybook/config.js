import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withInfo } from '@storybook/addon-info';
import { withConsole } from '@storybook/addon-console';
import GlobalStyle from '../components/web/globalstyle';

// automatically import all files ending in *.stories.js
const req = require.context('./components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

import { getAllThemes } from '../branding';

getAllThemes().then(themes => {
  const globalDecorator = storyFn => (
    <div>
      <GlobalStyle />
      {storyFn()}
    </div>
  );
  addDecorator(withInfo);
  addDecorator((storyFn, context) => withConsole()(storyFn)(context));
  addDecorator(globalDecorator);
  addDecorator(withThemesProvider(themes));

  configure(loadStories, module);
});

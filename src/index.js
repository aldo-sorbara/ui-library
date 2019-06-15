import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/web/globalstyle';

import { getSettingsByName } from './branding';
import App from './App';

const BRAND = process.env.REACT_APP_BRAND
  ? process.env.REACT_APP_BRAND
  : 'welp_ar';

getSettingsByName(BRAND).then(SETTINGS => {
  ReactDOM.render(
    <ThemeProvider theme={SETTINGS.theme}>
      <div>
        <GlobalStyle SETTINGS={SETTINGS} />
        <App />
      </div>
    </ThemeProvider>,
    document.getElementById('root')
  );
});

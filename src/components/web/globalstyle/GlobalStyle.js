import React from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const GlobalStyle = props => {
  const { SETTINGS } = props;
  const fontFamily = `${SETTINGS.typography}:200,400,700,900`;
  const Component = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=${fontFamily}');
  @import url('https://necolas.github.io/normalize.css/8.0.1/normalize.css');
  * {
    box-sizing: border-box;
  }

  html,
  body {
    /* Define font-size in pixels once to set initial value. */
    font-size: ${SETTINGS.theme.font.defaultSize};
    height: 100%;
  }

  body {
    color: ${SETTINGS.palette.common.text.default};
    font-family: ${SETTINGS.typography};
    margin: 0;
    padding: 0;
  }


  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  a {
    color: ${SETTINGS.palette.secondary.dark};
    text-decoration: none;

    &[disabled] {
      cursor: default;
      opacity: .4;
      pointer-events: none;
    }
  }

  ul {
    margin-bottom: ${SETTINGS.theme.spacer.blockSpacer};
    margin-top: 0;
    padding: 0 1rem;

    > li {
      list-style-type: none;
      margin-bottom: .5rem;
      ${SETTINGS.theme.typography.description};
      padding-left: 1.25rem;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      &::before {
        background-color: ${SETTINGS.palette.common.text.default};
        border: 1px solid ${SETTINGS.palette.common.text.default};
        border-radius: 50%;
        content: "";
        display: block;
        height: .25rem;
        left: 0;
        position: absolute;
        top: .5rem;
        width: .25rem;
      }

      &:empty {
        display: none;
      }
    }
  }
  ${SETTINGS.theme.reset};
`;
  return <Component {...props} />;
};

GlobalStyle.defaultProps = {
  SETTINGS: {
    typography: 'Nunito',
    palette: {
      common: {
        text: {
          default: '#1d2c51'
        }
      },
      secondary: {
        dark: '#c346f9'
      },
      primary: {
        default: '#0082ff'
      }
    },
    theme: {
      spacer: {
        blockSpacer: '1.25rem'
      },
      typography: {
        description: {
          'font-size': '.875rem',
          'font-weight': '400',
          'line-height': '1.25'
        }
      },
      font: {
        defaultSize: '16px'
      },
      reset: {
        p: {
          'margin-top': 0,
          'margin-bottom': '.5rem'
        }
      }
    }
  }
};

GlobalStyle.propTypes = {
  SETTINGS: PropTypes.object
};

export default GlobalStyle;

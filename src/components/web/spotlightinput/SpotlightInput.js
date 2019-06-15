/* stylelint-disable order/properties-alphabetical-order */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '@bit/wenance.common-ui.web.input';
import { Spring } from 'react-spring/renderprops.cjs.js';
import styled from 'styled-components';

export const SpotlightInput = props => {
  const { name, data, info } = props;
  const [focus, setFocus] = useState(false);
  const handleKeypress = e => {
    if (e.keyCode === 13 || e.keyCode === 27) {
      focus && setFocus(false);
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeypress, true);
    return () => {
      document.removeEventListener('keydown', handleKeypress, true);
    };
  });
  return (
    <Spring
      from={{
        fontSize: '1rem',
        borderColor: 'white',
        margin: '0.5rem 0',
        padding: 0
      }}
      to={{
        fontSize: focus ? '3rem' : '1rem',
        borderColor: focus ? 'black' : 'white',
        padding: focus ? 16 : 0
      }}
    >
      {({ fontSize, t, ...rest }) => (
        <Container style={{ ...rest }}>
          <Input
            {...props}
            style={{ fontSize }}
            data={data || name}
            onFocus={e => {
              setFocus(true);
            }}
            size={focus ? 'xLarge' : 'small'}
            onBlur={e => {
              setFocus(false);
            }}
          />
          {focus && info}
        </Container>
      )}
    </Spring>
  );
};

const Container = styled.div`
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
`;

SpotlightInput.defaultProps = {
  theme: {
    typography: {
      label: {
        default: {
          fontSize: '1rem',
          fontWeight: '700',
          lineHeight: '1.33'
        }
      }
    },
    palette: {
      secondary: {
        light: 'inherit'
      },
      common: {
        text: {
          default: '#f3a'
        }
      }
    }
  }
};

SpotlightInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.string,
  info: PropTypes.string
};

export default SpotlightInput;

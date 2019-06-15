import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @render react
 * @name Checkbox
 * @description Checkbox Component for Wenance
 * @example
 * <Checkbox data="checkbox"> This is a checkbox</Checkbox>
 */

const IconCheck = props => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path
      fill='currentColor'
      d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686
      4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686
      4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z'
    />
  </svg>
);

const Checkbox = props => {
  const { children, data, ...rest } = props;
  return (
    <CheckboxContainer>
      <CheckboxLabel>
        <input data-w={data} {...rest} {...rest.input} type='checkbox' />
        <span>
          <IconCheck />
        </span>

        {children}
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  data: PropTypes.string.isRequired
};

const CheckboxContainer = styled.div`
  font-size: 16px;
  position: relative;

  input[type='checkbox'] {
    height: 1.25rem;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 1.25rem;
    z-index: ${props => props.theme.zIndex.checkbox};
  }

  span:nth-of-type(1) {
    background-color: transparent;
    border: 1px solid ${props => props.theme.palette.primary.default};
    border-radius: 4px;
    color: ${props => props.theme.palette.common.bodyBg};
    height: 1.25rem;
    left: 0;
    position: absolute;
    top: ${props => props.theme.spacer.small};
    transition: border-color, background-color 0.2s ease-in-out;
    width: 1.25rem;
  }

  input:checked {
    & + span {
      background-color: ${props => props.theme.palette.primary.default};
      padding: 1px;

      &::after {
        content: '';
        display: block;
      }
    }
  }
`;

const CheckboxLabel = styled.label`
  display: block;
  ${props => props.theme.typography.checkbox};
  padding-bottom: ${props => props.theme.spacer.small};
  padding-left: 2rem;
  padding-top: ${props => props.theme.spacer.small};
`;

CheckboxContainer.defaultProps = {
  theme: {
    zIndex: {
      checkbox: 1
    },
    palette: {
      common: {
        bodyBg: '#ffffff'
      },
      primary: {
        default: '#0082ff'
      }
    },
    typography: {
      checkbox: {
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.25'
      }
    },
    spacer: {
      small: '.5rem'
    }
  }
};

export default Checkbox;

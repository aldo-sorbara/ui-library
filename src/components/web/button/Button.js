import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @render react
 * @name Button
 * @description Button Component for Wenance.
 * @example
 * <ButtonContainer>
 *   <Button data="button"> Button</Button>
 * </ButtonContainer>
 */

export const Button = props => {
  const { children, data, href } = props;
  const Component = href ? StyledLink : StyledButton;
  return (
    <Component {...props} data-w={data}>
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isBlocked: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string)
};

Button.defaultProps = {
  disabled: false,
  isBlocked: false,
  modifiers: []
};

const CommonButton = props => `
  border-radius: ${props.theme.buttons.borderRadius};
  display: ${props.isBlocked ? 'block' : 'inline-block'};
  cursor: pointer;
  font-family: inherit;
  opacity: ${props.disabled ? '0.3' : '1'};
  padding: ${props.theme.spacer.medium} ${props.theme.spacer.wrapperInner};
  text-align: center;
  transition: background-color 0.4s ease-in-out;
  touch-action: manipulation;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: ${props.isBlocked ? '100%' : 'auto'};
  cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
  background-color: ${props.theme.palette.primary.default};
  border: 1px solid transparent;
  color: ${props.theme.palette.common.text.inverse};

  &:hover:enabled {
    background-color: ${props.theme.palette.primary.dark};
  }

  &:focus {
    outline: none;
  }

  &:disabled,
  button[disabled] {
    opacity: 0.3;
  }
`;

CommonButton.defaultProps = {
  theme: {
    palette: {
      common: {
        text: {
          inverse: '#ffffff'
        }
      },
      primary: {
        default: '#0082ff',
        dark: '#3a66ab'
      }
    },
    typography: {
      button: {
        fontSize: '.875rem',
        fontWeight: '700',
        lineHeight: '1.145'
      }
    },
    spacer: {
      medium: '1rem',
      large: '1.5rem',
      button: {
        smallSpacer: '.75rem'
      }
    },
    buttons: {
      borderRadius: '0'
    }
  }
};

const StyledButton = styled.button`
  ${CommonButton}
  ${props => props.theme.typography.button};
  ${props => props.modifiers.map(modifier => modifiers[modifier])}
`;

const StyledLinkButton = props => `
  background: transparent;
  border: 1px solid transparent;
  color: ${props.theme.palette.primary.default};
  &:hover, &:hover:enabled {
    background-color: inherit;
    opacity: .65
  }`;

const StyledLink = styled.a`
  ${CommonButton}
  ${props => props.theme.typography.button};
  ${props => props.modifiers.map(modifier => modifiers[modifier])}
  text-decoration: none;
`;

const StyledSmallButton = props => `
  padding: ${props.theme.spacer.button.smallSpacer} ${props.theme.spacer.large};
`;

const StyledInverseButton = props => `
  background: transparent;
  color: ${props.theme.palette.common.text.inverse};
  border: 1px solid ${props.theme.palette.common.text.inverse};
  
  &:hover, &:hover:enabled {
    background-color: inherit;
    opacity: .65
  }
`;

const StyledRoundedButton = () => `
  border-radius: 50%;
  width: 50px;
  height: 50px
  padding: 0;

  svg {
    display: block;
    margin: auto;
  }
`;

const modifiers = {
  small: StyledSmallButton,
  rounded: StyledRoundedButton,
  link: StyledLinkButton,
  inverse: StyledInverseButton
};

// ButtonContainer Component
export const ButtonContainer = props => {
  return (
    <StyledButtonContainer {...props}>
      <div>{props.children}</div>
    </StyledButtonContainer>
  );
};

const StyledButtonContainer = styled.div`
  padding: ${props => props.theme.buttons.padding};
`;

StyledButtonContainer.defaultProps = {
  theme: {
    buttons: {
      padding: '0 2rem 2rem'
    }
  }
};

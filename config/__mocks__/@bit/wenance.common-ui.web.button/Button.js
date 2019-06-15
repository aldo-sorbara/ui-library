'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonContainer = exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', ';\n  ', '\n'], ['\n  ', '\n  ', ';\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  ', ';\n  ', '\n  text-decoration: none;\n'], ['\n  ', '\n  ', ';\n  ', '\n  text-decoration: none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: ', ';\n'], ['\n  padding: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * @render react
 * @name Button
 * @description Button Component for Wenance.
 * @example
 * <ButtonContainer>
 *   <Button data="button"> Button</Button>
 * </ButtonContainer>
 */

var Button = exports.Button = function Button(props) {
  var children = props.children,
      data = props.data,
      href = props.href;

  var Component = href ? StyledLink : StyledButton;
  return _react2.default.createElement(
    Component,
    Object.assign({}, props, { 'data-w': data }),
    children
  );
};

Button.propTypes = {
  children: _propTypes2.default.node.isRequired,
  data: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  isBlocked: _propTypes2.default.bool,
  modifiers: _propTypes2.default.arrayOf(_propTypes2.default.string)
};

Button.defaultProps = {
  disabled: false,
  isBlocked: false,
  modifiers: []
};

var CommonButton = function CommonButton(props) {
  return '\n  border-radius: ' + props.theme.buttons.borderRadius + ';\n  display: ' + (props.isBlocked ? 'block' : 'inline-block') + ';\n  cursor: pointer;\n  font-family: inherit;\n  opacity: ' + (props.disabled ? '0.3' : '1') + ';\n  padding: ' + props.theme.spacer.medium + ' ' + props.theme.spacer.wrapperInner + ';\n  text-align: center;\n  transition: background-color 0.4s ease-in-out;\n  touch-action: manipulation;\n  user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n  width: ' + (props.isBlocked ? '100%' : 'auto') + ';\n  cursor: ' + (props.disabled ? 'not-allowed' : 'pointer') + ';\n  background-color: ' + props.theme.palette.primary.default + ';\n  border: 1px solid transparent;\n  color: ' + props.theme.palette.common.text.inverse + ';\n\n  &:hover:enabled {\n    background-color: ' + props.theme.palette.primary.dark + ';\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled,\n  button[disabled] {\n    opacity: 0.3;\n  }\n';
};

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

var StyledButton = _styledComponents2.default.button(_templateObject, CommonButton, function (props) {
  return props.theme.typography.button;
}, function (props) {
  return props.modifiers.map(function (modifier) {
    return modifiers[modifier];
  });
});

var StyledLinkButton = function StyledLinkButton(props) {
  return '\n  background: transparent;\n  border: 1px solid transparent;\n  color: ' + props.theme.palette.primary.default + ';\n  &:hover, &:hover:enabled {\n    background-color: inherit;\n    opacity: .65\n  }';
};

var StyledLink = _styledComponents2.default.a(_templateObject2, CommonButton, function (props) {
  return props.theme.typography.button;
}, function (props) {
  return props.modifiers.map(function (modifier) {
    return modifiers[modifier];
  });
});

var StyledSmallButton = function StyledSmallButton(props) {
  return '\n  padding: ' + props.theme.spacer.button.smallSpacer + ' ' + props.theme.spacer.large + ';\n';
};

var StyledInverseButton = function StyledInverseButton(props) {
  return '\n  background: transparent;\n  color: ' + props.theme.palette.common.text.inverse + ';\n  border: 1px solid ' + props.theme.palette.common.text.inverse + ';\n  \n  &:hover, &:hover:enabled {\n    background-color: inherit;\n    opacity: .65\n  }\n';
};

var StyledRoundedButton = function StyledRoundedButton() {
  return '\n  border-radius: 50%;\n  width: 50px;\n  height: 50px\n  padding: 0;\n\n  svg {\n    display: block;\n    margin: auto;\n  }\n';
};

var modifiers = {
  small: StyledSmallButton,
  rounded: StyledRoundedButton,
  link: StyledLinkButton,
  inverse: StyledInverseButton
};

// ButtonContainer Component
var ButtonContainer = exports.ButtonContainer = function ButtonContainer(props) {
  return _react2.default.createElement(
    StyledButtonContainer,
    props,
    _react2.default.createElement(
      'div',
      null,
      props.children
    )
  );
};

var StyledButtonContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.buttons.padding;
});

StyledButtonContainer.defaultProps = {
  theme: {
    buttons: {
      padding: '0 2rem 2rem'
    }
  }
};

//# sourceMappingURL=Button.js.map
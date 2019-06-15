'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.InputDescription = exports.InputLabel = exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(
    ['\n  width: 100%;\n'],
    ['\n  width: 100%;\n']
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      '\n  ',
      ';\n  align-items: center;\n  display: flex;\n  font-size: inherit;\n  font-weight: normal;\n  padding-right: ',
      ';\n  text-align: center;\n  white-space: nowrap;\n'
    ],
    [
      '\n  ',
      ';\n  align-items: center;\n  display: flex;\n  font-size: inherit;\n  font-weight: normal;\n  padding-right: ',
      ';\n  text-align: center;\n  white-space: nowrap;\n'
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      '\n  ',
      ';\n  border: 0;\n  flex: 1 1 auto;\n  font-size: inherit;\n  font-weight: normal;\n  width: 1%;\n\n  &:focus {\n    ~ div {\n      background-color: ',
      ';\n    }\n    outline: none;\n  }\n\n  /* Change Autocomplete styles in Chrome */\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus {\n    background-color: transparent !important;\n    -webkit-box-shadow: none !important;\n    -webkit-text-fill-color: #000;\n    transition: background-color 5000s ease-in-out 0s;\n  }\n\n  &::placeholder {\n    color: ',
      ';\n  }\n'
    ],
    [
      '\n  ',
      ';\n  border: 0;\n  flex: 1 1 auto;\n  font-size: inherit;\n  font-weight: normal;\n  width: 1%;\n\n  &:focus {\n    ~ div {\n      background-color: ',
      ';\n    }\n    outline: none;\n  }\n\n  /* Change Autocomplete styles in Chrome */\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus {\n    background-color: transparent !important;\n    -webkit-box-shadow: none !important;\n    -webkit-text-fill-color: #000;\n    transition: background-color 5000s ease-in-out 0s;\n  }\n\n  &::placeholder {\n    color: ',
      ';\n  }\n'
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      '\n  display: block;\n  font-weight: 700;\n  line-height: 1;\n  ',
      ';\n  padding-bottom: ',
      ';\n'
    ],
    [
      '\n  display: block;\n  font-weight: 700;\n  line-height: 1;\n  ',
      ';\n  padding-bottom: ',
      ';\n'
    ]
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      '\n  display: inline-block;\n  font-size: 0.875rem;\n  line-height: 1;\n  margin-bottom: 0;\n  ',
      ';\n  padding-top: 4px;\n'
    ],
    [
      '\n  display: inline-block;\n  font-size: 0.875rem;\n  line-height: 1;\n  margin-bottom: 0;\n  ',
      ';\n  padding-top: 4px;\n'
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    [
      '\n  color: ',
      ';\n  display: inline-block;\n  font-size: 0.875rem;\n  line-height: 1;\n  margin-bottom: 0;\n  ',
      ';\n'
    ],
    [
      '\n  color: ',
      ';\n  display: inline-block;\n  font-size: 0.875rem;\n  line-height: 1;\n  margin-bottom: 0;\n  ',
      ';\n'
    ]
  ),
  _templateObject7 = _taggedTemplateLiteral(
    [
      '\n  align-items: stretch;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: ',
      ';\n  font-weight: 300;\n  margin-bottom: ',
      ';\n  ',
      '\n  position: relative;\n  width: 100%;\n'
    ],
    [
      '\n  align-items: stretch;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: ',
      ';\n  font-weight: 300;\n  margin-bottom: ',
      ';\n  ',
      '\n  position: relative;\n  width: 100%;\n'
    ]
  ),
  _templateObject8 = _taggedTemplateLiteral(
    [
      '\n  background-color: ',
      ';\n  bottom: 0;\n  display: block;\n  height: ',
      ';\n  left: 0;\n  position: absolute;\n  right: 0;\n  transition: background-color 0.2s ease-out;\n  width: 100%;\n'
    ],
    [
      '\n  background-color: ',
      ';\n  bottom: 0;\n  display: block;\n  height: ',
      ';\n  left: 0;\n  position: absolute;\n  right: 0;\n  transition: background-color 0.2s ease-out;\n  width: 100%;\n'
    ]
  ),
  _templateObject9 = _taggedTemplateLiteral(
    [
      '\n  align-items: center;\n  display: flex;\n  font-size: inherit;\n  ',
      ';\n  white-space: nowrap;\n  & > svg {\n    display: block;\n    height: ',
      ';\n    width: ',
      ';\n  }\n'
    ],
    [
      '\n  align-items: center;\n  display: flex;\n  font-size: inherit;\n  ',
      ';\n  white-space: nowrap;\n  & > svg {\n    display: block;\n    height: ',
      ';\n    width: ',
      ';\n  }\n'
    ]
  );

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
} /* stylelint-disable order/properties-alphabetical-order */

var Input = (exports.Input = function Input(props) {
  var _props$meta = props.meta,
    error = _props$meta.error,
    valid = _props$meta.valid,
    touched = _props$meta.touched,
    label = props.label,
    placeholder = props.placeholder,
    descriptionTop = props.descriptionTop,
    descriptionBottom = props.descriptionBottom,
    description = props.description,
    size = props.size,
    input = props.input,
    onChange = props.onChange,
    prefix = props.prefix,
    data = props.data;

  return _react2.default.createElement(
    InputContainer,
    null,
    _react2.default.createElement(
      InputLabel,
      null,
      label,
      ' ',
      descriptionTop && getDescription(description)
    ),
    _react2.default.createElement(
      InputBlock,
      { size: size },
      prefix && _react2.default.createElement(Prefix, { size: size }, prefix),
      _react2.default.createElement(
        InputText,
        Object.assign(
          {
            'data-w': data,
            size: size
          },
          props,
          props.input,
          {
            onChange: onChange || input.onChange,
            placeholder: placeholder
          }
        )
      ),
      _react2.default.createElement(
        InputStatus,
        Object.assign({ size: size }, props.meta)
      ),
      _react2.default.createElement(InputBorder, props)
    ),
    !valid && touched
      ? _react2.default.createElement(InputError, null, error || description)
      : descriptionBottom && getDescription(description)
  );
});

Input.defaultProps = {
  meta: {
    error: null,
    visited: false,
    dirty: false,
    active: false,
    valid: false,
    touched: false
  },
  input: {},
  onChange: null,
  prefix: null,
  size: 'default',
  descriptionTop: false,
  descriptionBottom: false
};

Input.propTypes = {
  meta: _propTypes2.default.object,
  size: _propTypes2.default.string,
  input: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  descriptionTop: _propTypes2.default.bool,
  descriptionBottom: _propTypes2.default.bool,
  description: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string.isRequired,
  prefix: _propTypes2.default.string,
  data: _propTypes2.default.string.isRequired
};

var getDescription = function getDescription(description) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(InputDescription, null, description)
  );
};

var Icon = function Icon(props) {
  var dirty = props.dirty,
    valid = props.valid;

  if (dirty) {
    if (valid) {
      return IconSuccess;
    }
    return IconError;
  }
  return null;
};

var IconSuccess = _react2.default.createElement(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
  _react2.default.createElement('path', {
    fill: '#55AE07',
    d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'
  })
);

var IconError = _react2.default.createElement(
  'svg',
  { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
  _react2.default.createElement('path', {
    fill: '#d0021b',
    d:
      'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
  }),
  _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
);

var InputStatus = function InputStatus(props) {
  var size = props.size;

  return _react2.default.createElement(
    IconContainer,
    { size: size },
    _react2.default.createElement(Icon, props)
  );
};

var setInputBorderColor = function setInputBorderColor(props) {
  var _props$meta2 = props.meta,
    active = _props$meta2.active,
    dirty = _props$meta2.dirty,
    visited = _props$meta2.visited,
    error = _props$meta2.error;
  var _props$theme$palette = props.theme.palette,
    secondary = _props$theme$palette.secondary,
    errorColor = _props$theme$palette.error,
    success = _props$theme$palette.success,
    primary = _props$theme$palette.primary;

  if (active) {
    return secondary.default;
  } else if (visited && dirty) {
    if (error) {
      return errorColor.default;
    } else {
      return success.default;
    }
  } else {
    return primary.dark;
  }
};

var InputContainer = _styledComponents2.default.div(_templateObject);

var Prefix = _styledComponents2.default.span(
  _templateObject2,
  function(props) {
    return (
      props.theme.typography.label[props.size] ||
      props.theme.typography.label.default
    );
  },
  function(props) {
    return props.theme.spacer.xSmall;
  }
);

var InputText = _styledComponents2.default.input(
  _templateObject3,
  function(props) {
    return (
      props.theme.typography.label[props.size] ||
      props.theme.typography.label.default
    );
  },
  function(props) {
    return props.theme.palette.secondary.default;
  },
  function(props) {
    return props.theme.palette.common.disabled;
  }
);

var InputLabel = (exports.InputLabel = _styledComponents2.default.label(
  _templateObject4,
  function(props) {
    return props.theme.typography.label.default;
  },
  function(props) {
    return props.theme.spacer.xSmall;
  }
));

var InputDescription = (exports.InputDescription = _styledComponents2.default.p(
  _templateObject5,
  function(props) {
    return props.theme.typography.caption;
  }
));

var InputError = _styledComponents2.default.p(
  _templateObject6,
  function(props) {
    return props.theme.palette.error.default;
  },
  function(props) {
    return props.theme.typography.description;
  }
);

var InputBlock = _styledComponents2.default.div(
  _templateObject7,
  function(props) {
    return props.theme.typography.input[props.size]
      ? props.theme.typography.input[props.size]['font-size']
      : props.theme.typography.input.default['font-size'];
  },
  function(props) {
    return props.theme.spacer.xSmall;
  },
  function(props) {
    return (
      props.theme.spacer.input[props.size] || props.theme.spacer.input.default
    );
  }
);
var InputBorder = _styledComponents2.default.div(
  _templateObject8,
  function(props) {
    return setInputBorderColor(props);
  },
  function(props) {
    return props.size === 'default' ? '1px' : '2px';
  }
);

var IconContainer = _styledComponents2.default.span(
  _templateObject9,
  function(props) {
    return (
      props.theme.typography.label[props.size] ||
      props.theme.typography.label.default
    );
  },
  function(props) {
    return props.theme.typography.input[props.size]
      ? props.theme.typography.input[props.size].iconSize
      : props.theme.typography.input.default.iconSize;
  },
  function(props) {
    return props.theme.typography.input[props.size]
      ? props.theme.typography.input[props.size].iconSize
      : props.theme.typography.input.default.iconSize;
  }
);

exports.default = Input;

//# sourceMappingURL=Input.js.map

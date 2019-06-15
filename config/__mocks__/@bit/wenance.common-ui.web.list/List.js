'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.ListItem = exports.List = undefined;

var _templateObject = _taggedTemplateLiteral(
    ['\n  margin: 0;\n'],
    ['\n  margin: 0;\n']
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      '\n  margin-bottom: ',
      ';\n  ',
      ';\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n  &:before {\n    top: ',
      ';\n  }\n  padding: ',
      ';\n'
    ],
    [
      '\n  margin-bottom: ',
      ';\n  ',
      ';\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n  &:before {\n    top: ',
      ';\n  }\n  padding: ',
      ';\n'
    ]
  );

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

// List Component

var List = (exports.List = function List(props) {
  return _react2.default.createElement(StyledList, props, props.children);
});

List.propTypes = {
  data: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired
};

var ListItem = (exports.ListItem = function ListItem(props) {
  return _react2.default.createElement(StyledListItem, props, props.children);
});
var StyledList = _styledComponents2.default.ul(_templateObject);
StyledList.defaultProps = {
  theme: {
    list: {
      padding: '0 0 0 1rem'
    },
    typography: {
      description: {
        'font-size': '.875rem',
        'font-weight': '400',
        'line-height': '1.25'
      }
    },
    spacer: {
      small: '.75rem',
      list: {
        itemSpacer: '.5rem'
      }
    }
  }
};

var StyledListItem = _styledComponents2.default.li(
  _templateObject2,
  function(props) {
    return props.theme.spacer.small;
  },
  function(props) {
    return props.theme.typography.description;
  },
  function(props) {
    return props.theme.spacer.list.itemSpacer;
  },
  function(props) {
    return props.theme.list.padding;
  }
);

StyledListItem.defaultProps = {
  theme: {
    list: {
      padding: '0 0 0 1rem'
    },
    typography: {
      description: {
        'font-size': '.875rem',
        'font-weight': '400',
        'line-height': '1.25'
      }
    },
    spacer: {
      small: '.75rem',
      list: {
        itemSpacer: '.5rem'
      }
    }
  }
};

//# sourceMappingURL=List.js.map

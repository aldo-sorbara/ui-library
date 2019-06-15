'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Grid = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      "\n  align-content: unset;\n  display: flex;\n  flex-wrap: 'no-wrap';\n  margin: 0 auto;\n  max-width: ",
      '%;\n  width: 100%;\n'
    ],
    [
      "\n  align-content: unset;\n  display: flex;\n  flex-wrap: 'no-wrap';\n  margin: 0 auto;\n  max-width: ",
      '%;\n  width: 100%;\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      '\n  align-items: unset;\n  box-sizing: border-box;\n  display: inline-block;\n  justify-content: unset;\n  order: unset;\n  padding: 0;\n  vertical-align: top;\n  width: ',
      '%;\n\n  @media (max-width: ',
      ') {\n    width: ',
      '%;\n  }\n\n  @media (max-width: ',
      ') {\n    width: ',
      '%;\n  }\n\n  @media (max-width: ',
      ') {\n    width: ',
      '%;\n  }\n'
    ],
    [
      '\n  align-items: unset;\n  box-sizing: border-box;\n  display: inline-block;\n  justify-content: unset;\n  order: unset;\n  padding: 0;\n  vertical-align: top;\n  width: ',
      '%;\n\n  @media (max-width: ',
      ') {\n    width: ',
      '%;\n  }\n\n  @media (max-width: ',
      ') {\n    width: ',
      '%;\n  }\n\n  @media (max-width: ',
      ') {\n    width: ',
      '%;\n  }\n'
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

var mediaQueries = {
  xs: '576px',
  sm: '768px',
  md: '992px'
};

var StyledContainer = _styledComponents2.default.div(_templateObject, function(
  props
) {
  return props.size;
});

var Container = (exports.Container = function Container(props) {
  return _react2.default.createElement(StyledContainer, props, props.children);
});

Container.propTypes = {
  size: _propTypes2.default.number
};

Container.defaultProps = {
  size: 100
};

var StyledGrid = _styledComponents2.default.div(
  _templateObject2,
  function(props) {
    return props.lg === 0 ? 'none' : '' + props.lg;
  },
  function(props) {
    return props.theme.breakPoints.md;
  },
  function(props) {
    return props.md === 0 ? 'none' : '' + props.md;
  },
  function(props) {
    return props.theme.breakPoints.sm;
  },
  function(props) {
    return props.sm === 0 ? 'none' : '' + props.sm;
  },
  function(props) {
    return props.theme.breakPoints.xs;
  },
  function(props) {
    return props.xs === 0 ? 'none' : '' + props.xs;
  }
);

StyledGrid.defaultProps = {
  theme: {
    breakPoints: mediaQueries
  }
};

var Grid = (exports.Grid = function Grid(props) {
  return _react2.default.createElement(StyledGrid, props, props.children);
});

Grid.propTypes = {
  xs: _propTypes2.default.number,
  sm: _propTypes2.default.number,
  md: _propTypes2.default.number,
  lg: _propTypes2.default.number
};

Grid.defaultProps = {
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0
};

//# sourceMappingURL=Grids.js.map

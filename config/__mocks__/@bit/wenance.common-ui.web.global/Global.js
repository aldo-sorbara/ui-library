'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.SecondHeadline = exports.LabelLarge = exports.Label = exports.Legales = exports.Description = exports.Headline = exports.Wrapper = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(
    [
      '\n  background-color: ',
      ';\n  margin: ',
      ';\n  max-width: ',
      ';\n\n  ',
      '\n'
    ],
    [
      '\n  background-color: ',
      ';\n  margin: ',
      ';\n  max-width: ',
      ';\n\n  ',
      '\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ['\n  overflow-x: hidden;\n  padding: ', ';\n  text-align: ', ';\n'],
    ['\n  overflow-x: hidden;\n  padding: ', ';\n  text-align: ', ';\n']
  ),
  _templateObject3 = _taggedTemplateLiteral(
    [
      '\n  margin-bottom: ',
      ';\n  margin-left: ',
      ';\n  margin-top: ',
      ';\n  ',
      ';\n'
    ],
    [
      '\n  margin-bottom: ',
      ';\n  margin-left: ',
      ';\n  margin-top: ',
      ';\n  ',
      ';\n'
    ]
  ),
  _templateObject4 = _taggedTemplateLiteral(
    ['\n  margin-bottom: ', ';\n  margin-top: ', ';\n  ', ';\n'],
    ['\n  margin-bottom: ', ';\n  margin-top: ', ';\n  ', ';\n']
  ),
  _templateObject5 = _taggedTemplateLiteral(
    [
      '\n  border-bottom: 1px solid ',
      ';\n  margin-bottom: ',
      ';\n  margin-top: ',
      ';\n  ',
      ';\n'
    ],
    [
      '\n  border-bottom: 1px solid ',
      ';\n  margin-bottom: ',
      ';\n  margin-top: ',
      ';\n  ',
      ';\n'
    ]
  ),
  _templateObject6 = _taggedTemplateLiteral(
    ['\n  margin-bottom: ', ';\n  margin-top: 20;\n  ', ';\n'],
    ['\n  margin-bottom: ', ';\n  margin-top: 20;\n  ', ';\n']
  ),
  _templateObject7 = _taggedTemplateLiteral(
    ['\n  margin-bottom: ', ';\n  ', ';\n'],
    ['\n  margin-bottom: ', ';\n  ', ';\n']
  ),
  _templateObject8 = _taggedTemplateLiteral(
    [
      '\n  font-size: 1.125rem;\n  margin-bottom: 0;\n  margin-top: ',
      ';\n  ',
      ';\n'
    ],
    [
      '\n  font-size: 1.125rem;\n  margin-bottom: 0;\n  margin-top: ',
      ';\n  ',
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

// Container component

var Container = (exports.Container = function Container(props) {
  return _react2.default.createElement(StyledContainer, props, props.children);
});

var StyledContainer = _styledComponents2.default.div(
  _templateObject,
  function(props) {
    return props.background;
  },
  function(props) {
    return props.margin;
  },
  function(props) {
    return props.maxWidth;
  },
  function(props) {
    return (
      props.absolute &&
      '\n    left:0;\n    position: absolute;\n    top:0;\n    z-index: ' +
        props.theme.zIndex.container +
        ';\n  '
    );
  }
);
Container.propTypes = {
  absolute: _propTypes2.default.bool,
  background: _propTypes2.default.string,
  margin: _propTypes2.default.string,
  maxWidth: _propTypes2.default.string
};

Container.defaultProps = {
  absolute: false,
  margin: '0 auto',
  maxWidth: 'unset',
  background: 'transparent'
};

StyledContainer.defaultProps = {
  theme: {
    zIndex: {
      container: 1
    }
  }
};

// Wrapper Component

var Wrapper = (exports.Wrapper = function Wrapper(props) {
  return _react2.default.createElement(StyledWrapper, props, props.children);
});

var StyledWrapper = _styledComponents2.default.div(
  _templateObject2,
  function(props) {
    return props.padding || props.theme.spacer.wrapperInner;
  },
  function(props) {
    return props.textAlign;
  }
);

Wrapper.propTypes = {
  padding: _propTypes2.default.string,
  textAlign: _propTypes2.default.string
};

Wrapper.defaultProps = {
  padding: null,
  textAlign: 'left'
};

StyledWrapper.defaultProps = {
  theme: {
    spacer: {
      wrapperInner: '2rem'
    }
  }
};

// Wrapper Headline

var Headline = (exports.Headline = function Headline(props) {
  return _react2.default.createElement(StyledHeadline, props, props.children);
});

Headline.propTypes = {
  marginLeft: _propTypes2.default.number,
  marginTop: _propTypes2.default.number
};

Headline.defaultProps = {
  marginLeft: 0,
  marginTop: 0
};

var StyledHeadline = _styledComponents2.default.h1(
  _templateObject3,
  function(props) {
    return props.theme.spacer.small;
  },
  function(props) {
    return props.marginLeft;
  },
  function(props) {
    return props.marginTop;
  },
  function(props) {
    return props.theme.typography.headline;
  }
);

StyledHeadline.defaultProps = {
  theme: {
    spacer: {
      small: '.5rem'
    },
    typography: {
      headline: {
        'font-size': '1.625rem',
        'font-weight': '700',
        'line-height': '1.14'
      }
    }
  }
};

// Description Component

var Description = (exports.Description = function Description(props) {
  return _react2.default.createElement(
    StyledDescription,
    props,
    props.children
  );
});

var StyledDescription = _styledComponents2.default.p(
  _templateObject4,
  function(props) {
    return props.theme.spacer.medium;
  },
  function(props) {
    return props.marginTop;
  },
  function(props) {
    return props.theme.typography.description;
  }
);
Description.propTypes = {
  marginTop: _propTypes2.default.number
};
Description.defaultProps = {
  marginTop: 0
};

StyledDescription.defaultProps = {
  theme: {
    typography: {
      description: {
        'font-size': '.875rem',
        'font-weight': '400',
        'line-height': '1.25'
      }
    },
    spacer: {
      medium: '1rem'
    }
  }
};

// Legales Component

var Legales = (exports.Legales = function Legales(props) {
  return _react2.default.createElement(StyledLegales, props, props.children);
});

var StyledLegales = _styledComponents2.default.p(
  _templateObject5,
  function(props) {
    return props.theme.palette.common.disabled;
  },
  function(props) {
    return props.theme.spacer.medium;
  },
  function(props) {
    return props.theme.spacer.xSmall;
  },
  function(props) {
    return props.theme.typography.description;
  }
);
StyledLegales.defaultProps = {
  theme: {
    typography: {
      description: {
        'font-size': '.875rem',
        'font-weight': '400',
        'line-height': '1.25'
      }
    },
    palette: {
      common: {
        disabled: '#d5d8df'
      }
    },
    spacer: {
      medium: '1rem',
      xSmall: '.25rem'
    }
  }
};

// Label Component

var Label = (exports.Label = function Label(props) {
  return _react2.default.createElement(StyledLabel, props, props.children);
});

var StyledLabel = _styledComponents2.default.label(
  _templateObject6,
  function(props) {
    return props.theme.spacer.xSmall;
  },
  function(props) {
    return props.theme.typography.label.default;
  }
);
StyledLabel.defaultProps = {
  theme: {
    typography: {
      label: {
        default: {
          'font-size': '1rem',
          'font-weight': '700',
          'line-height': '1.33'
        }
      }
    },
    spacer: {
      xSmall: '.25rem'
    }
  }
};

// LabelLarge Component

var LabelLarge = (exports.LabelLarge = function LabelLarge(props) {
  return _react2.default.createElement(StyledLabelLarge, props, props.children);
});

var StyledLabelLarge = _styledComponents2.default.label(
  _templateObject7,
  function(props) {
    return props.theme.spacer.xSmall;
  },
  function(props) {
    return props.theme.typography.label.large;
  }
);
StyledLabelLarge.defaultProps = {
  theme: {
    typography: {
      label: {
        large: {
          'font-size': '3rem',
          'font-weight': '400',
          'line-height': '1'
        }
      }
    },
    spacer: {
      xSmall: '.25rem'
    }
  }
};

// SecondHeadline Component

var SecondHeadline = (exports.SecondHeadline = function SecondHeadline(props) {
  return _react2.default.createElement(
    StyledSecondHeadline,
    props,
    props.children
  );
});

var StyledSecondHeadline = _styledComponents2.default.h2(
  _templateObject8,
  function(props) {
    return props.marginTop;
  },
  function(props) {
    return props.theme.typography.label.default;
  }
);

SecondHeadline.propTypes = {
  marginTop: _propTypes2.default.number
};
SecondHeadline.defaultProps = {
  marginTop: 0
};
StyledSecondHeadline.defaultProps = {
  theme: {
    typography: {
      label: {
        default: {
          'font-size': '1rem',
          'font-weight': '700',
          'line-height': '1.33'
        }
      }
    }
  }
};

//# sourceMappingURL=Global.js.map

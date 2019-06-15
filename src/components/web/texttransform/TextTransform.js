import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @render react
 * @name TextTransform
 * @description TextTransform Component for Wenance
 */

class TextTransform extends React.Component {
  componentDidMount() {
    const { modifiers } = this.props;
    let { text } = this.props;
    modifiers.map(m => {
      text = (this.modifiers[m] || this.modifiers.def)(text);
      return null;
    });
    this.refs.component && (this.refs.component.innerHTML = text);
  }

  safeMatch = (str, regexp) => str.match(regexp) || [];

  createRegExp = (preRegx, postRegx = preRegx) =>
    new RegExp(`${preRegx}(.*?)${postRegx}`, 'g');

  modifiers = {
    def: t => t,
    bold: str =>
      this.safeMatch(str, this.createRegExp('\\*')).reduce(
        (toReturn, s) =>
          (toReturn = toReturn.replace(
            s,
            `<b>${s.substring(1, s.length - 1)}</b>`
          )),
        str
      ),
    italic: str =>
      this.safeMatch(str, this.createRegExp('\\_')).reduce(
        (toReturn, s) =>
          (toReturn = toReturn.replace(
            s,
            `<i>${s.substring(1, s.length - 1)}</i>`
          )),
        str
      ),
    links: str =>
      this.safeMatch(str, this.createRegExp('(\\[', '\\]){2}')).reduce(
        (toReturn, s) => {
          const [text, link] = this.safeMatch(
            s,
            this.createRegExp('\\[', '\\]')
          );
          return toReturn.replace(link, '').replace(
            text,
            `<a href="${link.substring(1, link.length - 1)}" target="_blank">
	  				  ${text.substring(1, text.length - 1)}
	  			  </a>`
          );
        },
        str
      )
  };

  render() {
    const Component = StyledTextTransform;
    return <Component {...this.props} ref={'component'} />;
  }
}

const StyledTextTransform = styled.span`
  margin: 0;
`;

TextTransform.defaultProps = {
  modifiers: []
};

TextTransform.propTypes = {
  modifiers: PropTypes.array,
  text: PropTypes.string.isRequired
};

export default TextTransform;

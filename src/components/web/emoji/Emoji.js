import React from 'react';
import PropTypes from 'prop-types';
import { Twemoji } from 'react-emoji-render';

const Emoji = props => <Twemoji style={props.style} text={props.children} />;

Emoji.propTypes = {
  children: PropTypes.string.isRequired
};

export default Emoji;

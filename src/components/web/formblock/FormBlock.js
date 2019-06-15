import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @render react
 * @name FormBlock
 * @description FormBlock Component for Wenance
 */

const FormBlock = props => {
  const { children, ...rest } = props;
  const Component = StyledBlock;
  return <Component {...rest}>{children}</Component>;
};

const StyledBlock = styled.div`
  padding-bottom: ${props => props.theme.spacer.xLarge};
`;

StyledBlock.propTypes = {
  children: PropTypes.node.isRequired
};

StyledBlock.defaultProps = {
  theme: {
    spacer: {
      xLarge: '2rem'
    }
  }
};

export default FormBlock;

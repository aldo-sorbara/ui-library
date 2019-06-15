import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @render react
 * @name Card
 * @description Card Component for Wenance
 * @example
 * <Card data="card"> This is a card container.</Card>
 */

const Card = props => {
  const { children, data, ...rest } = props;
  const Component = StyledCard;
  return (
    <Component {...rest} data-w={data}>
      {children}
    </Component>
  );
};

Card.propTypes = {
  data: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool
};

Card.defaultProps = {
  active: false
};

const StyledCard = styled.div`
  border: ${props => `1px solid ${props.theme.palette.common.disabled}`};
  box-shadow: ${props =>
    props.active ? '0 3px 14px 0 rgba(21, 67, 118, 0.12)' : 'none'};
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacer.medium};
  outline: none;
  padding: ${props => props.theme.spacer.medium};
`;

StyledCard.defaultProps = {
  theme: {
    spacer: {
      medium: '1rem'
    },
    palette: {
      common: {
        disabled: '#d5d8df'
      }
    }
  }
};

export default Card;

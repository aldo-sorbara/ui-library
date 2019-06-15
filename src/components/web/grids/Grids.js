import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const mediaQueries = {
  xs: '576px',
  sm: '768px',
  md: '992px'
};

const StyledContainer = styled.div`
  align-content: unset;
  display: flex;
  flex-wrap: 'no-wrap';
  margin: 0 auto;
  max-width: ${props => props.size}%;
  width: 100%;
`;

export const Container = props => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);

Container.propTypes = {
  size: PropTypes.number
};

Container.defaultProps = {
  size: 100
};

const StyledGrid = styled.div`
  align-items: unset;
  box-sizing: border-box;
  display: inline-block;
  justify-content: unset;
  order: unset;
  padding: 0;
  vertical-align: top;
  width: ${props => (props.lg === 0 ? 'none' : `${props.lg}`)}%;

  @media (max-width: ${props => props.theme.breakPoints.md}) {
    width: ${props => (props.md === 0 ? 'none' : `${props.md}`)}%;
  }

  @media (max-width: ${props => props.theme.breakPoints.sm}) {
    width: ${props => (props.sm === 0 ? 'none' : `${props.sm}`)}%;
  }

  @media (max-width: ${props => props.theme.breakPoints.xs}) {
    width: ${props => (props.xs === 0 ? 'none' : `${props.xs}`)}%;
  }
`;

StyledGrid.defaultProps = {
  theme: {
    breakPoints: mediaQueries
  }
};

export const Grid = props => (
  <StyledGrid {...props}>{props.children}</StyledGrid>
);

Grid.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
};

Grid.defaultProps = {
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0
};

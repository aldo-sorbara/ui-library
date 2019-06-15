import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// List Component

export const List = props => (
  <StyledList {...props}>{props.children}</StyledList>
);

List.propTypes = {
  data: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export const ListItem = props => (
  <StyledListItem {...props}>{props.children}</StyledListItem>
);
const StyledList = styled.ul`
  margin: 0;
`;
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

const StyledListItem = styled.li`
  margin-bottom: ${props => props.theme.spacer.small};
  ${props => props.theme.typography.description};

  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    background-color: ${props => props.theme.list.color};
    border-color: ${props => props.theme.list.color};
    top: ${props => props.theme.spacer.list.itemSpacer};
  }
  padding: ${props => props.theme.list.padding};
`;

StyledListItem.defaultProps = {
  theme: {
    list: {
      padding: '0 0 0 1rem',
      color: '#0082FF'
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

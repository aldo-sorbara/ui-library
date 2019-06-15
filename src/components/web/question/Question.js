import React from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name Question
 * @description Question Component for Wenance
 */

// QuestionTitle Component

export const QuestionTitle = props => (
  <StyledQuestionTitle {...props}>{props.children}</StyledQuestionTitle>
);

const StyledQuestionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacer.xSmall};
  margin-top: 0;
  ${props => props.theme.typography.label.default};
`;

StyledQuestionTitle.defaultProps = {
  theme: {
    spacer: {
      xSmall: '.25rem'
    },
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

// Description Component

export const Description = props => (
  <StyledDescription {...props}>{props.children}</StyledDescription>
);

const StyledDescription = styled.p`
  margin-bottom: 0;
  margin-top: ${props => props.theme.spacer.medium};
  ${props => props.theme.typography.description};
  a {
    cursor: pointer;
  }
`;

StyledDescription.defaultProps = {
  theme: {
    spacer: {
      medium: '1rem'
    },
    typography: {
      description: {
        'font-size': '.875rem',
        'font-weight': '400',
        'line-height': '1.25'
      }
    }
  }
};

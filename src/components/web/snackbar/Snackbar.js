import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, keyframes } from 'styled-components';

const IconInfo = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      fill='currentColor'
      d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
    />
  </svg>
);

const snackbarShow = keyframes`
      0%{ bottom:-70px; }
      10% {bottom:15px; }
      95% {bottom:15px; }
      100% {bottom:-80px}
`;

const Snackbar = props => {
  const { content, title, Icon, action, modifier, fixed } = props;
  const dataw = props[`data-w`];

  return (
    <SnackbarContainer data-w={dataw} fixed={fixed} modifier={modifier}>
      <Box>
        <IconContainer content={content}>{Icon || <IconInfo />}</IconContainer>
        <p>
          <span>
            <strong>{title}</strong>
          </span>
          {content && <span>{content}</span>}
        </p>
      </Box>
      {action && <ActionContainer>{action}</ActionContainer>}
    </SnackbarContainer>
  );
};

Snackbar.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  fixed: PropTypes.bool,
  modifier: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
  action: PropTypes.node
};
Snackbar.defaultProps = {
  modifier: 'info',
  content: null,
  fixed: false
};

const Box = styled.div`
  align-items: center;
  display: flex;
  p {
    margin-bottom: 0;
  }
  span:nth-child(2) {
    display: block;
    margin-top: 0.5rem;
  }
`;
const IconContainer = styled.span`
  background-color: ${props => props.theme.palette.common.bodyBg};
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  font-size: 0;
  height: 40px;
  justify-content: center;
  margin-right: 0.75rem;
  ${props => props.content && { alignSelf: 'center', bottom: '2px' }};
  position: relative;
  text-align: center;
  width: 40px;
  & > svg {
    position: relative;
    top: 0.5rem;
  }
`;

IconContainer.defaultProps = {
  theme: {
    palette: {
      common: {
        bodyBg: '#FFF'
      }
    }
  }
};

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.75rem;
`;

const SnackbarContainer = styled.div`
  animation: ${snackbarShow} 4s ease-in-out;
  background-color: ${props => props.theme.palette[props.modifier].light};
  border: 1px solid transparent;
  color: ${props => props.theme.palette[props.modifier].dark};
  display: flex;
  justify-content: space-between;
  line-height: 1.25;
  margin-top: ${props =>
    props.theme.spacer.blockSpacerFb || props.theme.spacer.blockSpacer};
  ${props => props.theme.alerts.container}
  ${props =>
    props.fixed && {
      position: 'fixed',
      left: 0,
      right: 0,
      alignItems: 'center',
      margin: '1rem'
    }}
  padding: 0.75rem 1rem 0.75rem 1rem;

  &:empty {
    display: none;
  }

  & ~ & {
    margin-top: ${props => props.theme.spacer.xSmall};
  }

  & > p {
    margin-top: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
  z-index: 9999;
`;

SnackbarContainer.defaultProps = {
  theme: {
    spacer: {
      blockSpacer: '1.25rem',
      xSmall: '.5rem'
    }
  }
};

export default withTheme(Snackbar);

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition } from 'react-spring/renderprops.cjs.js';

/**
 * @render react
 * @name Modal
 * @description Card Component for Wenance
 * @example
 * <Modal> This is a modal</Modal>
 */

export const Modal = props => {
  const {
    children,
    title,
    open,
    onClose,
    actionButtons,
    style,
    customStyle,
    closeButton,
    ...rest
  } = props;
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);
  const handleResize = e => {
    setWindowWidth(document.body.clientWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize, true);
    return () => {
      window.removeEventListener('resize', handleResize, true);
    };
  });
  return (
    <Transition
      items={open}
      from={{
        opacity: 0,
        transform: 'translateY(300%)'
      }}
      enter={{
        opacity: 1,
        transform: 'translateY(0%)'
      }}
      leave={{
        opacity: 0,
        transform: 'translateY(300%)'
      }}
    >
      {item =>
        item &&
        (p => (
          <BgModal {...rest} style={{ ...style, opacity: p.opacity }}>
            <div
              style={{
                width:
                  /* istanbul ignore next */ windowWidth > 1000 ? '100%' : 0
              }}
            />
            <ModalContainer windowWidth={windowWidth}>
              <StyledModal style={customStyle}>
                {onClose && !closeButton ? (
                  <Close onClick={onClose}>
                    <CloseIcon />
                  </Close>
                ) : (
                  <Close onClick={onClose}>{closeButton}</Close>
                )}
                {title && <Title>{title}</Title>}

                <div style={{ transform: p.transform }}>{children}</div>
                {actionButtons && (
                  <ActionContainer>{actionButtons}</ActionContainer>
                )}
              </StyledModal>
            </ModalContainer>
          </BgModal>
        ))
      }
    </Transition>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array
  ]),
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func,
  actionButtons: PropTypes.node,
  closeButton: PropTypes.node,
  windowWidth: PropTypes.number
};

Modal.defaultProps = {
  children: null,
  title: null,
  onClose: null,
  actionButtons: null,
  closeButton: null,
  windowWidth: 0,
  customStyle: {},
  style: {},
  open: false
};

const CloseIcon = props => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    height='24'
    width='24'
    viewBox='0 0 35 35'
  >
    {/* eslint-disable max-len */}
    <path d='M26 22.87A2.14 2.14 0 0 1 26 26a2.14 2.14 0 0 1-3.13 0l-5.54-5.54-5.5 5.5c-.45.45-.98.68-1.58.7A2.1 2.1 0 0 1 8.67 26 2.1 2.1 0 0 1 8 24.42c.01-.6.24-1.13.7-1.58l5.5-5.5-5.54-5.55a2.15 2.15 0 0 1 0-3.12 2.14 2.14 0 0 1 3.12 0l5.54 5.54 5.54-5.54a2.15 2.15 0 0 1 3.13 0 2.14 2.14 0 0 1 0 3.12l-5.54 5.54L26 22.87z' />
    {/* eslint-enable max-len */}
  </svg>
);

const BgModal = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: ${props => props.theme.zIndex.modal};
`;

const ModalContainer = styled.div`
  background-color: ${props => props.theme.modals.backgroundOverlay};
  display: flex;
  height: 100%;
  overflow: auto;
  width: ${/* istanbul ignore next */ props =>
    props.windowWidth >= 1000 ? '768px' : '100%'};
`;

const StyledModal = styled.div`
  background-color: ${props =>
    props.theme.modals.backgroundModal || props.theme.palette.primary.light};
  color: ${props => props.theme.palette.common.text.inverse};
  flex: 1;

  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  padding: ${props => props.theme.spacer.large};
  position: relative;

  > div {
    margin-bottom: ${props => props.theme.spacer.large};
  }

  @media (min-width: ${props => props.theme.breakPoints.sm}) {
    border-radius: ${props => props.theme.modals.borderRadius};
    margin: ${props => props.theme.spacer.large};
    padding: ${props => props.theme.spacer.wrapperInner};
  }
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Close = styled.div`
  cursor: pointer;
  display: inline-block;
  position: absolute;
  right: ${props => props.theme.spacer.large};
  top: ${props => props.theme.spacer.large};

  svg {
    height: 2rem;
    width: 2rem;
  }
`;

const Title = styled.h1`
  margin-bottom: ${props => props.theme.spacer.blockSpacer};
  margin-top: 2.5rem;
  ${props => props.theme.typography.headline};
`;

export default Modal;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'styled-components';

import windowSize from 'react-window-size';

class Loading extends React.Component {
  render() {
    const { loading, windowWidth, text, theme } = this.props;
    if (!loading) {
      return null;
    }

    return (
      <Container style={this.props.style} data-w='loading'>
        <div
          style={{
            width: /* istanbul ignore next */ windowWidth > 1000 ? '100%' : 0
          }}
        />
        <LoaderSVG windowWidth={windowWidth}>
          <img src={theme.assetsPaths.loading} alt='Cargando' height='80' />
          {text && (
            <TextContainer>
              <Description>{text}</Description>
            </TextContainer>
          )}
        </LoaderSVG>
      </Container>
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string
};

Loading.defaultProps = {
  text: null
};

const Container = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${props => props.theme.zIndex.loaderContainer};
`;

Container.defaultProps = {
  theme: {
    zIndex: {
      loaderContainer: 1020
    }
  }
};

const Description = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const TextContainer = styled.div`
  padding: 48px;
  padding-top: 68px;
`;

const LoaderSVG = styled.div`
  align-items: center;
  background: ${props => props.theme.palette.common.bodyBg};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${/* istanbul ignore next */ props =>
    props.windowWidth >= 1000 ? props.theme.breakPoints.sm : '100%'};
`;

LoaderSVG.defaultProps = {
  theme: {
    palette: {
      common: {
        bodyBg: '#ffffff'
      }
    },
    breakPoints: {
      sm: '768px'
    }
  }
};

export default windowSize(withTheme(Loading));

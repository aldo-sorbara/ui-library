import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';

const defaultStyle = { border: '1px solid white' };

const FacebookButton = ({ text, config, facebookCallback, style }) => {
  const facebookStyles = {
    ...style,
    ...(config.BRAND === 'welp' ? defaultStyle : {})
  };
  const redirectUrl =
    config.FACEBOOK.REDIRECT_URI[process.env.REACT_APP_ENV || 'dev'];
  return (
    <Container data-w='facebook_button'>
      <FacebookLogin
        appId={config.FACEBOOK.APPID}
        autoLoad={false}
        fields='first_name,last_name,email'
        callback={facebookCallback}
        textButton={text}
        redirectUri={redirectUrl}
        isMobile
        version={config.FACEBOOK.API_VERSION}
        containerStyle={facebookStyles}
      />
    </Container>
  );
};

FacebookButton.propTypes = {
  config: PropTypes.object.isRequired,
  facebookCallback: PropTypes.func.isRequired,
  text: PropTypes.string
};

FacebookButton.defaultProps = {
  text: 'Continuar con Facebook',
  style: {}
};

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export default FacebookButton;

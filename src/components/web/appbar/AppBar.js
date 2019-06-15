import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import styled from 'styled-components';

const AppBar = props => {
  const imgURI = props.inverse
    ? props.theme.assetsPaths.logoInverse
    : props.theme.assetsPaths.logo;
  return (
    <StyledAppBar {...props}>
      <div>
        <img src={imgURI} alt={BRAND} height='32' />
      </div>
    </StyledAppBar>
  );
};

/* istanbul ignore next */
const BRAND = process.env.REACT_APP_BRAND
  ? process.env.REACT_APP_BRAND
  : 'welp_ar';

AppBar.defaultProps = {
  inverse: false,
  sticky: false
};

AppBar.propTypes = {
  inverse: PropTypes.bool.isRequired,
  sticky: PropTypes.bool.isRequired
};

const StickyAppBar = () => `
  width: 100%;
  top:0;
  left:0;
  color: white;
`;

const StyledAppBar = styled.div`
  font-size: 0;
  ${props => props.sticky && StickyAppBar};
  padding: ${props => props.theme.spacer.header.inner};
  position: ${props => (props.sticky ? 'fixed' : 'relative')};
  z-index: ${props => props.theme.zIndex.appBar};

  > img {
    margin-top: ${props => props.theme.spacer.medium};
  }
`;

StyledAppBar.defaultProps = {
  theme: {
    assetsPaths: {
      logoInverse: './welp_ar/logo-inverse.png',
      logo: './welp_ar/logo.png'
    },
    zIndex: {
      appBar: 120
    },
    spacer: {
      medium: '1rem',
      header: {
        inner: '.5rem 1rem'
      }
    }
  }
};

export default withTheme(AppBar);

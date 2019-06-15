import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @render react
 * @name Hero
 * @description Hero Component for Wenance
 */

const Hero = props => {
  const { children, imageUrl, title, titleStyle, action, ...rest } = props;
  const Component = StyledHero;
  return (
    <Component imageUrl={imageUrl} {...rest}>
      {title && <Title style={titleStyle}>{title}</Title>}
      {children && <DescriptionContainer>{children}</DescriptionContainer>}
      {action && <ActionContainer>{action}</ActionContainer>}
    </Component>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  action: PropTypes.node,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  titleStyle: PropTypes.object
};

Hero.defaultProps = {
  action: null,
  children: null,
  imageUrl: null,
  title: null,
  titleStyle: {}
};

const StyledHero = styled.div`
  background-image: url(${props =>
    props.imageUrl || props.theme.assetsPaths.landingBackground});
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.theme.palette.common.text.inverse};
  padding: ${props =>
    `${props.theme.spacer.hero.top} ${props.theme.spacer.wrapperInner} ${
      props.theme.spacer.hero.bottom
    }`};
  text-align: center;
`;

/* stylelint-disable order/properties-alphabetical-order */
const Title = styled.h1`
  ${props => props.theme.typography.headline};
  color: inherit;
  font-size: 2.25rem;
  margin-bottom: ${props => props.theme.spacer.wrapperInner};
`;
/* stylelint-enable order/properties-alphabetical-order */

const DescriptionContainer = styled.div`
  display: inline-block;
  margin-bottom: ${props => props.theme.spacer.large};
  text-align: center;
`;

const ActionContainer = styled.div`
  margin: 0 4rem;
`;

StyledHero.defaultProps = {
  theme: {
    spacer: {
      wrapperInner: '2rem',
      medium: '1rem',
      large: '1.5rem',
      hero: {
        bottom: '8rem',
        top: '13rem'
      }
    },
    palette: {
      common: {
        text: {
          inverse: '#ffffff'
        }
      }
    },
    assetsPaths: {
      landingBackground: './welp_ar/bg_welp.png'
    },
    typography: {
      headline: {
        'line-height': '1.14',
        'font-weight': '700',
        'font-size': '1.625rem'
      }
    }
  }
};

export default Hero;

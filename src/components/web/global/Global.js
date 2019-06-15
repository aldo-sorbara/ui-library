import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @render react
 * @name Global
 * @description Global Components for Wenance
 */

// Container component

export const Container = props => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);

const StyledContainer = styled.div`
  background-color: ${props => props.background};
  margin: ${props => props.margin};
  max-width: ${props => props.maxWidth};

  ${props =>
    props.absolute &&
    `
    left:0;
    position: absolute;
    top:0;
    z-index: ${props.theme.zIndex.container};
  `}
`;
Container.propTypes = {
  absolute: PropTypes.bool,
  background: PropTypes.string,
  margin: PropTypes.string,
  maxWidth: PropTypes.string
};

Container.defaultProps = {
  absolute: false,
  margin: '0 auto',
  maxWidth: 'unset',
  background: 'transparent'
};

StyledContainer.defaultProps = {
  theme: {
    zIndex: {
      container: 1
    }
  }
};

// Wrapper Component

export const Wrapper = props => (
  <StyledWrapper {...props}>{props.children}</StyledWrapper>
);

const StyledWrapper = styled.div`
  overflow-x: hidden;
  padding: ${props => props.padding || props.theme.spacer.wrapperInner};
  text-align: ${props => props.textAlign};
`;

Wrapper.propTypes = {
  padding: PropTypes.string,
  textAlign: PropTypes.string
};

Wrapper.defaultProps = {
  padding: null,
  textAlign: 'left'
};

StyledWrapper.defaultProps = {
  theme: {
    spacer: {
      wrapperInner: '2rem'
    }
  }
};

// Wrapper Headline

export const Headline = props => (
  <StyledHeadline {...props}>{props.children}</StyledHeadline>
);

Headline.propTypes = {
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number
};

Headline.defaultProps = {
  marginLeft: 0,
  marginTop: 0
};

const StyledHeadline = styled.h1`
  margin-bottom: ${props => props.theme.spacer.small};
  margin-left: ${props => props.marginLeft};
  margin-top: ${props => props.marginTop};
  ${props => props.theme.typography.headline};
`;

StyledHeadline.defaultProps = {
  theme: {
    spacer: {
      small: '.5rem'
    },
    typography: {
      headline: {
        'font-size': '1.625rem',
        'font-weight': '700',
        'line-height': '1.14'
      }
    }
  }
};

// Description Component

export const Description = props => (
  <StyledDescription {...props}>{props.children}</StyledDescription>
);

const StyledDescription = styled.p`
  margin-bottom: ${props => props.theme.spacer.medium};
  margin-top: ${props => props.marginTop};
  ${props => props.theme.typography.description};
`;
Description.propTypes = {
  marginTop: PropTypes.number
};
Description.defaultProps = {
  marginTop: 0
};

StyledDescription.defaultProps = {
  theme: {
    typography: {
      description: {
        'font-size': '.875rem',
        'font-weight': '400',
        'line-height': '1.25'
      }
    },
    spacer: {
      medium: '1rem'
    }
  }
};

// Legales Component

export const Legales = props => (
  <StyledLegales {...props}>{props.children}</StyledLegales>
);

const StyledLegales = styled.p`
  border-bottom: 1px solid ${props => props.theme.palette.common.disabled};
  margin-bottom: ${props => props.theme.spacer.medium};
  margin-top: ${props => props.theme.spacer.xSmall};
  ${props => props.theme.typography.description};
`;
StyledLegales.defaultProps = {
  theme: {
    typography: {
      description: {
        'font-size': '.875rem',
        'font-weight': '400',
        'line-height': '1.25'
      }
    },
    palette: {
      common: {
        disabled: '#d5d8df'
      }
    },
    spacer: {
      medium: '1rem',
      xSmall: '.25rem'
    }
  }
};

// Label Component

export const Label = props => (
  <StyledLabel {...props}>{props.children}</StyledLabel>
);

const StyledLabel = styled.label`
  margin-bottom: ${props => props.theme.spacer.xSmall};
  margin-top: 20;
  ${props => props.theme.typography.label.default};
`;
StyledLabel.defaultProps = {
  theme: {
    typography: {
      label: {
        default: {
          'font-size': '1rem',
          'font-weight': '700',
          'line-height': '1.33'
        }
      }
    },
    spacer: {
      xSmall: '.25rem'
    }
  }
};

// LabelLarge Component

export const LabelLarge = props => (
  <StyledLabelLarge {...props}>{props.children}</StyledLabelLarge>
);

const StyledLabelLarge = styled.label`
  margin-bottom: ${props => props.theme.spacer.xSmall};
  ${props => props.theme.typography.label.large};
`;
StyledLabelLarge.defaultProps = {
  theme: {
    typography: {
      label: {
        large: {
          'font-size': '3rem',
          'font-weight': '400',
          'line-height': '1'
        }
      }
    },
    spacer: {
      xSmall: '.25rem'
    }
  }
};

// SecondHeadline Component

export const SecondHeadline = props => (
  <StyledSecondHeadline {...props}>{props.children}</StyledSecondHeadline>
);

const StyledSecondHeadline = styled.h2`
  margin-bottom: ${props => props.theme.spacer.small};
  margin-top: ${props => props.marginTop};
  ${props => props.theme.typography.secondHeadline};
`;

SecondHeadline.propTypes = {
  marginTop: PropTypes.number
};
SecondHeadline.defaultProps = {
  marginTop: 0
};
StyledSecondHeadline.defaultProps = {
  theme: {
    spacer: {
      small: '.5rem'
    },
    typography: {
      secondHeadline: {
        'font-size': '1.2rem',
        'font-weight': '700',
        'line-height': '1.14'
      }
    }
  }
};

// ContainerDesktop component

export const ContainerDesktop = props => (
  <StyledContainerDesktop {...props}>{props.children}</StyledContainerDesktop>
);

const StyledContainerDesktop = styled.div`
  background: linear-gradient(
    135deg,
    ${props => props.theme.palette.primary.default} 0%,
    ${props => props.theme.palette.primary.dark} 80%
  );
  display: flex;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

StyledSecondHeadline.defaultProps = {
  theme: {
    palette: {
      primary: {
        default: '#0082ff',
        dark: '#3a66ab'
      }
    }
  }
};

// Desktop component

export const Desktop = props => <StyledDesktop {...props} />;

const StyledDesktop = styled.div`
  align-items: center;
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

Desktop.propTypes = {
  img: PropTypes.string
};

// Onboarding component

export const Onboarding = props => (
  <StyledOnboarding {...props}>{props.children}</StyledOnboarding>
);

const StyledOnboarding = styled.div`
  background-color: ${props => props.theme.palette.common.bodyBg};
  overflow-y: ${props => (props.isLead ? 'hidden' : 'auto')};
  position: relative;
  width: ${props => props.theme.breakPoints.sm};
`;

Onboarding.propTypes = {
  isLead: PropTypes.bool
};
StyledOnboarding.defaultProps = {
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

// Terms component

export const Terms = props => (
  <StyledTerms {...props}>{props.children}</StyledTerms>
);

const StyledTerms = styled.div`
  border-top: 1px solid ${props => props.theme.palette.disabled};
  ${props => props.theme.typography.caption};
  padding-top: ${props => props.theme.spacer.blockSpacer};
  & > p:nth-child(1) {
    font-weight: bold;
  }
`;

StyledTerms.defaultProps = {
  theme: {
    palette: {
      disabled: '#d5d8df'
    },
    spacer: {
      blockSpacer: '1.25rem'
    },
    typography: {
      caption: {
        'font-size': '.75rem',
        'font-weight': '400',
        'line-height': '1.33'
      }
    }
  }
};

// H1 component

export const H1 = props => <StyledH1 {...props}>{props.children}</StyledH1>;

const StyledH1 = styled.h1`
  color: ${props => props.theme.palette.common.text.inverse};
  font-size: 36px;
  margin-bottom: 64px;
  margin-top: 0;
  ${props => props.theme.typography.headline};
  position: relative;
  z-index: 2;
`;

StyledH1.defaultProps = {
  theme: {
    typography: {
      headline: {
        'font-size': '1.625rem',
        'font-weight': '700',
        'line-height': '1.14'
      },
      palette: {
        common: {
          text: {
            inverse: '#ffffff'
          }
        }
      }
    }
  }
};

// SectionDescription component

export const SectionDescription = props => (
  <StyledSectionDescription {...props}>
    {props.children}
  </StyledSectionDescription>
);

const StyledSectionDescription = styled.p`
  color: ${props => props.theme.palette.common.text.inverse};
  display: inline-block;
  font-weight: normal;
  max-width: 230px;
  ${props => props.theme.typography.label.default};
  ${props =>
    props.bigger && {
      'font-size': '1.3rem',
      'margin-bottom': '50px',
      'margin-top': '-20px'
    }}
  position: relative;
  z-index: 2;
`;

SectionDescription.propTypes = {
  bigger: PropTypes.bool
};
StyledSectionDescription.defaultProps = {
  theme: {
    palette: {
      common: {
        text: {
          inverse: '#ffffff'
        }
      }
    }
  }
};

// UrlLink component

export const UrlLink = props => (
  <StyledUrlLink {...props}>{props.children}</StyledUrlLink>
);

const StyledUrlLink = styled.div`
  cursor: pointer;
  display: block;
  font-weight: 700;
  margin-top: ${props => props.theme.spacer.medium || '1rem'};
  ${props => props.theme.typography.button};
  text-align: center;
`;

StyledUrlLink.defaultProps = {
  theme: {
    typography: {
      button: {
        'font-size': '.875rem',
        'font-weight': '700',
        'line-height': '1.14'
      }
    },
    spacer: {
      medium: '1rem'
    }
  }
};

// Timer component

export const Timer = props => (
  <StyledTimer {...props}>{props.children}</StyledTimer>
);

const StyledTimer = styled.span`
  display: inline-block;
  padding-left: 0.25rem;
`;

// DesktopText component

export const DesktopText = props => (
  <StyledDesktopText {...props}>{props.children}</StyledDesktopText>
);

const StyledDesktopText = styled.div`
  color: ${props => props.theme.palette.common.inverse};
  text-align: center;
`;

StyledDesktopText.defaultProps = {
  theme: {
    palette: {
      common: {
        inverse: '#ffffff'
      }
    }
  }
};

// Bind component

export const Bind = props => <StyledBind {...props} />;

const StyledBind = styled.div`
  background: linear-gradient(to Left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
  height: 100%;
  position: absolute;
  right: 0;
  width: 3rem;
`;

// Logo component

export const Logo = props => <StyledLogo {...props} />;

const StyledLogo = styled.img`
  left: 30px;
  position: absolute;
  top: 30px;
`;

// LogoMobile component

export const LogoMobile = props => <StyledLogoMobile {...props} />;

const StyledLogoMobile = styled.img`
  margin-left: 2rem;
  margin-top: 1.5rem;
`;

// TextPromotion component

export const TextPromotion = props => (
  <StyledTextPromotion {...props}>{props.children}</StyledTextPromotion>
);

const StyledTextPromotion = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`;

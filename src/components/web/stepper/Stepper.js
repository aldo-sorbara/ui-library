import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image } from 'rebass';
import styled, { keyframes, css } from 'styled-components';

const borderfill = keyframes`
    0%   { opacity:0; }
    100% { opacity:1; }
`;

const StepperContainer = styled(Flex)`
  align-items: center;
  background-color: ${props => props.theme.palette.common.bodyBg};
  margin: ${props => props.theme.spacer.stepper.margin};
  padding: 0.5rem 0.5rem;
  position: sticky;
  top: 0;
  z-index: 1021;
`;

const Step = styled(Flex)`
  align-items: center;
  flex-basis: 100%;
  &:last-child {
    flex-basis: 0;
  }
`;

const RoundImage = styled(Image)`
  background-color: ${({ active, theme }) =>
    active ? theme.palette.primary.dark : theme.palette.primary.light};
  border: 2px solid
    ${({ active, theme }) =>
      active ? theme.palette.primary.dark : theme.palette.primary.light};
  border-radius: ${({ size }) => size}px;
  height: 1rem;
  max-width: initial;
  width: 1rem;
`;

RoundImage.defaultProps = {
  theme: {
    palette: {
      primary: {
        dark: '#3a66ab',
        light: '#73baff'
      }
    }
  }
};

const RoundCompleted = styled.div`
  background-color: ${props => props.theme.palette.primary.dark};
  border: 2px solid ${props => props.theme.palette.primary.dark};
  border-radius: 50%;
  flex: none;
  height: 0.5rem;
  transition: border 2s ease-out;
  width: 0.5rem;
`;

RoundCompleted.defaultProps = {
  theme: {
    palette: {
      primary: {
        dark: '#3a66ab'
      }
    }
  }
};

const RoundIcon = styled.div`
  animation: ${borderfill} 0.3s ease-in;
  border-radius: 50%;
  flex: none;
  height: ${({ size }) => size}px;
  ${({ active, theme }) =>
    active
      ? `
        box-shadow: 0px 0px 0px .25rem ${theme.palette.primary.dark} inset;
        width: .75rem;
        height:.75rem;
        `
      : `
        border: 2px solid ${theme.palette.primary.light};
        background-color:#fff;
        width: .5rem;
        height: .5rem

      `}
  transition: box-shadow 0.2s ease-out;
`;

RoundIcon.defaultProps = {
  theme: {
    palette: {
      primary: {
        dark: '#3a66ab',
        light: '#73baff'
      }
    }
  }
};

const lineFillAnim = keyframes`
  0%   { width:0%; }
  50% {width: 50%;}
  100% { width:100%; }
`;

const Line = styled.div`
  background-color: #ccc;
  height: 2px;
  width: 100%;
`;

const DefaultLine = styled(Line)`
  background-color: ${props => props.theme.palette.primary.light};
  margin-left: 2px;
  margin-right: 2px;
  width: 100%;
`;

DefaultLine.defaultProps = {
  theme: {
    palette: {
      primary: {
        light: '#73baff'
      }
    }
  }
};

const lineFillMixin = css`
  animation: ${lineFillAnim} 0.3s ease-out;
`;

const CompleteLine = styled(Line)`
  background-color: ${props => props.theme.palette.primary.dark};
  ${props => props.isCurrentStep && lineFillMixin}
  width: 100%;
`;

CompleteLine.defaultProps = {
  theme: {
    palette: {
      primary: {
        dark: '#3a66ab'
      }
    }
  }
};

const StepRound = ({ active, done, size, last }) => {
  if (done && !last) {
    return <RoundCompleted size={size} />;
  } else if (last) {
    return (
      <RoundImage
        active={active}
        as='img'
        src={
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6.816' height='11.341' viewBox='0 0 6.816 11.341'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M7.02-2.532A2.287,2.287,0,0,1,6.354-.876a3.291,3.291,0,0,1-1.794.9V.612a.8.8,0,0,1-.234.6.832.832,0,0,1-.606.228.832.832,0,0,1-.606-.228.8.8,0,0,1-.234-.6V.072A5.391,5.391,0,0,1,.6-.708a.816.816,0,0,1-.306-.3A.941.941,0,0,1,.2-1.452a.972.972,0,0,1,.21-.624.621.621,0,0,1,.5-.264.906.906,0,0,1,.288.048,2.153,2.153,0,0,1,.372.18,4.445,4.445,0,0,0,.984.408,3.807,3.807,0,0,0,.972.12,1.813,1.813,0,0,0,.966-.21.7.7,0,0,0,.33-.63.511.511,0,0,0-.2-.414A1.507,1.507,0,0,0,4.134-3.1q-.294-.1-.858-.24A11.565,11.565,0,0,1,1.8-3.8a2.542,2.542,0,0,1-1-.732,2.008,2.008,0,0,1-.42-1.338,2.343,2.343,0,0,1,.672-1.668,3.292,3.292,0,0,1,1.776-.936v-.6a.794.794,0,0,1,.24-.594.825.825,0,0,1,.6-.234.832.832,0,0,1,.606.228.8.8,0,0,1,.234.6v.564a5.1,5.1,0,0,1,1.944.756.882.882,0,0,1,.306.318.919.919,0,0,1,.09.426.955.955,0,0,1-.216.624.638.638,0,0,1-.5.264.8.8,0,0,1-.276-.048,3.479,3.479,0,0,1-.384-.18q-.084-.048-.372-.2a3.1,3.1,0,0,0-.618-.24,2.658,2.658,0,0,0-.7-.09,1.5,1.5,0,0,0-.876.234.73.73,0,0,0-.336.63.615.615,0,0,0,.384.576,5.877,5.877,0,0,0,1.212.384,10.117,10.117,0,0,1,1.458.432,2.43,2.43,0,0,1,.984.732A2.072,2.072,0,0,1,7.02-2.532Z' transform='translate(-0.204 9.9)'/%3E%3C/svg%3E" // eslint-disable-line
        }
        size={size * 2}
      />
    ); // eslint-disable-line
  }
  return <RoundIcon active={active} size={size} />;
};

const StepLine = ({ done, isCurrentStep }) => (
  <DefaultLine>
    {done && <CompleteLine isCurrentStep={isCurrentStep} />}
  </DefaultLine>
);

const Stepper = props => {
  const { currentStep, size = 8, steps, style } = props;

  const stepsArray = Array(steps).fill();

  return (
    <StepperContainer style={style}>
      {stepsArray.map((el, index) => {
        const params = {
          done: index <= currentStep - 2,
          active: index === currentStep - 1,
          isCurrentStep: index === currentStep - 2,
          size
        };
        return (
          <Step key={`flex-${index}`}>
            <StepRound {...params} last={index === steps - 1} />
            {index !== steps - 1 && <StepLine {...params} />}
          </Step>
        );
      })}
    </StepperContainer>
  );
};

Stepper.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number
};

Stepper.defaultProps = {
  currentStep: 1,
  style: {},
  theme: {
    spacer: {
      stepper: {
        margin: 0
      }
    }
  }
};

export default Stepper;

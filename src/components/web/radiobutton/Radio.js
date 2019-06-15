import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @render react
 * @name RadioButton
 * @description RadioButton Component for Wenance
 * @example
 * <RadioGroup name="testgroup" onChange={value => { console.log(value)}}>
 *  <RadioButton value="test1" label="test1" data="test1" />
 *  <RadioButton value="test2" label="test2" data="test2" />
 * </RadioGroup>
 */

export const RadioButton = props => {
  const { label, name, value, input, inline, selected, onChange, data } = props;
  const val = value || input.value;
  const handleChange = onChange || input.onChange;
  return (
    <RadioButtonContainer
      selected={selected}
      inline={inline}
      key={`${name}-${val}`}
    >
      <RadioButtonLabel>
        <input
          type='radio'
          value={val}
          name={name}
          onChange={e => handleChange(e.target.value)}
          checked={selected ? true : false}
          data-w={data}
        />
        <span />
        {label}
      </RadioButtonLabel>
    </RadioButtonContainer>
  );
};

RadioButton.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.object
  ]).isRequired,
  value: PropTypes.string,
  data: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  inline: PropTypes.bool,
  input: PropTypes.object
};

RadioButton.defaultProps = {
  selected: false,
  inline: false,
  input: {},
  value: null
};

export const RadioGroup = props => {
  const [inputValue, setValue] = useState('');
  const { children, name, onChange, ...rest } = props;

  const handleChange = (value, onChange) => {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <RadioGroupContainer>
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        const {
          value,
          label,
          selected,
          data,
          inline,
          ...childRest
        } = child.props;
        const Component = child.type;
        return (
          <Component
            key={`${name}-${value}`}
            value={value}
            name={name}
            label={label}
            selected={inputValue === value || selected}
            inline={inline}
            data={data}
            onChange={value => handleChange(value, onChange)}
            {...rest}
            {...childRest}
          />
        );
      })}
    </RadioGroupContainer>
  );
};

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

RadioGroup.defaultProps = {
  onChange: null
};

const RadioGroupContainer = styled.div`
  display: block;

  input {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
  }

  span {
    background-color: ${props => props.theme.palette.common.text.inverse};
    border: 1px solid ${props => props.theme.palette.primary.default};
    border-radius: 50%;
    height: 1rem;
    position: absolute;
    top: 1.125rem; /* 9/8 module */
    transition: border-color, background-color 0.2s ease-in-out;
    width: 1rem;
  }

  input:checked ~ span {
    background-color: ${props => props.theme.palette.primary.default};
    border-color: ${props => props.theme.palette.primary.default};
  }

  input:checked ~ span:after {
    display: block;
  }
`;

RadioGroupContainer.defaultProps = {
  theme: {
    palette: {
      common: {
        text: {
          inverse: '#ffffff'
        }
      },
      primary: {
        default: '#0082ff'
      }
    },
    spacer: {
      medium: '1rem'
    }
  }
};

const RadioButtonLabel = styled.label`
  color: inherit;
  display: block;
  ${props => props.theme.typography.checkbox};
  padding: ${props => props.theme.spacer.radio.itemInner};
`;

RadioButtonLabel.defaultProps = {
  theme: {
    typography: {
      checkbox: {
        'font-size': '1rem',
        'font-weight': '400',
        'line-height': '1.5'
      }
    },
    spacer: {
      radio: {
        itemInner: '1rem 1rem 1rem 2.5rem'
      }
    }
  }
};

const RadioButtonContainer = styled.div`
  background-color: ${props => props.theme.palette.common.text.inverse};
  border: ${props =>
    props.selected
      ? `1px solid ${props.theme.palette.secondary.default}`
      : '1px solid rgba(29, 44, 81, 0.15)'};
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  margin-bottom: ${props => props.theme.spacer.radio.itemSpacer};
  margin-right: ${props => (props.inline ? '0.5rem' : '0')};
  ${props =>
    props.selected &&
    `
    box-shadow: 0 3px 14px 0 rgba(21, 67, 118, 0.12);
  `};
  ${props => props.theme.radioButton};
  position: relative;
  transition: border-color, background-color 0.2s ease-in-out;
`;

RadioButtonContainer.defaultProps = {
  theme: {
    palette: {
      secondary: '#C346F9',
      inverse: '#FFFFFF'
    },
    spacer: {
      radio: {
        itemSpacer: '.5rem'
      }
    },
    radioButton: {
      span: {
        left: '1rem'
      },
      label: {
        padding: '1rem 1rem 1rem 2.5rem'
      }
    }
  }
};

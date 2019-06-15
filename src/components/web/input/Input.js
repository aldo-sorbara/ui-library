/* stylelint-disable order/properties-alphabetical-order */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const suggestions = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];
export const Input = props => {
  const [suggestion, setSuggestion] = useState(false);
  const [value, setValue] = useState();

  const {
    meta: { error, valid, touched },
    label,
    placeholder,
    descriptionTop,
    descriptionBottom,
    description,
    size,
    input,
    onChange,
    prefix,
    type,
    callback,
    data,
    handleValueChange
  } = props;

  /* istanbul ignore next */

  const handleChange = e => {
    if (handleValueChange) {
      e.target.value = handleValueChange(e.target.value);
    }
    if (onChange) {
      onChange(e);
    } else {
      input.onChange && input.onChange(e);
    }
    setValue(value);
  };
  /* istanbul ignore next */

  const handleClick = suggestion => {
    const suggestValue = `${value.split('@')[0]}@${suggestion}`;
    setValue(suggestValue);
    setSuggestion(false);
    callback && callback(suggestValue);
  };
  /* istanbul ignore next */

  const getSuggester = () => (
    <SuggestionContainer>
      {suggestions.map((suggestion, i) => (
        <Item
          onClick={() => handleClick(suggestion)}
          key={`${suggestion}-${i}`}
        >{`@${suggestion}`}</Item>
      ))}
    </SuggestionContainer>
  );

  /* istanbul ignore next */

  const handleKeyPress = e => {
    const inputValue = e.target.value.split('@')[1];
    setValue(e.target.value);
    switch (type) {
      case 'email':
        if (e.which === 50) {
          setSuggestion(true);
        } else {
          const isIncluded = suggestions.filter(suggestion =>
            suggestion.startsWith(inputValue)
          );
          !isIncluded.length ? setSuggestion(false) : setSuggestion(true);
        }
        break;
      default:
        return;
    }
  };
  return (
    <InputContainer>
      {(label || descriptionTop) && (
        <InputLabel>
          {label} {descriptionTop && getDescription(description)}
        </InputLabel>
      )}
      <InputBlock size={size}>
        {prefix && <Prefix size={size}>{prefix}</Prefix>}

        <InputText
          data-w={data}
          size={size}
          {...props}
          {...props.input}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {suggestion && getSuggester()}
        <InputStatus size={size} {...props.meta} />

        <InputBorder {...props} />
      </InputBlock>

      {!valid && touched ? (
        <InputError>{error || description}</InputError>
      ) : (
        descriptionBottom && getDescription(description)
      )}
    </InputContainer>
  );
};

Input.defaultProps = {
  meta: {
    error: null,
    visited: false,
    dirty: false,
    active: false,
    valid: false,
    touched: false
  },
  input: {},
  onChange: null,
  prefix: null,
  size: 'default',
  descriptionTop: false,
  descriptionBottom: false,
  label: null
};

Input.propTypes = {
  meta: PropTypes.object,
  size: PropTypes.string,
  input: PropTypes.object,
  onChange: PropTypes.func,
  handleValueChange: PropTypes.func,
  callback: PropTypes.func,
  descriptionTop: PropTypes.bool,
  descriptionBottom: PropTypes.bool,
  description: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  data: PropTypes.string.isRequired
};

const getDescription = description => (
  <div>
    <InputDescription>{description}</InputDescription>
  </div>
);

const Icon = props => {
  const { dirty, valid } = props;
  if (dirty) {
    if (valid) {
      return IconSuccess;
    }
    return IconError;
  }
  return null;
};

const IconSuccess = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path d='M0 0h24v24H0z' fill='none' />
    <path
      fill='#55AE07'
      d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'
    />
  </svg>
);

const IconError = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path
      fill='#d0021b'
      d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
    />
    <path d='M0 0h24v24H0z' fill='none' />
  </svg>
);

const InputStatus = props => {
  const { size } = props;
  return (
    <IconContainer size={size}>
      <Icon {...props} />
    </IconContainer>
  );
};

const setInputBorderColor = props => {
  const { active, dirty, visited, error } = props.meta;
  const { secondary, error: errorColor, success, common } = props.theme.palette;

  if (active) {
    return secondary.default;
  } else if (visited && dirty) {
    if (error) {
      return errorColor.default;
    } else {
      return success.default;
    }
  } else {
    return common.text.default;
  }
};

const InputContainer = styled.div`
  width: 100%;
`;

const SuggestionContainer = styled.div`
  background: white;
  border-style: solid;
  border-width: 0 1px 1px 1px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  max-height: 20rem;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  transition: opacity 0.1s ease;
  top: 2rem;
  width: 100%;
  z-index: 9999;
`;

/* istanbul ignore next */

const Item = styled.div`
  background: white;
  border-top: none;
  box-shadow: none;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  height: auto;
  line-height: 1;
  ${props => props.theme.typography.label.default};
  padding: 0.75rem 1rem;
  position: relative;
  text-align: left;
  text-transform: none;
  white-space: normal;
  word-wrap: normal;
  &:hover {
    background: ${props => props.theme.palette.secondary.light};
  }
`;

Item.defaultProps = {
  theme: {
    typography: {
      label: {
        default: {
          fontSize: '1rem',
          fontWeight: '700',
          lineHeight: '1.33'
        }
      }
    },
    palette: {
      secondary: {
        light: 'inherit'
      }
    }
  }
};

const Prefix = styled.span`
  ${props =>
    props.theme.typography.label[props.size] ||
    props.theme.typography.label.default};
  align-items: center;
  display: flex;
  font-size: inherit;
  font-weight: normal;
  padding-right: ${props => props.theme.spacer.xSmall};
  text-align: center;
  white-space: nowrap;
`;

const InputText = styled.input`
  ${props =>
    props.theme.typography.label[props.size] ||
    props.theme.typography.label.default};
  border: 0;
  flex: 1 1 auto;
  font-size: inherit;
  font-weight: normal;
  width: 1%;

  &:focus {
    ~ div {
      background-color: ${props => props.theme.palette.secondary.default};
      opacity: 1;
    }
    outline: none;
  }

  /* Change Autocomplete styles in Chrome */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: transparent !important;
    -webkit-box-shadow: none !important;
    -webkit-text-fill-color: #000;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: ${props => props.theme.palette.common.disabled};
  }
`;

export const InputLabel = styled.label`
  display: block;
  line-height: 1;
  ${props => props.theme.typography.label.default};
  font-weight: 700;
  padding-bottom: ${props => props.theme.spacer.xSmall};
`;

export const InputDescription = styled.p`
  display: inline-block;
  line-height: 1;
  margin-bottom: 0;
  ${props => props.theme.typography.caption};
  font-size: 0.75rem;
  padding-top: 4px;
`;

const InputError = styled.p`
  color: ${props => props.theme.palette.error.default};
  display: inline-block;
  line-height: 1;
  margin-bottom: 0;
  ${props => props.theme.typography.description};
  font-size: 0.75rem;
`;

const InputBlock = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  font-size: ${props =>
    props.theme.typography.input[props.size]
      ? props.theme.typography.input[props.size]['font-size']
      : props.theme.typography.input.default['font-size']};
  font-weight: 300;
  margin-bottom: ${props => props.theme.spacer.xSmall};
  ${props =>
    props.theme.spacer.input[props.size] || props.theme.spacer.input.default}
  position: relative;
  width: 100%;
`;
const InputBorder = styled.div`
  background-color: ${props => setInputBorderColor(props)};
  opacity: ${props =>
    setInputBorderColor(props) === props.theme.palette.common.text.default &&
    !props.meta.active
      ? 0.2
      : 1};
  bottom: 0;
  display: block;
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
  transition: background-color 0.2s ease-out;
  width: 100%;
`;

const IconContainer = styled.span`
  align-items: center;
  display: flex;
  font-size: inherit;
  ${props =>
    props.theme.typography.label[props.size] ||
    props.theme.typography.label.default};
  white-space: nowrap;
  & > svg {
    display: block;
    height: ${props =>
      props.theme.typography.input[props.size]
        ? props.theme.typography.input[props.size].iconSize
        : props.theme.typography.input.default.iconSize};
    width: ${props =>
      props.theme.typography.input[props.size]
        ? props.theme.typography.input[props.size].iconSize
        : props.theme.typography.input.default.iconSize};
  }
`;

export default Input;

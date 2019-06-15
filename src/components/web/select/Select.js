import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Downshift from 'downshift';
import Input from '@bit/wenance.common-ui.web.input';
import { Transition } from 'react-spring/renderprops.cjs.js';

const IconArrowDown = ({ isOpen }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    transform={isOpen ? 'rotate(180)' : null}
    viewBox='2 2 20 20'
  >
    <path
      fill='#979797'
      d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'
    />
    <path fill='none' d='M0 0h24v24H0V0z' />
  </svg>
);

/* istanbul ignore next */
const IconClear = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path
      fill='#979797'
      d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
    />
    <path fill='none' d='M0 0h24v24H0z' />
  </svg>
);

const getSelectValue = (defaultValue, selectedItem) => {
  if (defaultValue) {
    return defaultValue;
  } else {
    /* istanbul ignore next */
    return selectedItem ? selectedItem.value : '';
  }
}; // it cannot be fully tested
/* istanbul ignore next */
const Select = props => {
  const items = props.options;
  const input = props.input || {
    value: { value: '', label: '' }
  };

  const inputControlledValue =
    props.input &&
    props.input.value &&
    (!props.input.value.label
      ? (items.find(x => x.value === props.input.value.value) || {}).label
      : props.input.value.label);

  const menuRef = useRef();
  const [hasSpaceInBottom, setHasSpaceInBottom] = useState(true);
  const [value, setInputValue] = useState(inputControlledValue || '');

  const getElementHeight = () => {
    const el = menuRef.current;
    if (el) {
      setHasSpaceInBottom(
        !(window.innerHeight - el.getBoundingClientRect().bottom < 320)
      );
    }
  };

  const handleClearSelection = clearFn => {
    setInputValue('');
    clearFn();
  };

  return (
    <SelectContainer>
      <Downshift
        {...props.input}
        defaultInputValue={getSelectValue(inputControlledValue)}
        onSelect={() => props.input && props.input.onBlur()}
        onClick={() => props.input && props.input.onFocus()}
        onInputValueChange={value => {
          setInputValue(value);
        }}
        itemToString={i => (i ? i.label : '')}
        onChange={value => {
          props.input && props.input.onChange(value);
          props.onChange && props.onChange(value);
        }}
      >
        {({
          highlightedIndex,
          isOpen,
          clearSelection,
          inputValue,
          selectedItem,
          getToggleButtonProps,
          getInputProps,
          getItemProps,
          openMenu
        }) => (
          <div>
            <SelectBlock>
              <Input
                data={props.input ? props.input.name : 'select'}
                label={props.label}
                {...input}
                {...getInputProps({
                  onFocus: openMenu,
                  isOpen,
                  placeholder: props.placeholder,
                  'data-testid': 'semantic-ui-input',
                  value
                })}
              />
              {inputValue ? (
                <ControlButton
                  onClick={() => handleClearSelection(clearSelection)}
                  aria-label='Clear selection'
                  data-testid='semantic-ui-clear-button'
                >
                  <IconClear />
                </ControlButton>
              ) : (
                <ControlButton
                  {...getToggleButtonProps({
                    'data-testid': 'semantic-ui-toggle-button'
                  })}
                  disabled={props.disabled}
                  onClick={e => {
                    !isOpen && getElementHeight();
                    getToggleButtonProps().onClick(e);
                    props.input && props.input.onFocus();
                  }}
                >
                  <IconArrowDown isOpen={props.isOpen || isOpen} />
                </ControlButton>
              )}

              <div className='select-block--underline' />
            </SelectBlock>
            <Transition
              unique
              reset
              items={isOpen}
              from={{
                opacity: 0,
                height: 0,
                transform: 'translateY(0%)'
              }}
              enter={{
                opacity: 1,
                height: 'auto',
                transform: hasSpaceInBottom
                  ? 'translateY(0%)'
                  : 'translateY(-100%)'
              }}
              leave={{
                opacity: 0,
                height: 0
              }}
            >
              {item =>
                item &&
                (props => (
                  <Menu
                    style={props}
                    ref={menuRef}
                    borderTop={!hasSpaceInBottom}
                  >
                    {(inputValue
                      ? items
                          .filter(x =>
                            x.label
                              .toLowerCase()
                              .includes(inputValue.toLowerCase())
                          )
                          .reduce(function(prev, current) {
                            if (
                              prev.findIndex(
                                anItem => anItem.value === current.value
                              ) === -1
                            ) {
                              prev.push(current);
                            }
                            return prev;
                          }, [])
                      : items
                    ).map((item, index) => (
                      <Item
                        key={index}
                        data-w={item.label}
                        disabled={item.value === '-'}
                        {...getItemProps({
                          item,
                          'data-testid': `downshift-item-${index}`,
                          isActive: highlightedIndex === index,
                          isSelected: selectedItem === item
                        })}
                      >
                        {item.value !== '-' && item.label}
                      </Item>
                    ))}
                  </Menu>
                ))
              }
            </Transition>
          </div>
        )}
      </Downshift>
    </SelectContainer>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

const SelectContainer = styled.div`
  position: relative;
`;

const Item = styled.div`
  background: ${props =>
    /* istanbul ignore next */
    props.isActive ? props.theme.palette.secondary.light : 'inherit'};
  border-bottom: 1px solid
    ${props => (props.disabled ? props.theme.palette.disabled : 'transparent')};

  box-shadow: none;
  color: ${props =>
    props.isActive || props.isSelected ? 'rgba(0,0,0,.95)' : 'rgba(0,0,0,.87)'};
  cursor: pointer;
  display: block;
  font-size: 1rem;
  height: ${props => (props.disabled ? '1px' : 'auto')};
  line-height: 1;
  ${props => props.theme.typography.label.default};
  padding: ${props => (props.disabled ? '0' : '.75rem 1rem')};
  position: relative;
  text-align: left;
  text-transform: none;
  white-space: normal;
  word-wrap: normal;
`;

const ControlButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  bottom: 0.25rem;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  height: 1.875rem;
  margin-left: 0.75rem;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  padding-bottom: ${props => props.theme.spacer.xSmall};
  padding-left: ${props => props.theme.spacer.xSmall};
  padding-right: ${props => props.theme.spacer.xSmall};
  padding-top: ${props => props.theme.spacer.xSmall};
  pointer-events: ${props => (props.disabled ? 'none' : 'initial')};
  position: absolute;
  right: 0;
  white-space: nowrap;
  width: 1.875rem;

  &:focus {
    outline: none;
  }

  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

ControlButton.defaultProps = {
  theme: {
    spacer: {
      xSmall: '.25rem'
    }
  }
};

const Menu = styled.div`
  background: white;
  border-color: ${props =>
      /* istanbul ignore next */
      props.borderTop ? props.theme.palette.secondary.default : 'transparent'}
    ${props => props.theme.palette.secondary.default};
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  max-height: 20rem;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  transition: opacity 0.1s ease;
  width: 100%;
  z-index: 1;
`;

Menu.defaultProps = {
  theme: {
    palette: {
      secondary: {
        default: '#c346f9'
      }
    }
  }
};

const SelectBlock = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  input + span {
    display: none;
  }
`;

export default Select;

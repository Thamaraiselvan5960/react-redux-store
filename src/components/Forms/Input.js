import React from 'react';
import { styled } from 'styled-components';


const TextInput = styled.input`
	outline: none;
	border: 1px solid #c2cde3;
	padding: ${props => props.padding};
  width: ${props => props.width};
  font-size: 1rem;
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}


	&:hover {
    border-color: #a8a9b5;
  }

  &:focus {
    border:1px solid black;
	outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #d2d8e9;
    color: #a8a9b5;
  }

  &::placeholder {
    /* Set the placeholder style here */
    color: #a4a5b2;
    font-size: 16px;
  }
`;

export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  width = '100%',
  padding = '1rem',
  marginBottom = null,
  ...props
}) => {

  return (
    <>
      <TextInput
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        width={width}
        padding={padding}
        marginBottom={marginBottom}
        {...props}
      />
    </>
  )
}

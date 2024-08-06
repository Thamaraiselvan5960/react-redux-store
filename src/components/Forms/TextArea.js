import React from 'react';
import { styled } from 'styled-components';

const TextAreaComponent = styled.textarea`
  outline: none;
  border: 1px solid #c2cde3;
  padding: ${props => props.padding};
  width: ${props => props.width};
  font-size: 1rem;
  resize: vertical;

  &:hover {
    border-color: #a8a9b5;
  }

  &:focus {
    border: 1px solid black;
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

export const TextArea = ({
	placeholder,
	value = '',
	onChange = () => { },
	required = false,
	disabled = false,
	width = '100%',
	padding = '1rem',
	rows = 5,
	...props
}) => {
	return (
		<>
			<TextAreaComponent
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				value={value}
				onChange={onChange}
				width={width}
				padding={padding}
				rows={rows}
				{...props}
			/>
		</>
	);
};
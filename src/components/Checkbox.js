import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  margin: 0 10px;
  width: 18px;
  height: 18px;
`;

const CheckboxText = styled.span`
  color: ${props => props.checked ? '#000' : '#666'};
`;

export const Checkbox = ({ value, onChange, checked }) => {
	return (
		<CheckboxContainer>
			<CheckboxInput
				type="checkbox"
				value={value}
				onChange={onChange}
				checked={checked}
			/>
			<CheckboxText checked={checked}>{value}</CheckboxText>
		</CheckboxContainer>
	);
};


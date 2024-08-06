import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { styled } from 'styled-components';
import { Typography } from '@material-ui/core';

const RangeFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px auto;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const FieldContainerRow = styled(FieldContainer)`
	flex-direction: row;
`;

const FieldInput = styled(Field)`
  width: ${props => props.width};
  height: 30px;
  margin: 0 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMessageContainer = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const RangeFilter = ({
	label,
	minPlaceholder,
	maxPlaceholder,
	name,
	width = '100%',
}) => {
	return (
		<RangeFilterContainer>
			<Typography variant="subtitle1">{label}:</Typography>
			<FieldContainerRow>

				<FieldContainer>
					<Label>Minimum</Label>
					<FieldInput type="number" name={`${name}.min`} placeholder={minPlaceholder} width={width} />
					<ErrorMessageContainer>
						<ErrorMessage name={`${name}.min`} />
					</ErrorMessageContainer>
				</FieldContainer>
				<FieldContainer>
					<Label>Maximum</Label>
					<FieldInput type="number" name={`${name}.max`} placeholder={maxPlaceholder} width={width} />
					<ErrorMessageContainer>
						<ErrorMessage name={`${name}.max`} />
					</ErrorMessageContainer>
				</FieldContainer>
			</FieldContainerRow>
		</RangeFilterContainer>
	);
};
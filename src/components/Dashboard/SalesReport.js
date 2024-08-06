import React from 'react';
import { styled } from 'styled-components';
import { AreaChart } from '../Charts/AreaChart';

const ChartContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-content: center;
`;

export const SalesReport = () => {
	return (
		<ChartContainer>
			<AreaChart />
		</ChartContainer>
	)
}

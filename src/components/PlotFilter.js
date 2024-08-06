import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Slider, TextField, Button, Card, Typography } from '@mui/material';

const FilterWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const RateFilter = styled(Card)`
  margin-bottom: 20px;
  padding: 1rem;
  `;

const SquareFeetFilter = styled(Card)`
  padding: 1rem;
  margin-bottom: 20px;
`;

const FilterButton = styled(Button)`
  margin-top: 20px;
`;

export const PlotFilter = () => {
	const [rateMin, setRateMin] = useState(0);
	const [rateMax, setRateMax] = useState(10000);
	const [squareFeetMin, setSquareFeetMin] = useState(0);
	const [squareFeetMax, setSquareFeetMax] = useState(5000);

	const handleRateChange = (event, newValue) => {
		setRateMin(newValue[0]);
		setRateMax(newValue[1]);
	};

	const handleSquareFeetChange = (event, newValue) => {
		setSquareFeetMin(newValue[0]);
		setSquareFeetMax(newValue[1]);
	};

	const handleFilter = () => {
		// Filter the plots based on the selected rate and square feet range
		const filteredPlots = siteDetails.filter((plot) => {
			return (
				plot.rate >= rateMin &&
				plot.rate <= rateMax &&
				plot.siteArea >= squareFeetMin &&
				plot.siteArea <= squareFeetMax
			);
		});
		// Update the state with the filtered plots
		// ...
	};

	return (
		<FilterWrapper>
			<RateFilter variant='outlined'>
				<Typography variant="h6">Rate Filter</Typography>
				<Slider
					value={[rateMin, rateMax]}
					onChange={handleRateChange}
					min={0}
					max={10000}
					step={100}
				/>
				<Typography variant="body1">
					Min: ₹{rateMin} - Max: ₹{rateMax}
				</Typography>
			</RateFilter>
			<SquareFeetFilter variant='outlined'>
				<Typography variant="h6">Square Feet Filter</Typography>
				<Slider
					value={[squareFeetMin, squareFeetMax]}
					onChange={handleSquareFeetChange}
					min={0}
					max={5000}
					step={100}
				/>
				<Typography variant="body1">
					Min: {squareFeetMin} sqft - Max: {squareFeetMax} sqft
				</Typography>
			</SquareFeetFilter>
			<FilterButton variant="contained" color="primary" onClick={handleFilter}>
				Apply Filter
			</FilterButton>
		</FilterWrapper >
	);
};
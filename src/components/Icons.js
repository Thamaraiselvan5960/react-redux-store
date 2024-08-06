import React from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import Box from '@mui/material/Box';

import { styled } from 'styled-components';

const RaisedContainer = styled.div`
	-webkit-border-radius: 14px;
	border-radius: 14px;
	background: #fff;
	-webkit-box-shadow: 5px 5px 11px #bac0d2, -5px -5px 11px #e8f0ff;
	box-shadow: 5px 5px 11px #bac0d2, -5px -5px 11px #e8f0ff;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
`;


export const UpActivityIcon = () => {
	return (
		<RaisedContainer>
			<NorthEastIcon style={{ color: 'green' }} />
		</RaisedContainer>
	);
};

export const DownActivityIcon = () => {
	return (
		<RaisedContainer>
			<SouthEastIcon style={{ color: 'red' }} />
		</RaisedContainer>
	);
};

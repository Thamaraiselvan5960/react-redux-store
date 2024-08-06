import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { DownActivityIcon, UpActivityIcon } from "../Icons";
import { styled } from 'styled-components'


const StyledCard = styled(Card)`
	box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;


export const ResponsiveCard = ({ heading, subHeading, progress, is_raised }) => {
	return (
		<StyledCard style={{ width: "250px", height: "auto", margin: "10px" }}>
			<CardContent style={{ display: 'flex', gap: '1rem' }}>
				<div style={{ width: '160px' }}>
					<Typography variant="h6">{heading}</Typography>
					<Typography variant="subtitle1">{subHeading}</Typography>
				</div>
				<div>
					{
						is_raised ?
							<UpActivityIcon /> :
							<DownActivityIcon />

					}
					<CircularProgressbar
						value={progress}
						text={`${progress}%`}
						strokeWidth={5}
						styles={buildStyles({ pathTransition: "none" })}
					/>
				</div>
			</CardContent>
		</StyledCard>
	);
};


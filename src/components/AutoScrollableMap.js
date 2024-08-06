import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const maps = [
	{
		label: 'Fairfield by Marriott Coimbatore',
		iframeSrc:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.547207159789!2d77.04493215!3d11.028361299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857bee13b3c7d%3A0xc2d91f665fe30b89!2sFairfield%20by%20Marriott%20Coimbatore!5e0!3m2!1sen!2sin!4v1721741536393!5m2!1sen!2sin',
	},
	{
		label: 'VM STORES',
		iframeSrc:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.547207159789!2d77.04493215!3d11.028361299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8570063b9008d%3A0x2e8adfac5afbec98!2sVM%20STORES!5e0!3m2!1sen!2sin!4v1721741585621!5m2!1sen!2sin',
	},
];

export const AutoScrollableMap = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = maps.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<Card sx={{ width: '100%', flexGrow: 1, padding: '10px' }}>
			<Paper
				square
				elevation={0}
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: 50,
					pl: 2,
					bgcolor: 'background.default',
				}}
			>
				<Typography>{maps[activeStep].label}</Typography>
			</Paper>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{maps.map((map, index) => (
					<div key={map.label}>
						{Math.abs(activeStep - index) <= 2 ? (
							<iframe
								src={map.iframeSrc}
								width="100%"
								height="450"
								style={{ border: 0, borderRadius: '3px' }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button
						size="small"
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
					>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
		</Card>
	);
}
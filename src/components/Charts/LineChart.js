import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const styles = {
	dial: {
		display: "inline-block",
		width: `100%`,
		height: `auto%`,
		color: "#000",
		border: "0.5px solid #fff",
		padding: "2px",
	},
	title: {
		fontSize: "1em",
		color: "#000",
	},
};

export const LineChart = () => {
	const options = {
		animationEnabled: true,
		height: 130,
		// width: 180,
		// exportEnabled: true,
		theme: "light2", // "light1", "dark1", "dark2"
		title: {
			// text: "Bounce Rate by Week of Year"
		},
		axisY: {
			title: "Bounce Rate",
			suffix: "%"
		},
		axisX: {
			title: "Week of Year",
			prefix: "W",
			interval: 2
		},
		data: [{
			type: "line",
			toolTipContent: "Week {x}: {y}%",
			dataPoints: [
				{ x: 1, y: 10 },
				{ x: 2, y: 61 },
				{ x: 3, y: 64 },
				{ x: 4, y: 62 },
				{ x: 5, y: 64 },
			]
		}]
	}
	return (
		<div style={styles.dial}>
			<CanvasJSChart options={options} />
		</div>
	)
}

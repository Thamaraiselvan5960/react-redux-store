import React from "react";
import GaugeChart from "react-gauge-chart";

const styles = {
	dial: {
		display: "inline-block",
		width: `100%`,
		height: `140px`,
		color: "#000",
		border: "0.5px solid #fff",
		padding: "2px",
	},
	title: {
		fontSize: "1em",
		color: "#000",
	},
};

export const AccelDial = ({ id, value, title }) => {
	let percent = value / 100;
	// value: "-50" -> percent: 0
	// value: "0" ---> percent: .5
	// value: "50" ---> percent: 1
	// -25 ... .5 + (-25/100) = .25
	// 25 ...  .5 + (25/100) = .75
	// -110 .. .5 + (-110/100) = -0.6

	return (
		<div style={styles.dial}>
			<GaugeChart
				id={id}
				nrOfLevels={3}
				arcsLength={[0.5, 0.2]}
				colors={["#2d74da", "#1f57a4", "#25467a"]}
				arcPadding={0.02}
				percent={percent}
				textColor={"#000000"}
				needleColor={"#5392ff"}
				formatTextValue={(value) => value}
			/>
			<div style={styles.title}>{title}</div>
		</div>
	);
};


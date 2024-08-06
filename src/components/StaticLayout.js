import { Divider } from "@material-ui/core";
import React from "react";
import { styled } from "styled-components";
import EastIcon from '@mui/icons-material/East';
import { AccelDial } from "./AccessDial";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { LineChart } from "./Charts/LineChart";

const FlexLayout = styled.div`
  display: flex;
  flex-wrap:wrap;
  gap: 10px;
  padding: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const FlexItem = styled.div`
  flex: 1 1 100%; /* Default to 50% width on mobile devices */
  height: auto;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  @media (min-width: 768px) { /* Show two cards on tablets and larger devices */
    flex: 0 0 48%;
  }

  @media (min-width: 1024px) { /* Show two cards on tablets and larger devices */
    flex: 0 0 24%;
  }
`;

export const StaticLayout = () => {
	return (
		<FlexLayout>
			<FlexItem>
				<FlexLayout style={{ backgroundColor: '#fff' }}>
					<div style={{ width: '30%' }}>
						<h4>Bookings</h4>
						<div>
							<span>30/100</span>
						</div>
					</div>
					<div style={{ width: '60%' }}>
						<AccelDial id="dial4" value={20} />

					</div>
				</FlexLayout>
				<Divider />
				<div>
					<FlexLayout>
						<FlexLayout> <SouthEastIcon style={{ color: 'red' }} />18% Last week</FlexLayout>
						<FlexLayout>show more<EastIcon /></FlexLayout>
					</FlexLayout>
				</div>
			</FlexItem>
			<FlexItem>
				<FlexLayout style={{ backgroundColor: '#fff' }}>
					<div style={{ width: '30%' }}>
						<h4>Queries Received</h4>
						<div>
							<span>30/100</span>
						</div>
					</div>
					<div style={{ width: '60%' }}>
						<LineChart />

					</div>
				</FlexLayout>
				<Divider />

				<div>
					<FlexLayout>
						<FlexLayout> <SouthEastIcon style={{ color: 'red' }} />18% Last week</FlexLayout>
						<FlexLayout>show more<EastIcon /></FlexLayout>
					</FlexLayout>
				</div>
			</FlexItem>
			<FlexItem>
				<FlexLayout style={{ backgroundColor: '#fff' }}>
					<div style={{ width: '30%' }}>
						<h4>Site visits</h4>
						<div>
							<span>30/100</span>
						</div>
					</div>
					<div style={{ width: '60%' }}>
						<LineChart />

					</div>
				</FlexLayout>
				<Divider />

				<div>
					<FlexLayout>
						<FlexLayout> <SouthEastIcon style={{ color: 'red' }} />18% Last week</FlexLayout>
						<FlexLayout>show more<EastIcon /></FlexLayout>
					</FlexLayout>
				</div>
			</FlexItem>
			<FlexItem>
				<FlexLayout style={{ backgroundColor: '#fff' }}>
					<div style={{ width: '30%' }}>
						<h4>New visitors</h4>
						<div>
							<span>30/100</span>
						</div>
					</div>
					<div style={{ width: '60%' }}>
						<LineChart />

					</div>
				</FlexLayout>
				<Divider />

				<div>
					<FlexLayout>
						<FlexLayout> <SouthEastIcon style={{ color: 'red' }} />18% Last week</FlexLayout>
						<FlexLayout>show more<EastIcon /></FlexLayout>
					</FlexLayout>
				</div>
			</FlexItem>

		</FlexLayout >
	);
};

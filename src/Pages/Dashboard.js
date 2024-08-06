import React, { useEffect, useState } from 'react';
import { AgGridTable, AutoScrollableCard, AutoScrollableMap } from '../components';
import { ResponsiveCard } from '../components/Dashboard/Cards';
import { DownActivityIcon, UpActivityIcon } from '../components/Icons';
import toast from 'react-hot-toast';
import { notifier } from '../store/utils/toastNotifier';
import { GoogleLogoutButton, GoogleOAuth, OneTabGoogleSignin } from '../components/Oauth/GoogleOAuth';
import { StaticLayout } from '../components/StaticLayout';
import { styled } from 'styled-components';
import { SalesReport } from '../components/Dashboard/SalesReport';
import { SiteListView } from './SiteList';

const FlexLayout = styled.div`
	display: flex;
	flex-wrap:wrap;
	padding: 10px; 
	gap: 10px;
`;

const SalesWrapper = styled.div`
	flex: 1 1 100%;
	
	box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
	@media (min-width: 768px) { /* Show two cards on tablets and larger devices */
    flex: 1 1 58.99%;
	padding: 1rem;
	background-color: #fff;
  }
`;

const MapWrapper = styled.div`

	flex: 1 1 100%;
	@media (min-width: 768px) {
		flex: 1 1 40%;
		
	}
`;

const MostVisitedPlotsWrapper = styled.div`

	flex: 1 1 100%;
	@media (min-width: 768px) {
		flex: 1 1 49%;
		
	}
`;

const BookedVisitsWrapper = styled.div`

	flex: 1 1 100%;
	@media (min-width: 768px) {
		flex: 1 1 49%;
		
	}
`;



export const Dashboard = () => {
	const [username, setUsername] = useState('');

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const cardData = [
		{
			heading: "Total Properties",
			subHeading: "320",
			progress: 50,
		},
		{
			heading: "Properties Sold",
			subHeading: "100",
			progress: 75,
		},
		{
			heading: "Booked Visits",
			subHeading: "20",
			progress: 25,
		},
		{
			heading: "Card 4",
			subHeading: "Subheading 4",
			progress: 100,
		},
	];

	const showToast = () => {
		notifier('Login done successfully', 'success');
	}

	return (
		<div>
			{/* <GoogleOAuth />
			<GoogleLogoutButton /> */}

			{/* <AutoScrollableCard /> */}
			{/* <div style={{ display: "flex", flexWrap: "wrap" }}>
				{cardData.map((card, index) => (
					<ResponsiveCard
						key={index}
						heading={card.heading}
						subHeading={card.subHeading}
						progress={card.progress}
						is_raised={index % 2 === 0}
					/>
				))}
			</div> */}

			{/* <button onClick={showToast}>toast</button> */}

			{/* 
			<AgGridTable /> */}
			<StaticLayout />
			<FlexLayout>
				<SalesWrapper>
					<h1>Sales Report</h1>
					<SalesReport />
				</SalesWrapper>
				<MapWrapper>
					<AutoScrollableMap />
				</MapWrapper>
			</FlexLayout>
			<FlexLayout>
				<MostVisitedPlotsWrapper>

				</MostVisitedPlotsWrapper>
				<BookedVisitsWrapper>
					<AgGridTable />
				</BookedVisitsWrapper>
			</FlexLayout>
		</div>
	)
}

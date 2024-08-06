import React, { useState } from 'react';
import { styled, css } from 'styled-components';
import { BuyFilters, Checkbox, RangeFilter, TabMenu } from '../components';
import { Divider, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { SiteCard } from '../components/SiteCard';
import { Link } from 'react-router-dom';

const SIDE_FILTER_WIDTH = '350px';

const Container = styled.div`
	display: flex;
	height: 100%;
	width: ${props => props.width};
	margin: 0 auto;
`;

const SiteFilter = styled.div`
width: ${SIDE_FILTER_WIDTH};
// background-color: gray;
height: 100 %;
overflow - y: auto;
`;

const SiteDetails = styled.div`
width: calc(100% - ${SIDE_FILTER_WIDTH});
// background-color: pink;
height: 100 %;
overflow - y: auto;
`;




export const SiteList = ({ children, ...props }) => {

	const tabs = [
		{
			label: 'Buy', content: <BuyFilters />
		},
		{ label: 'Sell', content: <>Hai1</> },
		{ label: 'Rent', content: <>Hai2</> },
	];

	return (
		<Container width={props.width}>
			<SiteFilter>
				<TabMenu tabs={tabs} />
			</SiteFilter>
			<SiteDetails>
				{children}
			</SiteDetails>
		</Container>
	)
}

const siteInfo = [
	{
		address: 'Balaji Nagar, Tamil Nadu Others',
		plot_type: 'Residential land / Plot in Balaji Nagar, Others',
		rate: '₹75 Lac',
		rate_per_sq: '₹2,521 /sqft',
		size: '2,975 sqft',
		land_type: 'Plot Area',
		category: 'Plot/Land',
		clearence: 'Ready to move',
		description: 'Coimbatore corporation.Limit.Dtcp approved. Municipal water. Under ground drainage. West facing.Road face 45 feet.Full residential area.',
		highlights: ['corner property', 'corner property', 'corner property'],
		media: [
			''
		],
		owner_name: 'will jackson',
		owner_contact_number: '9965886656',
		owner_email_id: 'tom@gmail.com',
		created_on: '12-2-2023',
		id: 1,
	},
	{
		address: 'Balaji Nagar, Tamil Nadu Others',
		plot_type: 'Residential land / Plot in Balaji Nagar, Others',
		rate: '₹85 Lac',
		rate_per_sq: '₹2,521 /sqft',
		size: '2,975 sqft',
		land_type: 'Plot Area',
		category: 'Plot/Land',
		clearence: 'Ready to move',
		description: 'Coimbatore corporation.Limit.Dtcp approved. Municipal water. Under ground drainage. West facing.Road face 45 feet.Full residential area.',
		highlights: ['corner property', 'opposite to KMCH'],
		media: [
			''
		],
		owner_name: 'will jackson',
		owner_contact_number: '9965886656',
		owner_email_id: 'tom@gmail.com',
		created_on: '12-2-2021',
		id: 2,
	},
	{
		address: 'Balaji Nagar, Tamil Nadu Others',
		plot_type: 'Residential land / Plot in Balaji Nagar, Others',
		rate: '₹75 Lac',
		rate_per_sq: '₹2,521 /sqft',
		size: '2,975 sqft',
		land_type: 'Plot Area',
		category: 'Plot/Land',
		clearence: 'Ready to move',
		description: 'Coimbatore corporation.Limit.Dtcp approved. Municipal water. Under ground drainage. West facing.Road face 45 feet.Full residential area.',
		highlights: ['corner property', 'corner property', 'corner property'],
		media: [
			''
		],
		owner_name: 'will jackson',
		owner_contact_number: '9965886656',
		owner_email_id: 'tom@gmail.com',
		created_on: '12-2-2023',
		id: 3,
	},
	{
		address: 'Balaji Nagar, Tamil Nadu Others',
		plot_type: 'Residential land / Plot in Balaji Nagar, Others',
		rate: '₹75 Lac',
		rate_per_sq: '₹2,521 /sqft',
		size: '2,975 sqft',
		land_type: 'Plot Area',
		category: 'Plot/Land',
		clearence: 'Ready to move',
		description: 'Coimbatore corporation.Limit.Dtcp approved. Municipal water. Under ground drainage. West facing.Road face 45 feet.Full residential area.',
		highlights: ['corner property', 'corner property', 'corner property'],
		media: [
			''
		],
		owner_name: 'will jackson',
		owner_contact_number: '9965886656',
		owner_email_id: 'tom@gmail.com',
		created_on: '12-2-2023',
		id: 4,
	}
]


export const SiteListView = () => {
	return (
		<SiteList width={'80%'}>
			<Typography variant="h6" gutterBottom> {siteInfo.length} result | Plot for Sale</Typography>

			{
				siteInfo.map((site, index) =>
					<SiteCard info={site} key={index} />
				)
			}
		</SiteList>
	)
}

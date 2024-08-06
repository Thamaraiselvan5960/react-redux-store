import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Card, CardMedia, CardContent, Typography, Link, TextField } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom';

const LandsListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f9ff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LandCard = styled(Card)`
  width: 300px;
  margin: 20px;
  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1200px) {
    width: 500px;
  }
`;

const LandCardMedia = styled(CardMedia)`
  height: 150px;
  @media (min-width: 768px) {
    height: 200px;
  }
  @media (min-width: 1200px) {
    height: 250px;
  }
`;

const LandCardContent = styled(CardContent)`
  padding: 20px;
`;

const LandCardTitle = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const LandCardText = styled(Typography)`
  font-size: 16px;
  color: #666;
`;

const lands = [
	{
		id: 1,
		totalArea: '10 acres',
		noOfSites: 20,
		dtcpNo: 'DTCP123',
		locationBarcode: 'LOC123',
		location: 'Hyderabad, Telangana, India',
		latitude: 17.3850,
		longitude: 78.4867,
		photos: ['https://media.istockphoto.com/id/1148812518/photo/concept-of-selling-a-house-a-hand-is-holding-a-model-house-above-green-meadow.jpg?s=612x612&w=0&k=20&c=cz8FLYjnb18uEE-C3o8_XHfx1fCJB3YnnbFZK3Gv0jE=', 'https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?s=2048x2048&w=is&k=20&c=3hG8AEV27QqavGnln-sIwTTLD-jp7u_fzxwo9r3uZz8='],
	},
	{
		id: 2,
		totalArea: '5 acres',
		noOfSites: 10,
		dtcpNo: 'DTCP456',
		locationBarcode: 'LOC456',
		location: 'Bangalore, Karnataka, India',
		latitude: 12.9716,
		longitude: 77.5946,
		photos: ['https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?s=2048x2048&w=is&k=20&c=3hG8AEV27QqavGnln-sIwTTLD-jp7u_fzxwo9r3uZz8='],
	},
	//...
];

export const Sites = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredLands = lands.filter((land) => {
		return land.location.toLowerCase().includes(searchTerm.toLowerCase());
	});
	return (
		<div>
			<SearchBarContainer>
				<TextField
					label="Search by location"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					fullWidth
				/>
			</SearchBarContainer>
			<LandsListContainer>
				{lands.map((land) => (
					<ReactLink to={`/sites/${land.id}`}>
						<LandCard key={land.id}>
							<LandCardMedia image={land.photos[0]} />
							<LandCardContent>
								<LandCardTitle>
									{land.totalArea} - {land.noOfSites} sites
								</LandCardTitle>
								<LandCardText>
									DTCP No: {land.dtcpNo} | Location Barcode: {land.locationBarcode}
								</LandCardText>
								<LandCardText>
									Location: {' '}
									<Link
										href={`https://www.google.com/maps/@?api=1&map_action=map&center=${land.latitude},${land.longitude}&zoom=15`}
										target="_blank"
										rel="noopener noreferrer"
									>
										{land.location}
									</Link>
								</LandCardText>
							</LandCardContent>
						</LandCard>
					</ReactLink>
				))}
			</LandsListContainer>
		</div>
	);
};
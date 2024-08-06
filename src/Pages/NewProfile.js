import React, { useState } from 'react';
import { styled } from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { ChangePasswordForm, UserForm } from '../components';
import ShareIcon from '@mui/icons-material/Share';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const CARD_HEADER_HEIGHT = '100px';

const CoverImageWrapper = styled.div`
	height: 30%;
	background-color: blue;
	width: 100%;
	background-image: url('https://img.freepik.com/free-vector/abstract-classic-blue-screensaver_23-2148421853.jpg?w=1380&t=st=1722312041~exp=1722312641~hmac=62a46fbd12d4ad19121a9dd28d9fd0e4ed9700cf73ef6d24a02f7bf9b36bb6f3');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
const ContentWrapper = styled.div`
	height: 70%;
	position: relative;
	width: 100%;
	background-color: #ffffff;
`;

const ProfileContainer = styled.div`
	position: absolute;
	top: -${CARD_HEADER_HEIGHT};
	width: 100%;
	gap: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	`;

const FlexWrapper = styled.div`
	width: 80%;
	gap: 30px;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;

	@media (max-width: 768px) {
    flex-direction: column;
  }

`;

const ProfileCard = styled.div`
  background-color: #ffffff;
  min-height: 500px;
  flex: 0 0 280px;
  border: 1px solid #afafaf;
  @media (max-width: 768px) {
    // width: 100%;
    height: 300px;
  }
  @media (max-width: 480px) {
    // width: 100%;
    height: 200px;
  }
`;

const SettingsCard = styled.div`
  background-color: #ffffff;
  height: auto;
  min-height: 400px;
  width: 1000px;
  border: 1px solid #afafaf;
  @media (max-width: 1200px) {
    width: 800px;
  }
  @media (max-width: 992px) {
    width: 600px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardHeader = styled.div`
	height: ${CARD_HEADER_HEIGHT};
	background-color: #fff;
`;

const CustomTabs = styled(Tabs)`
	height: 100%;
`;

const ProfilePictureWrapper = styled.div`
  height: 250px;
  position: relative;
//   background-color: blue;
  `;

const CameraIconWrapper = styled.div`
  position: absolute;
  top: 59%;
  right: 20%;
  background-color: #dee2ff;
  padding: 0.5rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  &:hover {
	cursor: pointer;
  }

`;
const ProfilePicture = styled.div`
//   background-color: pink;
padding: 1rem;
  height: calc( 180px + 1rem );
  overflow: hidden;
  display: grid;
  place-items: center;
  `;

const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  
`;

const InfoWrapper = styled.div`
  height: 65px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  `;

const ButtonWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;


function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}



export const NewProfile = () => {

	const [value, setValue] = useState(0);
	const [image, setImage] = useState(null);
	const [imageUrl, setImageUrl] = useState('https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg');

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = (event) => {
			setImageUrl(event.target.result);
		};
		reader.readAsDataURL(file);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<CoverImageWrapper></CoverImageWrapper>
			<ContentWrapper>
				<ProfileContainer>
					<FlexWrapper>
						<ProfileCard>
							<ProfilePictureWrapper>
								<ProfilePicture >
									{/* <Image src="https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg" /> */}
									<Image src={imageUrl} />
								</ProfilePicture>
								<CameraIconWrapper>
									{/* <CameraAltIcon sx={{ color: 'black' }} /> */}
									<input
										type="file"
										accept="image/*"
										style={{ display: 'none' }}
										id="image-input"
										onChange={handleImageChange}
									/>
									<label htmlFor="image-input" style={{ height: '24px' }}>
										<CameraAltIcon sx={{ color: 'black' }} />
									</label>
								</CameraIconWrapper>
								<Typography sx={{ textAlign: 'center', p: 1 }} variant="subtitle1" gutterBottom>{'John'}</Typography>
								<Divider />
							</ProfilePictureWrapper>
							<InfoWrapper>
								<Typography variant="h6">Total Sites</Typography>
								<Typography sx={{ color: 'Blue', fontWeight: '700' }}>100</Typography>
							</InfoWrapper>
							<Divider />
							<InfoWrapper>
								<Typography variant="h6">sold Sites</Typography>
								<Typography sx={{ color: 'green', fontWeight: '700' }}>87</Typography>
							</InfoWrapper>
							<Divider />
							<InfoWrapper>
								<Typography variant="h6">pending Sites</Typography>
								<Typography sx={{ color: 'red', fontWeight: '700' }}>13</Typography>
							</InfoWrapper>
							<Divider />

							<ButtonWrapper >
								<Button variant="outlined" >View profile</Button>
								<Button variant="outlined" startIcon={<ShareIcon />}>Share my Profile</Button>
							</ButtonWrapper>


						</ProfileCard>
						<SettingsCard>
							<Box sx={{ width: '100%' }}>
								<CardHeader>
									<Box sx={{ borderBottom: 1, borderColor: 'divider', height: '100%' }}>
										<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ height: '100%' }}>
											<Tab label="Account Settings"  {...a11yProps(0)} />
											<Tab label="Password Settings"  {...a11yProps(1)} />
											<Tab label="Notification Settings" {...a11yProps(2)} />
										</Tabs>
									</Box>
								</CardHeader>

								<CustomTabPanel value={value} index={0}>
									<UserForm
										userData={{
											username: 'John Doe',
											email: 'johndoe@example.com',
											mobileNumber: '1234567890',
											gender: 'male',
											city: 'New York',
											state: 'NY',
											postalCode: '10021',
											country: 'USA',
										}}
									/>
								</CustomTabPanel>
								<CustomTabPanel value={value} index={1}>
									<ChangePasswordForm />
								</CustomTabPanel>
								<CustomTabPanel value={value} index={2}>
									<Typography variant="h6" sx={{ textAlign: 'center' }}>
										Coming Soon!
									</Typography>
								</CustomTabPanel>
							</Box>
						</SettingsCard>
					</FlexWrapper>


				</ProfileContainer>

			</ContentWrapper >
		</>
	)
}

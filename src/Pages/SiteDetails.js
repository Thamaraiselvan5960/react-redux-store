import React, { useEffect, useMemo } from 'react';
import { styled } from 'styled-components';
import { CustomChip, Input, LetsTalk } from '../components';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import { Chip, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SiteList } from './SiteList';
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { CustomImageGallery } from '../components/CustomImageGallery';


const siteDetails = [
	{
		id: 1,
		siteArea: '1000 sqft',
		rate: '₹ 5000/sqft',
		location: 'Hyderabad, Telangana, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 2,
		siteArea: '1500 sqft',
		rate: '₹ 6000/sqft',
		location: 'Bangalore, Karnataka, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 3,
		siteArea: '2000 sqft',
		rate: '₹ 7000/sqft',
		location: 'Chennai, Tamil Nadu, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 4,
		siteArea: '1200 sqft',
		rate: '₹ 5500/sqft',
		location: 'Mumbai, Maharashtra, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 5,
		siteArea: '1800 sqft',
		rate: '₹ 6500/sqft',
		location: 'Delhi, Delhi, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 6,
		siteArea: '2500 sqft',
		rate: '₹ 8000/sqft',
		location: 'Kolkata, West Bengal, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 7,
		siteArea: '1000 sqft',
		rate: '₹ 4500/sqft',
		location: 'Pune, Maharashtra, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 8,
		siteArea: '1500 sqft',
		rate: '₹ 6000/sqft',
		location: 'Ahmedabad, Gujarat, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 9,
		siteArea: '2000 sqft',
		rate: '₹ 7500/sqft',
		location: 'Hyderabad, Telangana, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 10,
		siteArea: '1200 sqft',
		rate: '₹ 5000/sqft',
		location: 'Chennai, Tamil Nadu, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 11,
		siteArea: '1800 sqft',
		rate: '₹ 6500/sqft',
		location: 'Mumbai, Maharashtra, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
	{
		id: 12,
		siteArea: '2500 sqft',
		rate: '₹ 8500/sqft',
		location: 'Bangalore, Karnataka, India',
		image: 'https://www.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-2218923361.jpg',
	},
];

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled(Card)`
	margin: 1rem;
`;

const PlotCard = ({ site }) => {
	return (
		<CardContainer sx={{ width: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image={site.image}
				alt="Plot Image"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Plot Details
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Site Area: {site.siteArea}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Rate: {site.rate}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Location: {site.location}
				</Typography>
				<Button variant="contained" color="primary" fullWidth>
					Book Site
				</Button>
			</CardContent>
		</CardContainer>
	);
};


// const BasicDetailsPage = () => {
// 	return (
// 		<>
// 			<BasicDetailsWrapper>

// 			</BasicDetailsWrapper>
// 		</>
// 	)
// }


const BookNowWrapper = styled.div`
	margin: 1rem;
	padding: 1rem;
	color: blue;
	background-color: #fff;
	max-width: 350px;
	width: 300px;
	height: 550px;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

const StyledButton = styled(Button)({
	backgroundColor: 'black',
	color: 'white',
	'&:hover': {
		backgroundColor: 'gray',
	},
});


const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledChip = styled(Chip)`
  margin: 10px;
  background-color: #f0f0f0;
  border-radius: 5px!important;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const BookNow = () => {
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const chipsData = useMemo(() => {
		const timeStamps = [];

		for (let hour = 8; hour <= 17; hour++) {
			const time = `${String(hour % 12 || 12).padStart(2, '0')}:${'00'}${hour < 12 ? 'AM' : 'PM'}`;
			const value = `${String(hour).padStart(2, '0')}:${'00'}`;
			timeStamps.push({ time, value });
		}
		return timeStamps;
	}, [])

	console.log(chipsData)


	return (
		<BookNowWrapper>
			<Typography variant="h6" color="textSecondary">
				Schedule an appointment:
			</Typography>
			<Input type='date' />
			<ChipContainer>
				{chipsData.map((chip, index) => (
					<StyledChip
						key={index}
						label={chip.time}
						onDelete={() => console.log(`Deleted chip ${chip.time}`)}
					/>
				))}
			</ChipContainer>

			<Button>Choose CustomTime</Button>
			<Input type='time' />


			<StyledButton variant="contained">Schedule Appointment</StyledButton>
		</BookNowWrapper >
	);
};


const PropertyBasicInfo = styled.div`
  background-color: #f7f7f7;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PropertyImage = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit:cover;
`;

const PropertyOwnerInfo = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const PropertyRateWrapper = styled.div`
`;

const PropertyDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PropertyLeftWrapper = styled.div`
  flex: 1;
  width: 70%;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const DescriptionWrapper = styled.div`
//   padding: 20px;
//   border-bottom: 1px solid #ddd;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const PropertyGalary = styled.div`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const PropertyFeatures = styled.div`
  padding: 20px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const PropertyRightWrapper = styled.div`
//   width: 300px;
  width: 30%;

  padding: 20px;
//   border-left: 1px solid #ddd;

  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    // border-top: 1px solid #ddd;
  }
`;

const PropertyMapWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  border: 1px solid #ddd;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const JustifiedText = styled(Typography)`
  text-align: justify;
`;

const CenteredText = styled(Typography)`
  padding: 1rem;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  `;

const IframeContainer = styled.div`
position: relative;
width: 100%;
height: 300px;
`;
const NearByPlaces = styled.div`
//   box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding: 1rem;
`;
const NearByPlacesContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const PlaceCard = styled.span`
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  width: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;

`;

const ExploringLandArea = styled.div`
  display: flex;
  border: 1px solid #ebecf0;
  border-radius: 8px;
  width: 100%;
  
  `;

const ExploreLeft = styled.div`
  width: 50%;
  padding: 1rem;
  
  &:hover {
	  box-shadow: 0 3px 8px 0 rgba(0,106,194,.2);
	  // background-color: #fff;
	  transform: scale(1.01);
	}
	`;

const ExploreRight = styled.div`
	width: 50%;
	padding: 1rem;

	&:hover {
		box-shadow: 0 3px 8px 0 rgba(0,106,194,.2);
		// background-color: #fff;
		transform: scale(1.01);
	}
`;

const StyledList = styled.ul`
  list-style: initial;
  margin-left: 2rem;
`;
export const SiteDetails = () => {



	return (
		<>
			{/* <SiteList> */}
			<PropertyBasicInfo>
				<PropertyImage>
					{/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssLGmJX01Ahkd-_o6CfcZAnVqtWrlAPbjtQ&s" /> */}
					<CustomImageGallery autoPlay={false} showNav />

				</PropertyImage>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>

					<PropertyOwnerInfo>
						<div>

							<Typography>John dow</Typography>
							<Typography>Chennai,Tamilnadu</Typography>
						</div>
						<CustomChip >owner</CustomChip>
					</PropertyOwnerInfo>
					<PropertyRateWrapper>
						<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
							<Typography>starts from <b>$10000/$50000</b></Typography> <Button variant="contained" endIcon={<MarkunreadIcon sx={{ color: '#fff' }} />}>Get In Touch</Button>

						</div>
					</PropertyRateWrapper>
				</div>
			</PropertyBasicInfo>
			<PropertyDetails>
				<PropertyLeftWrapper>
					<DescriptionWrapper>
						<Typography variant="h5" gutterBottom>Description</Typography>
						<JustifiedText variant="subtitle2" gutterBottom >Culpa sit deserunt amet quis velit commodo exercitation dolore. Duis officia laborum non voluptate adipisicing laboris non. Ea elit mollit anim incididunt et reprehenderit dolore est sit enim mollit reprehenderit nisi. Sunt ad labore aute cupidatat ad eiusmod do aute tempor deserunt in.Enim ea dolor veniam do occaecat velit. Lorem elit nisi laboris excepteur nisi dolore ad veniam id enim Lorem proident reprehenderit. Aliqua ex aute aute aute ea quis excepteur occaecat eiusmod. Voluptate sunt ipsum amet sint veniam commodo proident. Proident irure nisi sit amet id dolore ullamco sunt ad. Excepteur voluptate aliqua elit adipisicing esse amet consequat eu ipsum et consequat sit excepteur. Pariatur aliqua pariatur adipisicing incididunt officia nisi reprehenderit incididunt mollit velit exercitation aliqua reprehenderit.</JustifiedText>
					</DescriptionWrapper>
					<PropertyGalary></PropertyGalary>
					<PropertyFeatures></PropertyFeatures>
					<NearByPlaces>
						<Typography variant='h5' gutterBottom>Places NearBy</Typography>
						<NearByPlacesContainer>
							<PlaceCard>
								<LocalHospitalIcon />
								Abhi SK Hospital
							</PlaceCard>
							<PlaceCard>
								<LocalHospitalIcon />
								Abhi SK Hospital
							</PlaceCard>
						</NearByPlacesContainer>
					</NearByPlaces>
					<div style={{
						boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px', padding: '1rem', marginTop: '1rem'
					}}>
						<Typography variant='h5' gutterBottom>Explore Places</Typography>
						<ExploringLandArea>
							<ExploreLeft>
								<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

									<ThumbUpAltIcon sx={{ color: '#000' }} /><Typography variant='subtitle2' >What's great here!</Typography>
								</div>
								<StyledList>
									<li>
										Sriperumbudur is one of the emerging micro-markets in South Chennai that primarily offers affordable land parcels
									</li>
									<li>
										Popularly known as an industrial area, Sriperumbudur hosts manufacturing plants of leading automobile firms
									</li>
									<li>
										Apart from its in-house industrial estates, the locale is also 18 km from Oragadam- a popular industrial zone
									</li>
								</StyledList>

							</ExploreLeft>
							<ExploreRight>
								<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
									<ThumbDownAltIcon sx={{ color: '#000' }} />
									<Typography variant='subtitle2' >What needs attention!</Typography>
								</div>
								<StyledList>
									<li>
										Commuters travelling to and fro Sriperumbudur often face traffic jams during peak hours
									</li>
									<li>
										The presence of industries and frequent traffic jams lead to air pollution in the locality
									</li>
								</StyledList>
							</ExploreRight>

						</ExploringLandArea>
					</div>

				</PropertyLeftWrapper>
				<PropertyRightWrapper>
					<PropertyMapWrapper>
						<CenteredText variant="subtitle2" gutterBottom>Location</CenteredText>
						<IframeContainer>

							<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.316984080869!2d77.43597920522487!3d11.453105028161305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d9955555555%3A0xb4c50f25e08b1d7!2sZeon%20Cinemas!5e0!3m2!1sen!2sin!4v1722438029906!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
						</IframeContainer>
						<div style={{ padding: '1rem', display: 'flex' }}>

							<div>
								<Typography variant='subtitle2' gutterBottom>Zeon Cinemas</Typography>
								<Typography variant='subtitle2' gutterBottom>Zeon Cinemas
									Modachur Rd, Gobichettipalayam, Tamil Nadu 638452</Typography>
							</div>
							<div>
								<Link target="_blank" to="https://maps.app.goo.gl/gusyNAemDK4kBE3UA">
									<AltRouteIcon sx={{ color: 'blue' }} />
								</Link>
							</div>
						</div>
					</PropertyMapWrapper>
					<LetsTalk />
				</PropertyRightWrapper>
			</PropertyDetails>
			{/* </SiteList> */}
		</>
	);
};

{/* <PhotoGallery /> */ }
{/* <ImageGrid />
				<BookNow />
				<PlotFilter />
				<CardWrapper>
					{siteDetails.map((site) => (
						<PlotCard key={site.id} site={site} />
					))}
				</CardWrapper> */}
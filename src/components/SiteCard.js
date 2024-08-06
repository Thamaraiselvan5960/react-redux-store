import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from 'styled-components';
import { Typography } from '@material-ui/core';
import PhoneIcon from '@mui/icons-material/Phone';
import { Modal } from '@mui/base/Modal';
import { CustomModal } from './CustomModal';
import { ContactOwnerCard } from './ContactOwnerCard';
import { Link } from 'react-router-dom';


const SiteDetailCard = styled(Box)`
	display: flex;
	max-width: 900px;
	box-shadow: 0px 1px 4px 0px rgba(31,92,163,.2) !important;
	margin: 1rem;
	background-color: #fff;
	height: 300px;
`;

const MediaWrapper = styled.div`
	width: 350px;
`;
const DetailsWrapper = styled.div`
	width: calc( 100% - 350px);
	position: relative;
`;

const AddressWrapper = styled.div`
	padding: 10px; 
`;
const PriceDetailsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
`;
const HighlightsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 10px;
`;
const Description = styled.div`
	padding: 10px;
`;
const ContactFooter = styled.div`
	background-color: #eeeeee;
	padding: 10px 20px;
	position: absolute;
	bottom: 0;
	width: 100%;
`;

const HighlightChip = styled.span`
	background: #f4f5f7;
    border-radius: 4px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px 4px 8px;
    white-space: nowrap;
    max-width: max-content;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;
const StyledCard = styled.div`
	background-color: #fff;
	border-radius: 2px;
	padding: 1rem 1.4rem;

`;
export const SiteCard = ({
	info
}) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<SiteDetailCard>
				<MediaWrapper>
					<Image src="https://squareacre.in/wp-content/uploads/2023/09/1200-sqft-Buy-land-at-the-cheap-price-in-Chintamaniswar-Bhubaneswar1.jpg" />
				</MediaWrapper>
				<DetailsWrapper>
					<Link to={`/sites/${info.id}`} className="no-link-styles">

						<AddressWrapper>
							<Typography varient="h6" className='fs-14'><b>{info.address}</b></Typography>
							<Typography varient="h6" className='fs-14'>{info.plot_type}</Typography>
						</AddressWrapper>
						<PriceDetailsWrapper>
							<div>
								<Typography varient="h6" className='fs-16'><b>{info.rate}</b></Typography>
								<Typography varient="h6" className='fs-14'>{info.rate_per_sq}</Typography>
							</div>
							<div style={{ borderLeft: '1px solid #ebecf0', padding: '0 1rem' }}>
								<Typography varient="h6" className='fs-16'><b>{info.size}</b></Typography>
								<Typography varient="h6" className='fs-14'>{info.land_type}</Typography>
							</div>
							<div style={{ borderLeft: '1px solid #ebecf0', padding: '0 1rem' }}>
								<Typography varient="h6" className='fs-16'><b>{info.category}</b></Typography>
								<Typography varient="h6" className='fs-14'>{info.clearence}</Typography>
							</div>
						</PriceDetailsWrapper>
						<HighlightsWrapper>

							<span className='fs-14'><b>Highlights: </b></span>
							{
								info?.highlights.map((item, index) => <HighlightChip key={index} className='fs-14'>{item}</HighlightChip>)
							}
						</HighlightsWrapper>
						<Description>
							<Typography varient="" className='fs-14'>{info.description}</Typography>
						</Description>
					</Link>
					<ContactFooter>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div style={{ display: 'grid', placeItems: 'center' }}>
								Owner
							</div>
							<div style={{ display: 'flex', gap: '10px' }}>
								<Button variant="outlined" className='fs-14' onClick={handleOpen}>View Number</Button>
								<Button variant="contained" startIcon={<PhoneIcon sx={{ color: '#fff' }} />} className='fs-14' onClick={handleOpen}>Contact</Button>
							</div>
						</div>
					</ContactFooter>
				</DetailsWrapper>
			</SiteDetailCard>
			<CustomModal open={open} handleClose={handleClose} info={info}>
				<ContactOwnerCard info={info} />
			</CustomModal>
		</>
	)
}

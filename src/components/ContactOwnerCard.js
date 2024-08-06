import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Typography, Button } from '@material-ui/core';
import { Input } from './Forms';

const StyledCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled(StyledCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const CardSubHeader = styled.div`
  color: #fff;
  padding: 0 10px;
`;

const CardBody = styled(StyledCard)`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

const FlexLeftWrapper = styled.div`
  width: 50%;
  padding: 20px;
`;

const FlexRightWrapper = styled.div`
  width: 50%;
  padding: 20px;
`;

const RadioButton = styled.input`
  margin: 0 10px;
`;

const Checkbox = styled.input`
  margin: 0 10px;
`;

export const ContactOwnerCard = ({ info }) => {
	const [formData, setFormData] = useState({
		reason: '',
		dealer: '',
		name: '',
		phone: '',
		email: '',
		buyTime: '3_months',
		homeLoan: false,
		siteVisit: false,
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		// Add API call or form submission logic here
	};

	const handleInputChange = (event) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevFormData) => {
			if (type === 'checkbox') {
				return { ...prevFormData, [name]: checked };
			} else {
				return { ...prevFormData, [name]: value };
			}
		});
	};
	return (
		<form onSubmit={handleSubmit}>
			<Typography variant="h4" gutterBottom>
				Welcome
			</Typography>
			<CardHeader>
				<FlexLeftWrapper>
					<Typography variant="h5" gutterBottom>
						POSTED BY DEALER
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						{info.owner_contact_number} | {info.owner_email_id}
					</Typography>
					<Typography variant="subtitle2" gutterBottom>
						{info.owner_name}
					</Typography>
				</FlexLeftWrapper>
				<FlexRightWrapper>
					<Typography variant="h5" gutterBottom>
						POSTED ON: {info.created_on}
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						{info.rate}
					</Typography>
					<Typography variant="subtitle2" gutterBottom>
						{info.size} | {info.land_type}
					</Typography>
				</FlexRightWrapper>
			</CardHeader>
			<CardSubHeader>
				<Typography variant="subtitle2" gutterBottom>
					Please Fill the details to be shared with the advertiser only
				</Typography>
			</CardSubHeader>
			<CardBody>
				<FlexLeftWrapper>
					<Typography variant="h5" gutterBottom>
						Basic Information
					</Typography>
					<div>
						<span>Your reason to buy</span>
						<RadioButton
							type="radio"
							name="reason"
							value="investment"
							checked={formData.reason === 'investment'}
							onChange={handleInputChange}
						/>
						<span>Investment </span>
						<RadioButton
							type="radio"
							name="reason"
							value="self_user"
							checked={formData.reason === 'self_user'}
							onChange={handleInputChange}
						/>
						<span>Self user </span>
					</div>
					<div>
						<span>Are you a property dealer</span>
						<RadioButton
							type="radio"
							name="dealer"
							value="yes"
							checked={formData.dealer === 'yes'}
							onChange={handleInputChange}
						/>
						<span>Yes </span>
						<RadioButton
							type="radio"
							name="dealer"
							value="no"
							checked={formData.dealer === 'no'}
							onChange={handleInputChange}
						/>
						<span>No </span>
					</div>
					<div style={{ margin: '1rem 0' }}>
						<Input
							type="text"
							placeholder="Name"
							name='name'
							padding={'0.5rem'}
							value={formData.name}
							onChange={handleInputChange}
						/>
					</div>
					<div style={{ margin: '1rem 0' }}>
						<Input
							type="phone"
							placeholder="Phone"
							padding={'0.5rem'}
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}

						/>
					</div>
					<div style={{ margin: '1rem 0' }}>
						<Input
							type="email"
							placeholder="Email"
							padding={'0.5rem'}
							name="email"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</div>
				</FlexLeftWrapper>
				<FlexRightWrapper>
					<Typography variant="h5" gutterBottom>
						Optional information
					</Typography>
					<div>
						<span>By when you are planning to buy this property?</span> <br />
						<RadioButton
							type="radio"
							name="buy_time"
							value="3_months"
							checked={formData.buyTime === '3_months'}
							onChange={handleInputChange}
						/>
						<span>3 months </span>
						<RadioButton
							type="radio"
							name="buy_time"
							value="6_months"
							checked={formData.buyTime === '6_months'}
							onChange={handleInputChange}
						/>
						<span>6 months </span>
						<RadioButton
							type="radio"
							name="buy_time"
							value="more_than_6_months"
							checked={formData.buyTime === 'more_than_6_months'}
							onChange={handleInputChange}
						/>
						<span>more than 6 months </span>
					</div>
					<div>
						<Checkbox
							type="checkbox"
							id="home_loan"
							name="homeLoan"
							checked={formData.homeLoan}
							onChange={handleInputChange}
						/>
						<label for="home_loan">I'm interested in home loan.</label>
					</div>
					<div>
						<Checkbox
							type="checkbox"
							id="site_visit"
							name="siteVisit"
							checked={formData.siteVisit}
							onChange={handleInputChange}
						/>
						<label for="site_visit">I'm interested in site visit.</label>
					</div>

					<Button variant="contained" color="primary" type="submit">
						View Owner Info
					</Button>
				</FlexRightWrapper>
			</CardBody>
		</form>
	);
};
// import React from 'react';
// import { styled } from 'styled-components';
// import { LayoutWrapper, OuterWrapper } from '../components';

// const SupportWrapper = styled.div`
// 	display: flex;
// 	background-color: #f4f9ff;
// 	padding: 1rem;
// `;
// const SupportContainer = styled.div`
//  	width: 50%;
// 	padding: 1rem;
// 	background-color: #e4edfb;

//  `;

// const SupportLeftWrapper = styled(SupportContainer)`
// `;
// const SupportRightWrapper = styled(SupportContainer)`

// `;

// const FormWrapper = styled.form`

// `;


// const TextWrapper = styled.div``;
// export const Support = () => {
// 	return (

// 		<SupportWrapper>

// 			<SupportLeftWrapper>
// 				<TextWrapper>
// 					<h1>Get In Touch</h1>
// 					<p>We are here for you! How can we help?</p>
// 				</TextWrapper>

// 				<FormWrapper>

// 				</FormWrapper>

// 			</SupportLeftWrapper>
// 			<SupportRightWrapper></SupportRightWrapper>
// 		</SupportWrapper>

// 	)
// }


import React from 'react';
import styled, { css } from 'styled-components';
import { Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SupportPageContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

export const Support = () => {
	const navigate = useNavigate();

	const handleContactUsClick = () => {
		navigate('/contact-us', { replace: true });
	};
	return (
		<SupportPageContainer>
			<Header>Real Estate Projects Support</Header>
			<Section>
				<Card>
					<CardTitle>Frequently Asked Questions</CardTitle>
					<CardText>Get answers to common questions about our real estate projects.</CardText>
					<ButtonContainer>
						<Button variant="contained" color="primary">
							View FAQs
						</Button>
					</ButtonContainer>
				</Card>
			</Section>
			<Section>
				<Card>
					<CardTitle>Contact Us</CardTitle>
					<CardText>Get in touch with our support team for assistance with your real estate project.</CardText>
					<ButtonContainer>
						<Button variant="contained" color="primary" onClick={handleContactUsClick}>
							Contact Us
						</Button>
					</ButtonContainer>
				</Card>
			</Section>
			<Section>
				<Card>
					<CardTitle>Resource Center</CardTitle>
					<CardText>Access our library of guides, tutorials, and webinars to help you succeed with your real estate project.</CardText>
					<ButtonContainer>
						<Button variant="contained" color="primary">
							Visit Resource Center
						</Button>
					</ButtonContainer>
				</Card>
			</Section>
		</SupportPageContainer>
	);
};
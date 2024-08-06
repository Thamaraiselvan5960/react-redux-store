import React from 'react';
import styled, { css } from 'styled-components';
import { Grid, Typography, TextField, Button } from '@mui/material';

const ContactPageContainer = styled.div`
  max-width: 800px;
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

const FormContainer = styled.div`
  margin-bottom: 40px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;

const FormInput = styled(TextField)`
  width: 100%;
  margin-bottom: 20px;
`;

const FormButton = styled.button`
  width: 100%;
  margin-top: 20px;
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ContactUs = () => {
	return (
		<ContactPageContainer>
			<Header>Get in Touch</Header>
			<FormContainer>
				<FormLabel>Name:</FormLabel>
				<FormInput id="name" type="text" />
				<FormLabel>Email:</FormLabel>
				<FormInput id="email" type="email" />
				<FormLabel>Message:</FormLabel>
				<FormInput id="message" type="textarea" />
				<FormButton>Send Message</FormButton>
			</FormContainer>
		</ContactPageContainer>
	);
};

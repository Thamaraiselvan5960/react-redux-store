import { Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Input, TextArea } from './Forms';

const Container = styled.div`
	// box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
	box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	margin: 1rem 0;
	padding: 1rem;
	background-color: #fff;
`;

const Header = styled(Typography)`
	text-align: center;
`;

const ButtonContainer = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
`;

export const LetsTalk = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your submit logic here
		console.log('Form submitted:', { username, email, message });
	};

	const handleClear = () => {
		setUsername('');
		setEmail('');
		setMessage('');
	};

	return (
		<Container>
			<Header variant="h5">LetsTalk</Header>
			<div>
				<Input
					name='username'
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					marginBottom={'0.5rem'}
				/>
				<Input
					name='email'
					type='email'
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					marginBottom={'0.5rem'}
				/>
				<TextArea
					placeholder="Enter your message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					padding="1rem"
					rows={4}
				/>
				<ButtonContainer>
					<Button variant="contained" color="secondary" onClick={handleClear}>
						Clear
					</Button>
					<Button variant="contained" color="primary" onClick={handleSubmit}>
						Submit
					</Button>
				</ButtonContainer>
			</div>
		</Container>
	);
};
import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import facebook from '../../assets/images/facebook-logo-24.png'

const LoginWrapper = styled.div`
	background-color: #f4f9ff;
	height: 100vh;
	width: 100vw;
	display: flex;	
	justify-content: center;
	align-items: center;
`;

const OuterWrapper = styled.div`
	background-color: #e4edfb;
	padding: 1rem;
	border-radius: 1rem;
	`;

const LoginFormWrapper = styled.div`
	background-color: #fff;
	border-radius: 1rem;
	padding: 1.5rem;
	width: 450px;
`;


const AuthButton = styled.button`
	width: 100%;
	text-align: center;
	margin: 1rem 0;
	padding: 0.1rem;
	border-radius: 3px;
	cursor: pointer;
	color: #fff;
	outline: none;
	border: none;
	font-size: 1rem;
`;

const ButtonWrapper = styled.div`
	height: 46px;
	display: flex;
`;

const ImageWrapper = styled.img`
	width: 46px;
	height: 100%;
	background-color: #fff;
	color: blue;
`;

const SpanWrapper = styled.div`
	width: calc( 100vw - 46px);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: navy;
`;


const GoogleSpanWrapper = styled(SpanWrapper)`
	background-color: blue;
`;
const FacebookButton = styled(AuthButton)`
	background-color: #4968ad;
`;

const GoogleButton = styled(AuthButton)`
	background-color: #fff;
	color: black;
	border: 1px solid black;
`;

const LoginText = styled.h1`
	text-align: center;
`;

const OrContainer = styled.div`
	text-align: center;
	color: #727272;
	margin-bottom: 1rem;
`;

const FormContainer = styled.div`

`;

const TextInput = styled.input`
	outline: none;
	border: 1px solid #c2cde3;
	padding: 1rem;

	&:hover {
    border-color: #a8a9b5;
  }

  &:focus {
    border:1px solid black;
	outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #d2d8e9;
    color: #a8a9b5;
  }

  &::placeholder {
    /* Set the placeholder style here */
    color: #a4a5b2;
    font-size: 16px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const SubmitButton = styled.button`
  background-color: #1e2c4b;
  width: 100%;
  color: #fff;
  outline: none;
  border: none;
  padding: 1rem 0.8rem;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
`;

const NewUserLink = styled.a`
  font-size: 14px;
  color: #727272;
  text-decoration: none;
  margin-top: 1rem;
  text-align: right;
  color: #4968ad;
`;


export const RegisterPage = () => {

	const navigate = useNavigate();

	const handleNewUserClick = () => {
		navigate('/login', { replace: true });
	};
	return (
		<LoginWrapper>
			<OuterWrapper>
				<LoginFormWrapper>
					<LoginText>Login</LoginText>

					<FacebookButton>
						<ButtonWrapper>
							<ImageWrapper src={facebook} />
							<SpanWrapper>Join with FaceBook</SpanWrapper>
						</ButtonWrapper>
					</FacebookButton>
					<GoogleButton>
						<ButtonWrapper>
							<ImageWrapper src='https://developers.google.com/static/identity/images/g-logo.png' alt='google-button' />
							<GoogleSpanWrapper>Join with Google</GoogleSpanWrapper>

						</ButtonWrapper>
					</GoogleButton>

					<OrContainer>
						Or
					</OrContainer>
					<FormContainer>
						<FlexContainer>
							<TextInput type='text' placeholder="firstname" style={{ width: '50%' }} />
							<TextInput type='text' placeholder="lastname" style={{ width: '50%' }} />
						</FlexContainer>

						<FlexContainer>
							<TextInput type='password' placeholder="password" style={{ width: '100%' }} />
						</FlexContainer>

						<FlexContainer>
							<SubmitButton>Submit</SubmitButton>
						</FlexContainer>
						<div>
							<p>
								Already have an account?
								<NewUserLink onClick={handleNewUserClick}>  Click here</NewUserLink>
							</p>

						</div>
					</FormContainer>
				</LoginFormWrapper>
			</OuterWrapper>
		</LoginWrapper>
	)
}

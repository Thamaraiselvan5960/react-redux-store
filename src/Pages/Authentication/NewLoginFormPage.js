import React from 'react';
import { styled } from 'styled-components';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthSelectors } from '../../store/authentication';
import { PathConstants } from '../../routers/pathConstants';

const OuterWrapper = styled.div`
	background-color: #f4f9ff;
	height: 100vh;
	width: 100vw;
	display: flex;	
	justify-content: center;
	align-items: center;
`;

const SignupWrapper = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  width: 70%;
  margin: 0 auto;
  height: auto;
  border-radius: 2rem;
  position: relative;
`;

const Left = styled.div`
  width: 40%;
  background-color: rgba(25, 26, 93, 255);
  color: white;
  padding: 2em;
`;

const Right = styled.div`
  width: 60%;
  background-color: rgba(246, 245, 251, 255);
  padding: 3em;
`;

const Heading = styled.h1`
//   width: 40%;
  padding-bottom: 1em;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 1em;
  border-radius: 0.4rem;
  border: none;
  width: 60%;
  margin-bottom: 1em;
  font-weight: 500;

  &:focus {
    border: 2px solid rgba(25, 26, 93, 255);
    outline: none;
  }
`;

const Button = styled.button`
  width: 60%;
  padding: 1em;
  border-radius: 2px;
  background-color: rgba(25, 26, 93, 255);
  color: white;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const Query = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 1em;
  font-size: 14px;
  font-weight: bold;
`;

const Center = styled.div`
  padding-top: 3em;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
`;

export const NewLoginFormPage = () => {
	const navigate = useNavigate();
	const token = useSelector(AuthSelectors.getToken);

	const handleNewUserClick = () => {
		navigate('/register', { replace: true });
	};

	console.log('object', token)


	// Uncomment this block to enforce authentication
	if (token) {
		return <Navigate to={PathConstants.DASHBOARD} replace />;
	}
	return (
		<OuterWrapper>
			<SignupWrapper>
				<Container>
					<Left>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
							class="bi bi-bootstrap" viewBox="0 0 16 16">
							<path
								d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" />
							<path
								d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z" />
						</svg>
						<Heading>Implement user onboarding experiences with just a few clicks</Heading>
						<br />
						<div className="sub-heading center">
							<p>Guide your customers on a fantastic journey within your web app.</p>
						</div>
						<br />
					</Left>
					<Right>
						<Heading>Create your Account</Heading>
						<form>
							<div className="form-group">
								<Label for="username" style={{ display: 'inline-block', margin: '5px 0' }}>
									Name
								</Label>
								<br />
								<Input type="text" id="username" name="username" />
							</div>
							<div>
								<Label for="email" style={{ display: 'inline-block', margin: '5px 0' }}>
									Email
								</Label>
								<br />
								<Input type="email" id="email" name="email" />
							</div>
							<div>
								<Label for="password" style={{ display: 'inline-block', margin: '5px 0' }}>
									Password
								</Label>
								<br />
								<Input type="password" id="password" name="password" />
							</div>
							<div>
								<Button>Sign Up</Button>
							</div>
						</form>
						<Query>Having trouble? <a href="#">Get Here</a></Query>
					</Right>
				</Container>
			</SignupWrapper>
		</OuterWrapper>
	)
}

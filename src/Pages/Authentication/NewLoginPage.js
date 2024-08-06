import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { GoogleOAuth } from '../../components/Oauth/GoogleOAuth';
import { Button } from '@material-ui/core';
import { useGoogleLogin } from '@react-oauth/google';




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
  margin: 0 auto;
  border-radius: 2rem;
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
  font-size: 30px;
  font-weight: bold;
`;

const Center = styled.div`
  padding-top: 3em;
`;

const Email = styled.div`
  background-color: white;
  border: none;
  padding: 1em;
  margin: 1em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
`;

const GmailLogin = styled.div`
	background-color: white;
  border: none;
  padding: 1em;
  margin: 1em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  width: 90%;

  &:hover {
	cursor: pointer;
  }
`;

const SocialIcon = styled.span`
  background-color: #eae9fc;
  padding: 0.5rem;
  border-radius: 4px;
`;

const Login = styled.p`
  padding-left: 1em;
  font-size: 14px;
  font-weight: bold;
`;

const Signup = styled.div`
	width: 80%;
`;

export const NewLoginPage = () => {

	
	const login = useGoogleLogin({
		onSuccess: codeResponse => console.log(codeResponse),
		flow: 'auth-code',
	});
	return (
		<OuterWrapper>
			<SignupWrapper>
				<Container>
					<Left>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
							<path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" />
							<path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z" />
						</svg>
						<Center>
							<p>Implement user onboarding experiences with just a few clicks</p>
						</Center>
						<br />
						<Center>
							<p>Guide your customers on a fantastic journey within your web app.</p>
						</Center>
					</Left>
					<Right>
						<Heading>Get started</Heading>
						<Signup>
							<Link to="/login" className="no-link-styles">
								<Email>
									<SocialIcon>
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
											viewBox="0 0 24 24" id="email">
											<path fill="none" d="M0 0h24v24H0V0z"></path>
											<path
												d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z">
											</path>
										</svg>
									</SocialIcon>
									<span>Sign up with email</span>
								</Email>
							</Link>
							<GmailLogin onClick={() => login()}>

								<SocialIcon>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
										viewBox="0 0 32 32" id="google">
										<path fill="#00ac47"
											d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16">
										</path>
										<path fill="#4285f4"
											d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16">
										</path>
										<path fill="#ffba00"
											d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z">
										</path>
										<polygon fill="#2ab2db" points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374">
										</polygon>
										<path fill="#ea4435"
											d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z">
										</path>
										<polygon fill="#2ab2db" points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626">
										</polygon>
										<path fill="#4285f4" d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"></path>
									</svg>
								</SocialIcon>
								<span>Sign up with Google</span>
							</GmailLogin>
							<Email>
								<SocialIcon >
									<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28"
										height="28" viewBox="0 0 48 48">
										<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
										<path fill="#fff"
											d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z">
										</path>
									</svg>
								</SocialIcon>
								<span>Sign up with Facebook</span>
							</Email>
						</Signup>
					</Right>
				</Container>
			</SignupWrapper>

		</OuterWrapper>
	)
}

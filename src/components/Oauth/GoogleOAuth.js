import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout, useGoogleOneTapLogin } from '@react-oauth/google';
import { decodeJwtToken } from './utils';



export const GoogleOAuth = () => {

	const responseMessage = (response) => {
		console.log('Login Success:', response);
		const user_info = decodeJwtToken(response.credential, ['email', 'name', 'picture']);

		console.log(user_info)
		// You can also get the user's profile information from the response
		const userProfile = response.profileObj;
		console.log('User Profile:', userProfile);
		// You can then store the user's profile information in your app's state or database
		// For example:
		// setUserProfile(userProfile);
	};

	const errorMessage = (error) => {
		console.error('Login Error:', error);
		// You can also display an error message to the user
		alert(`Error: ${error.message}`);
	};
	return (
		<div>
			<GoogleOAuthProvider clientId="996791026306-0259k42q4ddvqf5o354lutb7a6h3tc96.apps.googleusercontent.com">
				<GoogleLogin
					onSuccess={responseMessage}
					onError={errorMessage}
					cookiePolicy={'single_host_origin'}
					isSignedIn={true}
				/>
			</GoogleOAuthProvider>

		</div >
	)
}


export const GoogleLogoutButton = () => {

	const ButtonStyle = {
		backgroundColor: '#4CAF50',
		color: 'white',
		padding: '10px 20px',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
	}
	const handleLogout = () => {
		console.log('logout')
		googleLogout();
	};

	return (
		<button onClick={handleLogout} style={{ ...ButtonStyle }}>Logout</button>
	)
}

export const GoogleOAuthOneTap = () => {
	useGoogleOneTapLogin({
		onSuccess: credentialResponse => {
			console.log(credentialResponse);
		},
		onError: () => {
			console.log('Login Failed');
		},
	});

	const handleLogout = () => {
		console.log('logout');
		googleLogout();
	};

	return (
		<div>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};
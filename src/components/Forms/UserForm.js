import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Grid, TextField, Typography, FormControl, FormLabel, FormGroup, FormControlLabel, Button } from '@mui/material';

import { styled } from 'styled-components';

const ButtonWrapper = styled.div`
	margin-top: 2rem;
`;

const CustomErrorMessage = styled(ErrorMessage)`
  color: #ff0000; /* change the error message color to a bright pink */
`;

const userFormSchema = Yup.object().shape({
	username: Yup.string()
		.required('Username is required')
		.min(3, 'Username must be at least 3 characters'),
	email: Yup.string()
		.required('Email is required')
		.email('Invalid email address'),
	mobileNumber: Yup.string()
		.required('Mobile number is required')
		.matches(/^[0-9]{10}$/, 'Invalid mobile number'),
	gender: Yup.string()
		.required('Gender is required')
		.oneOf(['male', 'female', 'other'], 'Invalid gender'),
	city: Yup.string()
		.required('City is required'),
	state: Yup.string()
		.required('State is required'),
	postalCode: Yup.string()
		.required('Postal code is required')
		.matches(/^[0-9]{6}$/, 'Invalid postal code'),
	country: Yup.string()
		.required('Country is required'),
});

export const UserForm = ({ userData }) => (
	<Formik
		initialValues={{
			username: userData.username,
			email: userData.email,
			mobileNumber: userData.mobileNumber,
			gender: userData.gender,
			city: userData.city,
			state: userData.state,
			postalCode: userData.postalCode,
			country: userData.country,
		}}
		validationSchema={userFormSchema}
		onSubmit={(values, { setSubmitting }) => {
			// Submit the form data to your API or backend
			console.log(values);
			setSubmitting(false);
		}}
	>
		{({ isSubmitting, isValid }) => (
			<Form>
				<Grid container spacing={2}>
					<Grid item sm={12} md={6}>
						<Typography variant="body1">Username:</Typography>
						<Field type="text" name="username" as={TextField} fullWidth />
						<CustomErrorMessage name="username" component="div" />
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography variant="body1">Email:</Typography>
						<Field type="email" name="email" as={TextField} fullWidth />
						<CustomErrorMessage name="email" component="div" />
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography variant="body1">Mobile Number:</Typography>
						<Field type="tel" name="mobileNumber" as={TextField} fullWidth />
						<CustomErrorMessage name="mobileNumber" component="div" />
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography variant="body1" gutterBottom>Gender:</Typography>
						<FormControl component="fieldset">
							<FormGroup row>
								<FormControlLabel
									control={<Field type="radio" name="gender" value="male" />}
									label="Male"
								/>
								<FormControlLabel
									control={<Field type="radio" name="gender" value="female" />}
									label="Female"
								/>
								<FormControlLabel
									control={<Field type="radio" name="gender" value="other" />}
									label="Other"
								/>
							</FormGroup>
							<CustomErrorMessage name="gender" component="div" />
						</FormControl>
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography variant="body1">City:</Typography>
						<Field type="text" name="city" as={TextField} fullWidth />
						<CustomErrorMessage name="city" component="div" />
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography variant="body1">State:</Typography>
						<Field type="text" name="state" as={TextField} fullWidth />
						<CustomErrorMessage name="state" component="div" />
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography variant="body1">Postal Code:</Typography>
						<Field type="text" name="postalCode" as={TextField} fullWidth />
						<CustomErrorMessage name="postalCode" component="div" />
					</Grid>
					<Grid item sm={12} md={6}>
						<Typography variant="body1">Country:</Typography>
						<Field type="text" name="country" as={TextField} fullWidth />
						<CustomErrorMessage name="country" component="div" />
					</Grid>
				</Grid>
				<ButtonWrapper>

					<Button
						type="submit"
						// onClick={handleSubmit}
						disabled={isSubmitting || !isValid}
						variant="contained"
						color="primary"
					>
						Submit
					</Button>
				</ButtonWrapper>
			</Form>
		)}
	</Formik>
);

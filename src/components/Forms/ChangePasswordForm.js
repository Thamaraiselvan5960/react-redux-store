import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography, TextField, Button } from '@mui/material';

export const ChangePasswordForm = () => {
	const initialValues = {
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	};

	const handleSubmit = (values, { setSubmitting }) => {
		// Submit the form data to your API or backend
		console.log(values);
		setSubmitting(false);
	};

	// Modify the validation schema to include the new fields
	const validationSchema = Yup.object().shape({
		currentPassword: Yup.string()
			.required('Current password is required')
			.min(8, 'Current password must be at least 8 characters'),
		newPassword: Yup.string()
			.required('New password is required')
			.min(8, 'New password must be at least 8 characters')
			.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				'New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
		confirmPassword: Yup.string()
			.required('Confirm password is required')
			.oneOf([Yup.ref('newPassword'), null], 'Confirm password must match new password'),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting, isValid }) => (
				<Form>
					<Grid container spacing={2}>
						<Grid item sm={12} md={6}>
							<Typography variant="body1">Current Password:</Typography>
							<Field type="password" name="currentPassword" as={TextField} fullWidth />
							<ErrorMessage name="currentPassword" component="div" />
						</Grid>
						<Grid item sm={12} md={6}>
							<Typography variant="body1">New Password:</Typography>
							<Field type="password" name="newPassword" as={TextField} fullWidth />
							<ErrorMessage name="newPassword" component="div" />
						</Grid>
						<Grid item sm={12} md={6}>
							<Typography variant="body1">Confirm Password:</Typography>
							<Field type="password" name="confirmPassword" as={TextField} fullWidth />
							<ErrorMessage name="confirmPassword" component="div" />
						</Grid>
					</Grid>
					<Button
						type="submit"
						disabled={isSubmitting || !isValid}
						variant="contained"
						color="primary"
					>
						Change Password
					</Button>
				</Form>
			)}
		</Formik>
	)
}

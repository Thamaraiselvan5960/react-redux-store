import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PathConstants } from "./pathConstants";

// Import pages
import { LandingPage } from "../Pages/LandingPage";
import { ContactUs } from "../Pages/ContactUs";
import { Support } from "../Pages/Support";
import { Dashboard } from "../Pages/Dashboard";
import { Profile } from "../Pages/Profile";
import { Sites } from "../Pages/Sites";
import { Settings } from "../Pages/Settings";
import { ForgotPasswordPage, LoginPage, RegisterPage, ResetPasswordPage } from "../Pages/Authentication";
import { AuthSelectors } from "../store/authentication";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
	const token = useSelector(AuthSelectors.getToken);

	// Uncomment this block to enforce authentication
	if (!token) {
		return <Navigate to={PathConstants.LOGIN} replace />;
	}

	return (
		<Routes>
			{/* Use empty path with nested routes */}
			<Route path={''} element={<LandingPage />}>
				<Route path={PathConstants.DASHBOARD} element={<Dashboard />} />
				<Route path={PathConstants.PROFILE} element={<Profile />} />
				<Route path={PathConstants.SITES} element={<Sites />} />
				<Route path={PathConstants.CONTACT_US} element={<ContactUs />} />
				<Route path={PathConstants.SUPPORT} element={<Support />} />
				<Route path={PathConstants.SETTINGS} element={<Settings />} />
			</Route>
		</Routes>
	);
};

export const MyRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PathConstants.LOGIN} element={<LoginPage />} />
				<Route path={PathConstants.REGISTER} element={<RegisterPage />} />
				<Route path={PathConstants.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
				<Route path={PathConstants.RESET_PASSWORD} element={<ResetPasswordPage />} />

				{/* Use HOME as the parent route for protected routes */}
				<Route path={'*'} element={<ProtectedRoutes />} />
			</Routes>
		</BrowserRouter>
	);
};

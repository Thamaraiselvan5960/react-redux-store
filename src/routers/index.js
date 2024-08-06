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
import { SiteDetails } from "../Pages/SiteDetails";

import toast, { Toaster } from 'react-hot-toast';
import { NewProfile } from "../Pages/NewProfile";
import { Loans } from "../Pages/Loans";
import { SiteListView } from "../Pages/SiteList";
import { NewLoginPage } from "../Pages/Authentication/NewLoginPage";
import { NewLoginFormPage } from "../Pages/Authentication/NewLoginFormPage";


const toastConfig = {
	position: 'top-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};


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
				<Route path={PathConstants.PROFILE} element={<NewProfile />} />
				<Route path={PathConstants.SITES} element={<SiteListView />} />
				<Route path={PathConstants.SITE_DETAILS} element={<SiteDetails />} />
				<Route path={PathConstants.CONTACT_US} element={<ContactUs />} />
				<Route path={PathConstants.SUPPORT} element={<Support />} />
				<Route path={PathConstants.LOANS} element={<Loans />} />
				<Route path={PathConstants.SETTINGS} element={<Settings />} />
			</Route>
		</Routes>
	);
};

export const MyRoutes = () => {
	return (
		<BrowserRouter>
			<Toaster {...toastConfig} />
			<Routes>

				<Route path={PathConstants.LOGIN} element={<NewLoginFormPage />} />
				<Route path={PathConstants.REGISTER} element={<NewLoginPage />} />
				<Route path={PathConstants.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
				<Route path={PathConstants.RESET_PASSWORD} element={<ResetPasswordPage />} />

				{/* Use HOME as the parent route for protected routes */}
				<Route path={'*'} element={<ProtectedRoutes />} />
			</Routes>
		</BrowserRouter>
	);
};

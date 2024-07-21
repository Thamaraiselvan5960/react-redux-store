import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PathConstants } from "./pathConstants";

// import pages
import { LandingPage } from "../Pages/LandingPage";
import { ContactUs } from "../Pages/ContactUs";
import { Support } from "../Pages/Support";
import { Dashboard } from "../Pages/Dashboard";
import { Profile } from "../Pages/Profile";
import { Sites } from "../Pages/Sites";
import { Settings } from "../Pages/Settings";




export const MyRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PathConstants.HOME} element={<LandingPage />} >
					<Route path={PathConstants.DASHBOARD} element={<Dashboard />} />
					<Route path={PathConstants.PROFILE} element={<Profile />} />
					<Route path={PathConstants.SITES} element={<Sites />} />
					<Route path={PathConstants.CONTACT_US} element={<ContactUs />} />
					<Route path={PathConstants.SUPPORT} element={<Support />} />
					<Route path={PathConstants.SUPPORT} element={<Settings />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}



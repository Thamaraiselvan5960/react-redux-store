import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MailIcon from '@mui/icons-material/Mail';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link, useLocation, Outlet } from 'react-router-dom';

import { styled } from 'styled-components';

const drawerWidth = 240;

const MainWrapper = styled.div`
	background-color: #f4f9ff;
	height: calc( 100% - 64px );
	overflow-y: auto;
`;

export const LandingPage = () => {
	const location = useLocation();

	return (
		<Box sx={{ display: 'flex', height: '100%' }}>
			<CssBaseline />
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Clipped drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
					<List>
						<ListItem key={'Dashboard'} disablePadding>
							<ListItemButton
								component={Link}
								to="/"
								sx={{
									backgroundColor:
										location.pathname === '/' ? '#f0f0f0' : 'transparent',
								}}
							>
								<ListItemIcon>
									<DashboardIcon />
								</ListItemIcon>
								<ListItemText primary={'Dashboard'} />
							</ListItemButton>
						</ListItem>
						<ListItem key={'Profile'} disablePadding>
							<ListItemButton
								component={Link}
								to="/profile"
								sx={{
									backgroundColor:
										location.pathname === '/profile' ? '#f0f0f0' : 'transparent',
								}}
							>
								<ListItemIcon>
									<AccountBoxIcon />
								</ListItemIcon>
								<ListItemText primary={'Profile'} />
							</ListItemButton>
						</ListItem>
						<ListItem key={'Sites'} disablePadding>
							<ListItemButton
								component={Link}
								to="/sites"
								sx={{
									backgroundColor:
										location.pathname === '/sites' ? '#f0f0f0' : 'transparent',
								}}
							>
								<ListItemIcon>
									<LocationCityIcon />
								</ListItemIcon>
								<ListItemText primary={'Sites'} />
							</ListItemButton>
						</ListItem>
						<ListItem key={'Settings'} disablePadding>
							<ListItemButton
								component={Link}
								to="/settings"
								sx={{
									backgroundColor:
										location.pathname === '/settings' ? '#f0f0f0' : 'transparent',
								}}
							>
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemText primary={'Settings'} />
							</ListItemButton>
						</ListItem>

						<ListItem key={'Support'} disablePadding>
							<ListItemButton
								component={Link}
								to="/support"
								sx={{
									backgroundColor:
										location.pathname === '/support' ? '#f0f0f0' : 'transparent',
								}}
							>
								<ListItemIcon>
									<SupportAgentIcon />
								</ListItemIcon>
								<ListItemText primary={'Support'} />
							</ListItemButton>
						</ListItem>

						<ListItem key={'Loans'} disablePadding>
							<ListItemButton
								component={Link}
								to="/loans"
								sx={{
									backgroundColor:
										location.pathname === '/loans' ? '#f0f0f0' : 'transparent',
								}}
							>
								<ListItemIcon>
									<AccountBalanceWalletIcon />
								</ListItemIcon>
								<ListItemText primary={'Loans'} />
							</ListItemButton>
						</ListItem>

					</List>
					<Divider />
					{/* Top menu ends here */}
					{/* Bottom menu starts here */}
					<List>
						<ListItem key={'Login'} disablePadding>
							<ListItemButton
								component={Link}
								to="/login"
								sx={{
									backgroundColor:
										location.pathname === '/login' ? '#f0f0f0' : 'transparent',
								}}
							>
								<ListItemIcon>
									<LoginIcon />
								</ListItemIcon>
								<ListItemText primary={'Login'} />
							</ListItemButton>
						</ListItem>

						<ListItem key={'Logout'} disablePadding>
							<ListItemButton
								component={Link}
								to="/logout"
								sx={{
									backgroundColor:
										location.pathname === '/logout' ? '#f0f0f0' : 'transparent',
								}}
							>
								<ListItemIcon>
									<LogoutIcon />
								</ListItemIcon>
								<ListItemText primary={'Logout'} />
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1 }}>
				<Toolbar />
				<MainWrapper>
					<Outlet />
				</MainWrapper>

			</Box>
		</Box>
	);
}

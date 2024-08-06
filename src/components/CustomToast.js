import React from 'react';
import toast from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';

import { styled } from 'styled-components';

const ToastWrapper = styled.div`
	padding: 1rem;
	border-left: 3px solid blue;
`;

const MessageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 300px;
`;





export const CustomToast = ({ message, t }) => {
	return (
		<ToastWrapper>
			<MessageWrapper>
				<span>{message}</span>
				<span><CloseIcon style={{ color: 'black' }} onClick={() => toast.dismiss(t.id)} /></span>
			</MessageWrapper>
		</ToastWrapper>
	)
}

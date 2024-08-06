import toast from 'react-hot-toast';


export const notifier = (message, severity = 'success') => {

	let notifier = toast

	if (severity === 'success') {
		notifier = toast.success
	} else if (severity === 'error') {
		notifier = toast.error
	} else {
		notifier = toast
	}

	notifier(message, {
		position: 'top-right',
		theme: {
			primary: 'blue',
			danger: 'red',
			warn: 'yellow',
			info: 'green',
			success: 'green',
		},
		style: {
			color: '#713200',
			borderRadius: '0px',
			boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
		}
	});
};
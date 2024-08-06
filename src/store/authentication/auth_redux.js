// auth_redux.js
import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions(
	{
		login: ["username", "password"], // saga function
		loginSuccess: ["token"],
		loginFailure: ["error"],

		signup: ["username", "email", "password"], // saga function
		signupSuccess: ["token"],
		signupFailure: ["error"],

		forgotPassword: ["email"], // saga function
		forgotPasswordSuccess: ["message"],
		forgotPasswordFailure: ["error"],

		resetPassword: ["token", "password"], // saga function
		resetPasswordSuccess: ["message"],
		resetPasswordFailure: ["error"],
	},
	{
		prefix: "@@AUTH/"
	}
);

export const AuthTypes = Types;
export const AuthActions = Creators;

// initialize state

export const AUTH_INITIAL_STATE = Immutable({
	token: 'ksjh',
	error: null,
	message: null
});

// selectors

export const AuthSelectors = {
	getToken: (state) => state.auth.token || null,
	getError: (state) => state.auth.error || null,
	getMessage: (state) => state.auth.message || null
};

// reducers

const loginSuccess = (state, { token }) => {
	return state.merge({
		token: token,
		error: null
	});
};

const loginFailure = (state, { error }) => {
	return state.merge({
		token: null,
		error: error
	});
};

const signupSuccess = (state, { token }) => {
	return state.merge({
		token: token,
		error: null
	});
};

const signupFailure = (state, { error }) => {
	return state.merge({
		token: null,
		error: error
	});
};

const forgotPasswordSuccess = (state, { message }) => {
	return state.merge({
		message: message,
		error: null
	});
};

const forgotPasswordFailure = (state, { error }) => {
	return state.merge({
		message: null,
		error: error
	});
};

const resetPasswordSuccess = (state, { message }) => {
	return state.merge({
		message: message,
		error: null
	});
};

const resetPasswordFailure = (state, { error }) => {
	return state.merge({
		message: null,
		error: error
	});
};

// hookup reducers to types
export const authReducer = createReducer(AUTH_INITIAL_STATE, {
	[Types.LOGIN_SUCCESS]: loginSuccess,
	[Types.LOGIN_FAILURE]: loginFailure,
	[Types.SIGNUP_SUCCESS]: signupSuccess,
	[Types.SIGNUP_FAILURE]: signupFailure,
	[Types.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
	[Types.FORGOT_PASSWORD_FAILURE]: forgotPasswordFailure,
	[Types.RESET_PASSWORD_SUCCESS]: resetPasswordSuccess,
	[Types.RESET_PASSWORD_FAILURE]: resetPasswordFailure
});



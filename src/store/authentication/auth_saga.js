// auth_saga.js
import { put, call } from "redux-saga/effects";
import { AuthActions } from "./auth_redux";
import { requestSaga } from "../helpers/request_saga";

export function* login(api, { username, password }) {
	const response = yield call(requestSaga, {
		loadingSection: "login",
		errorSection: "login",
		apiMethod: api.login,
		data: { username, password },
		successAction: AuthActions.loginSuccess,
		failureAction: AuthActions.loginFailure
	});
}

export function* signup(api, { username, email, password }) {
	const response = yield call(requestSaga, {
		loadingSection: "signup",
		errorSection: "signup",
		apiMethod: api.signup,
		data: { username, email, password },
		successAction: AuthActions.signupSuccess,
		failureAction: AuthActions.signupFailure
	});
}

export function* forgotPassword(api, { email }) {
	const response = yield call(requestSaga, {
		loadingSection: "forgotPassword",
		errorSection: "forgotPassword",
		apiMethod: api.forgotPassword,
		data: { email },
		successAction: AuthActions.forgotPasswordSuccess,
		failureAction: AuthActions.forgotPasswordFailure
	});
}

export function* resetPassword(api, { token, password }) {
	const response = yield call(requestSaga, {
		loadingSection: "resetPassword",
		errorSection: "resetPassword",
		apiMethod: api.resetPassword,
		data: { token, password },
		successAction: AuthActions.resetPasswordSuccess,
		failureAction: AuthActions.resetPasswordFailure
	});
}
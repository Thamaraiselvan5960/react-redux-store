// auth_root_saga.js
import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { login, signup, forgotPassword, resetPassword } from "./auth_saga";
import { AuthTypes } from "./auth_redux";

export function* authRootSaga(api) {
	yield all([
		takeLatest(AuthTypes.LOGIN, login, api),
		takeLatest(AuthTypes.SIGNUP, signup, api),
		takeLatest(AuthTypes.FORGOT_PASSWORD, forgotPassword, api),
		takeLatest(AuthTypes.RESET_PASSWORD, resetPassword, api)
	]);
}
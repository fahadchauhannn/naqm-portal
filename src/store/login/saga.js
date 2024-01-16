import { call, put, takeEvery } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"

import { LoginHelper } from "../../helpers/auth_api_helper"
import { LOCAL_STORAGE_KEYS } from "../../constants/constant"
import parseJwt from "helpers/decode-jwt"

function* loginUser({ payload: { user, history } }) {
  try {
    console.log("Start")
    const response = yield call(LoginHelper, {
      email: user.email,
      password: user.password,
    })
    console.log("Finish", response)
    if (response.success === false) {
      console.log(response.error)
      yield put(apiError(response.error))
      return
    }
    // decode jwt token
    const decoded = parseJwt(response.access_token)
    localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_USER, JSON.stringify(response))
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(decoded))
    localStorage.setItem(LOCAL_STORAGE_KEYS.ROLE, decoded.role)
    yield put(loginSuccess(response))
    history("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_USER)
    history("/login")
    yield put(logoutUserSuccess())
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga

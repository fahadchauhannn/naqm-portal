import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import contactsSaga from "./contacts/saga"
import jobsSaga from "./jobs/saga"

import dashboardSaga from "./dashboard/saga"

import dashboardJobSaga from "./dashboard-jobs/saga"

export default function* rootSaga() {
  yield all([
    //public
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(jobsSaga),
    fork(LayoutSaga),
    fork(contactsSaga),
    fork(dashboardSaga),
    fork(dashboardJobSaga),
  ])
}

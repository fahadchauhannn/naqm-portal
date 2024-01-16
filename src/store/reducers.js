import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//E-commerce
import ecommerce from "./e-commerce/reducer"

//crypto
import crypto from "./crypto/reducer"

//jobs
import JobReducer from "./jobs/reducer"

//contacts
import contacts from "./contacts/reducer"

//Dashboard
import Dashboard from "./dashboard/reducer"

import DashboardJob from "./dashboard-jobs/reducer"

import Toast from "./toast/reducer"

import Loading from "./loading/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Toast,
  Loading,
  Account,
  ForgetPassword,
  Profile,
  ecommerce,
  crypto,
  JobReducer,
  contacts,
  Dashboard,
  DashboardJob,
})

export default rootReducer

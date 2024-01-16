import axios from "axios"
import authHeader from "./jwt-token-access/auth-token-header"
import { BASE_URL } from "./url_helper"
import { addLoading, removeLoading } from "store/loading/actions"
import store from "../store/index"
import toastr from "toastr"
import { logoutUser } from "../store/actions"
const axiosApi = axios.create({
  baseURL: BASE_URL,
})

axiosApi.interceptors.request.use(
  config => {
    const headers = authHeader()
    const url = config.url
    store.dispatch(addLoading(url))
    if (headers) {
      let newConfig = { ...config, headers }

      return newConfig
    }
    console.log("config", config)
    return config
  },
  error => {
    Promise.reject(error)
  }
)

const responseSuccess = response => {
  const url = response.config.url
  store.dispatch(removeLoading(url))
  if (response.message) {
    toastr.success(response.message)
  } else if (response.data.message) {
    toastr.success(response.data.message)
  }
  return response
}
const responseError = error => {
  const url = error.config.url
  store.dispatch(removeLoading(url))
  if (
    error.response.data.statusCode === 401 &&
    error.response.data.message === "Unauthorized"
  ) {
    store.dispatch(logoutUser(history))
  }
  if (error?.response?.data?.message) {
    toastr.error(error.response.data.message)
  } else if (error?.message) {
    toastr.error(error.message)
  }
  return Promise.reject(error)
}

axiosApi.interceptors.response.use(
  response => responseSuccess(response),
  error => responseError(error)
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  console.log(data, "Data")
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}

export default axiosApi

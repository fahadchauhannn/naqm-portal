import { post } from "./api_helper"
import { LOGIN_URL } from "./url_helper"
const LoginHelper = async ({ email, password }) => {
  try {
    const res = await post(LOGIN_URL, {
      email,
      password,
    })
    return res.data
  } catch (error) {
    let { response } = error
    if (response) {
      let { data } = response
      return {
        success: false,
        error: data?.message ? data.message : "Somthing Went Wrong",
      }
    }
    return { success: false, error: error?.message }
  }
}

export { LoginHelper }

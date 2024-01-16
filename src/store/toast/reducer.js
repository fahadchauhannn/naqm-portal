import { ADD_TOAST } from "./actionTypes"
import { uniqueId } from "lodash"

const initialState = {
  message: "",
  type: "",
  uniqueId: "",
}

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        message: action.payload.message,
        type: action.payload.type,
        uniqueId: uniqueId("toast_"),
      }
    default:
      return state
  }
}

export default toastReducer

import { ADD_TOAST } from "./actionTypes"

export const addToast = (message, type) => ({
  type: ADD_TOAST,
  payload: {
    message,
    type,
  },
})

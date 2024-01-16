import { ADD_LOADING, REMOVE_LOADING } from "./actionTypes"

export const addLoading = url => ({
  type: ADD_LOADING,
  payload: url,
})

export const removeLoading = url => ({
  type: REMOVE_LOADING,
  payload: url,
})

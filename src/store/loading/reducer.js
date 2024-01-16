import { ADD_LOADING, REMOVE_LOADING } from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  loadingList: [],
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOADING:
      const url = action.payload
      console.log(url, "UUURRRLL")
      if (state.loadingList.includes(url)) {
        return state
      }
      return {
        ...state,
        loading: true,
        loadingList: [...state.loadingList, action.payload],
      }
    case REMOVE_LOADING:
      const index = state.loadingList.indexOf(action.payload)
      if (index > -1) {
        state.loadingList.splice(index, 1)
      }
      if (state.loadingList.length === 0) {
        return {
          ...state,
          loading: false,
          loadingList: [],
        }
      }
      return {
        ...state,
        loading: true,
        loadingList: [...state.loadingList],
      }
    default:
      return state
  }
}

export default loadingReducer

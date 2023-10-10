import { categoryConstants } from '../action/constants'

const initialState = {
  categories: [],
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORY_REQUEST:
      state = {
        ...state,
        loading:true
      }
      break;
    case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        categories: action.payload.categories
      }
      break;
    case categoryConstants.GET_ALL_CATEGORY_FAILURE:
      state = {
        ...initialState
      }
      break;

  }
  return state
}

import { addressConstants } from '../action/constants'

const initialState = {
  address: [],
  error: null,
  loading: false,
  message:"",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case addressConstants.GET_ADDRESS_REQUEST:
      state = {
        ...state,
        loading:true
      }
      break;
    case addressConstants.GET_ADDRESS_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        address: action.payload.address,
      }
      break;
    case addressConstants.GET_ADDRESS_FAILURE:
      state = {
        loading: true,
        ...initialState
      }
      break;
      case addressConstants.ADD_ADDRESS_REQUEST:
      state = {
        ...state,
        loading:true
      }
      break;
    case addressConstants.ADD_ADDRESS_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      }
      break;
    case addressConstants.ADD_ADDRESS_FAILURE:
      state = {
        loading: true,
        error: action.payload.error,
        ...initialState
      }
      break;

  }
  return state
}

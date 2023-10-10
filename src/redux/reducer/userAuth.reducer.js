import { authConstants } from '../action/constants'

const initialState = {
  token: null,
  user: {
    _id: '',
    firstname: '',
    lastname: '',
    email: '',
    avtar: '',
    role: '',
    contact_number: '',
  },
  authenticate: false,
  authenticating: true,
  loading: true,
  error: null,
  message: ''
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticate: false,
        authenticating: true
      }
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        message: action.payload.message,
      }
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        authenticate: false,
        authenticating: true
      }
      break;

    case authConstants.REGISTER_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case authConstants.REGISTER_SUCCESS:
      state = {
        message: action.payload.message,
        loading: false
      }
      break;
    case authConstants.REGISTER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: true
      }
      break;

    case authConstants.UPDATE_PROFILE_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break;
    case authConstants.UPDATE_PROFILE_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      }
      break;
    case authConstants.UPDATE_PROFILE_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: true
      }
      break;

    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
      }
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initialState
      }
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      }
      break;

    default: state = {
      ...state,
    }
  }
  return state
}

export default authReducer;

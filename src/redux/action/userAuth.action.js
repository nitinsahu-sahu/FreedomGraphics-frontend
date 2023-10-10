import axios from "../helper/axios";
import { authConstants, cartConstants } from "./constants";

export const getProfileData = () => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.GET_PROFILE_REQUEST
    });
    await axios.get(`/getProfile`).then(function (response) {
      dispatch({
        type: authConstants.GET_PROFILE_SUCCESS,
        payload: {
          user: response.data.data,
          message: response.data.message
        }
      })
    }).catch(function (error) {
      dispatch({
        type: authConstants.GET_PROFILE_FAILURE,
        payload: {
          error: error.data.errors,
        }
      })
    });
  }
}
// ----------------Create User-------------------
export const registerUser = (adminData) => {
  const { email, password, confirm_pwd, contact_number, first_name, last_name } = adminData
  return async (dispatch) => {
    dispatch({
      type: authConstants.REGISTER_REQUEST
    });
    await axios.post(`/signup`, {
      email, password, confirm_pwd, contact_number, first_name, last_name
    }).then(function (response) {
      dispatch({
        type: authConstants.REGISTER_SUCCESS,
        payload: {
          message: response.data.message
        }
      })
    }).catch(function (error) {
      dispatch({
        type: authConstants.REGISTER_FAILURE,
        payload: {
          error: error.response.data.errors,
        }
      })
    });
  }
}

// --------------User login------------------------
export const userLogin = (user_Login_Data) => {
  let { email, password } = user_Login_Data
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST
    });
    await axios.post(`/signin`, { email, password }).then(function (response) {
      const token = response.data.token;
      const user = response.data.data;
      localStorage.setItem('user_token', token);
      localStorage.setItem('user_info', JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
          message: response.data.message
        }
      })
    }).catch(function (error) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: error.response.data.errors,
        }
      })
    });
  }
}

// ----------User Login or not
export const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem('user_token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user_info'));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user
        }
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          message: 'Failed to login!!!'
        }
      })
    }
  }
}


export const signout = () => {
  return async dispatch => {
    dispatch({
      type: authConstants.LOGOUT_REQUEST
    });
    await axios.post(`/signout`).then((response) => {
      localStorage.clear()
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
        payload: {
          message: response.data.message
        }
      })
      dispatch(isUserLoggedIn())
      dispatch({
        type: cartConstants.RESET_CART_SUCCESS,
      });
    }).catch((error) => {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {
          error: error.data.error
        }
      });
    })
  }
}

export const updateProfileData = (formData) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.UPDATE_PROFILE_REQUEST
    });
    await axios.put(`/editProfile`, formData).then(function (response) {
      const user = response.data.data;
      localStorage.setItem('user_info', JSON.stringify(user));
      dispatch({
        type: authConstants.UPDATE_PROFILE_SUCCESS,
        payload: {
          user,
          message: response.data.message
        }
      })
      dispatch(getProfileData())
    }).catch(function (error) {
      dispatch({
        type: authConstants.UPDATE_PROFILE_FAILURE,
        payload: {
          error: error.data.errors,
        }
      })
    });
  }
}




import { cartConstants } from '../action/constants'

const initialState = {
  loading: true,
  updateingCart: false,
  cartItems: {
    // 123: {
    //   _id: 123,
    //   name: 'pro name',
    //   img: 'same.jpg',
    //   price: 200;
    //   qty: 1
    // }
  },
  total_items: {},
  error: null,
  message: ''
};
export default (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        loading: true,
        updateingCart: false,
      };
      break;
    case cartConstants.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
        loading: false,
        updateingCart: true,
      };
      break;
    case cartConstants.ADD_TO_CART_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: true,
        updateingCart: false,
      };
      break;
    case cartConstants.GET_CART_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case cartConstants.GET_CART_SUCCESS:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
        loading: false,
      };
      break;
    case cartConstants.GET_CART_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: true,
      };
      break;
    case cartConstants.RESET_CART_SUCCESS:
      state = {
        ...initialState
      };
      break;
  }
  return state
}


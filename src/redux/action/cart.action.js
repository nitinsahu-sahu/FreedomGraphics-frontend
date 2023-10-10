import { cartConstants } from "./constants";
import store from "../store/index";
import axios from "../helper/axios";

// ---------------------Get CArt Items------------------
const getCartItems = () => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.GET_CART_REQUEST
    });
    await axios.post(`/getCartItems`).then((response) => {
      const { cartItems } = response.data;
      if (cartItems) {
        dispatch({
          type: cartConstants.GET_CART_SUCCESS,
          payload: { cartItems },
        });
      }
    }).catch((error) => {
      dispatch({
        type: cartConstants.GET_CART_FAILURE,
        payload: {
          error: error.message
        },
      });
    })
  };
};

// ---------------------ADD Item to Cart------------------

export const addToCart = (product, newQty = 1) => {
  return async (dispatch) => {
    dispatch({
      type: cartConstants.ADD_TO_CART_REQUEST,
    });
    const { cart: { cartItems }, userAuth } = store.getState();
    const qty = cartItems[product._id] ? parseInt(cartItems[product._id].qty + newQty) : 1;
    cartItems[product._id] = {
      ...product,
      qty,
    };
    if (userAuth.authenticate) {
      // localStorage.getItem("cart");

      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const payload = {
        cartItems: [
          {
            product: product._id,
            quantity: qty,
          },
        ],
      };
      await axios.post(`/addToCart`, { payload }).then((response) => {
        dispatch(getCartItems());
      }).catch((error) => {
        dispatch({
          type: cartConstants.ADD_TO_CART_FAILURE,
          payload: {
            error: error.message
          },
        });
      })
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: {
        cartItems
      },
    });
  };
};



export const updateCart = () => {
  return async (dispatch) => {
    const { userAuth } = store.getState();
    const cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

    if (userAuth.authenticate) {
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key, index) => {
            return {
              quantity: cartItems[key].qty,
              product: cartItems[key]._id,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          await axios.post(`/addToCart`, { payload }).then((response) => {
            dispatch(getCartItems());
            localStorage.removeItem("cart");
          }).catch((error) => {
            dispatch({
              type: cartConstants.ADD_TO_CART_FAILURE,
              payload: {
                error: error.message
              },
            });
          })
        }
      }
    } else {
      if (cartItems) {
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: { cartItems },
        });
      }
    }
  };
};

export { getCartItems }
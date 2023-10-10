import { orderConstants, paymentConstants } from "./constants";
import axios from "../helper/axios";
import { getCartItems } from "./cart.action";

// single order with complete info and delivery location

export const getOrder = (payload) => {
    return async (dispatch) => {
        dispatch({
            type: orderConstants.GET_ORDER_REQUEST
        });
        await axios.post(`/getOrder`, payload).then((response) => {
            dispatch({
                type: orderConstants.GET_ORDER_SUCCESS,
                payload: {
                    orderById: response.data.order,
                    message: response.data.message
                },
            });
        }).catch((error) => {
            dispatch({
                type: orderConstants.GET_ORDER_FAILURE,
                payload: {
                    error: error.response.data.error
                },
            });
        })
    };
};

export const getOrders = () => {
    return async (dispatch) => {
        dispatch({
            type: orderConstants.GET_ORDERS_REQUEST
        });
        await axios.post(`/getOrders`).then((response) => {
            dispatch({
                type: orderConstants.GET_ORDERS_SUCCESS,
                payload: {
                    orders: response.data.orders,
                    message: response.data.message
                },
            });
        }).catch((error) => {
            dispatch({
                type: orderConstants.GET_ORDERS_FAILURE,
                payload: {
                    error: error.response.data.error
                },
            });
        })
    };
};

const handleOpenRazorpay = (data) => {
    let options = {
        key: 'rzp_test_FFbMVLLcpRLTyr',
        amount: Number(data.amount) * 100,
        currency: data.currency,
        name: "Acme Corp",
        description: "Test Transaction",
        order_id: data.id,
        handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        }
    }
    let rzp1 = new window.Razorpay(options)
    rzp1.open();
}
export const addOrder = (payload) => {
    if (payload.paymentType === 'cod') {
        return async (dispatch) => {
            dispatch({
                type: orderConstants.ADD_ORDER_REQUEST
            });
            await axios.post(`/addOrder`, payload).then((response) => {
                dispatch({
                    type: orderConstants.ADD_ORDER_SUCCESS,
                    payload: {
                        orderDetails: response.data.order,
                        message: response.data.message
                    }
                });
            }).catch((error) => {
                dispatch({
                    type: orderConstants.ADD_ORDER_FAILURE,
                    payload: {
                        error: "Technical error",
                    },
                });
            })
        };
    } else if (payload.paymentType === 'razorpay') {
        return async (dispatch) => {
            dispatch({
                type: paymentConstants.RAZORPAY_ORDER_REQUEST
            });
            await axios.post(`/payment/orders`, { payload }).then((response) => {
                handleOpenRazorpay(response.data.data)
                console.log(response);
                // dispatch({
                //     type: paymentConstants.RAZORPAY_ORDER_SUCCESS,
                //     payload: {
                //         orderDetails: response.data.order,
                //         message: response.data.message
                //     }
                // });
            }).catch((error) => {
                console.log('err', error);
                // dispatch({
                //     type: paymentConstants.RAZORPAY_ORDER_FAILURE,
                //     payload: {
                //         error: "Technical error",
                //     },
                // });
            })
        };
    }
};


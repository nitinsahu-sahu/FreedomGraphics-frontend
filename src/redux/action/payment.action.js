import { orderConstants, paymentConstants } from "./constants";
import axios from "../helper/axios";

// single order with complete info and delivery location

export const createOrderRazorpay =  (payload) => {
    return async (dispatch) => {
        dispatch({
            type: paymentConstants.RAZORPAY_ORDER_CREATE_REQUEST
        });
        await axios.post(`/payment/razorpay`, payload).then((response) => {
            // dispatch({
            //     type: paymentConstants.RAZORPAY_ORDER_CREATE_SUCCESS,
            //     payload: { 
            //         orderById: response.data.order,
            //         message: response.data.message
            //     },
            // });
        }).catch((error) => {
            // dispatch({
            //     type: paymentConstants.RAZORPAY_ORDER_CREATE_FAILURE,
            //     payload: { 
            //         error : error.response.data.error
            //     },
            // });
        })
    };
};
import axios from '../helper/axios';
import { addressConstants } from './constants'

// ---------------------Get Address Items------------------
export const getAddress = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: addressConstants.GET_ADDRESS_REQUEST
            });
            await axios.post(`/getAddress`).then((response) => {
                const {
                    userAddress: {
                        address
                    }, message
                } = response.data;
                dispatch({
                    type: addressConstants.GET_ADDRESS_SUCCESS,
                    payload: { 
                        address,
                        message: message,
                    },
                    
                });
            }).catch((error) => {
                dispatch({
                    type: addressConstants.GET_ADDRESS_FAILURE,
                    payload: { 
                        error : "Data not found"
                    },
                });
            })
        } catch (error) {
            console.log(error);
        }
    };
};


// ---------------------Get Address Items------------------
export const addDeliveryAddress = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({ 
                type: addressConstants.ADD_ADDRESS_REQUEST 
            });
            await axios.post(`/addAddress`,{ payload }).then((response) => {
                dispatch({
                    type: addressConstants.ADD_ADDRESS_SUCCESS,
                    payload: { 
                        message: response.data.message
                     },
                });
                dispatch(getAddress());
            }).catch((error)=>{
                dispatch({
                    type: addressConstants.ADD_ADDRESS_FAILURE,
                    payload: { error:"No data found." },
                });
            })
        } catch (error) {
            console.log(error);
        }
    };
};
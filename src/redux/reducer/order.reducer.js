import { orderConstants } from "../action/constants";


const initState = {
    orders: [],
    orderDetails: {},
    orderById:{},
    message: "",
    error: null,
    loading: true,
    orderFetching: true,
    ordersFetching: true,
    placedOrderId: null,
};

export default (state = initState, action) => {
    switch (action.type) {
        case orderConstants.GET_ORDER_REQUEST:
            state = {
                ...state,
                orderFetching: true,
            };
            break;
        case orderConstants.GET_ORDER_SUCCESS:
            state = {
                ...state,
                orderById: action.payload.orderById,
                message: action.payload.message,
                orderFetching: false,
            };
            break;
        case orderConstants.GET_ORDER_FAILURE:
            state = {
                ...state,
                orderFetching: true,
                error: action.payload.error,
            };
            break;

        case orderConstants.ADD_ORDER_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case orderConstants.ADD_ORDER_SUCCESS:
            state = {
                ...state,
                orderDetails: action.payload.orderDetails,
                message: action.payload.message,
                loading: false,
            };
            break;
        case orderConstants.ADD_ORDER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            };
            break;

        case orderConstants.GET_ORDERS_REQUEST:
            state = {
                ...state,
                ordersFetching: true,
            };
            break;
        case orderConstants.GET_ORDERS_SUCCESS:
            state = {
                ...state,
                orders: action.payload.orders,
                message: action.payload.message,
                ordersFetching: false,
            };
            break;
        case orderConstants.GET_ORDERS_FAILURE:
            state = {
                ...state,
                ordersFetching: true,
                error: action.payload.error,
            };
            break;
    }
    return state;
};
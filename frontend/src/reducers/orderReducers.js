import {
    
    CUSTOMER_ORDER_CREATE_REQUEST,
    CUSTOMER_ORDER_CREATE_SUCCESS,
    CUSTOMER_ORDER_CREATE_FAIL,
    CUSTOMER_ORDER_CREATE_RESET,

    CUSTOMER_ORDER_DETAILS_REQUEST,
    CUSTOMER_ORDER_DETAILS_SUCCESS,
    CUSTOMER_ORDER_DETAILS_FAIL,

    CUSTOMER_ORDER_LIST_REQUEST,
    CUSTOMER_ORDER_LIST_SUCCESS,
    CUSTOMER_ORDER_LIST_FAIL,

} from "../constants/orderConstants"

export const customerOrderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CUSTOMER_ORDER_CREATE_REQUEST:
            return {
                loading: true
            }

        case CUSTOMER_ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                customer_order: action.payload
            }

        case CUSTOMER_ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CUSTOMER_ORDER_CREATE_RESET:
            return {}


        default:
            return state
    }
}

export const customerOrderDetailsReducer = (state = {loading:true,orderItems:[],customer:{}}, action) => {
    switch (action.type) {
        case CUSTOMER_ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CUSTOMER_ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                customer_order: action.payload
            }

        case CUSTOMER_ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const customerOrderListReducer = (state = {customer_orders:[]}, action) => {
    switch (action.type) {
        case CUSTOMER_ORDER_LIST_REQUEST:
            return {
                loading: true
            }

        case CUSTOMER_ORDER_LIST_SUCCESS:
            return {
                loading: false,
                customer_orders:action.payload
            }

        case CUSTOMER_ORDER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
       

        default:
            return state
    }
}
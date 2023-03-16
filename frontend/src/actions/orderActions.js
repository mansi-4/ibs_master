import axios from 'axios'
import {
    CUSTOMER_ORDER_CREATE_REQUEST,
    CUSTOMER_ORDER_CREATE_SUCCESS,
    CUSTOMER_ORDER_CREATE_FAIL,

    CUSTOMER_ORDER_DETAILS_REQUEST,
    CUSTOMER_ORDER_DETAILS_SUCCESS,
    CUSTOMER_ORDER_DETAILS_FAIL,

    CUSTOMER_ORDER_LIST_REQUEST,
    CUSTOMER_ORDER_LIST_SUCCESS,
    CUSTOMER_ORDER_LIST_FAIL,
} from "../constants/orderConstants"

export const createCustomerOrder = (customer_order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_ORDER_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: userInfo.token
            }
        }

        const { data } = await axios.post(
            `http://localhost:8003/api/customer_orders/add/`,
            customer_order,
            config
        )

        dispatch({
            type: CUSTOMER_ORDER_CREATE_SUCCESS,
            payload: data
        })

        // dispatch({
        //     type: CART_CLEAR_ITEMS,
        //     payload: data
        // })

        // localStorage.removeItem('cartItems')


    } catch (error) {
        dispatch({
            type: CUSTOMER_ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getCustomerOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_ORDER_DETAILS_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                
                Authorization: userInfo.token
            }
        }

        const { data } = await axios.get(
            `http://localhost:8003/api/customer_orders/${id}/`,
            config
        )

        dispatch({
            type: CUSTOMER_ORDER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CUSTOMER_ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listCustomerOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CUSTOMER_ORDER_LIST_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: userInfo.token
            }
        }

        const { data } = await axios.get(
            `http://localhost:8003/api/customer_orders/`,
            config
        )
        dispatch({
            type: CUSTOMER_ORDER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CUSTOMER_ORDER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
import {legacy_createStore as createStore ,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productTopRatedReducer,productDetailsReducer,productDistinctDetailsReducer,productSizesByColorReducer,productVariationBySizeReducer,productVariationDetailsReducer,productVariationDetailReducer,productDeleteReducer,productVariationDeleteReducer,productCreateReducer,productVariationCreateReducer,productUpdateReducer,productVariationUpdateReducer,productReviewCreateReducer} from './reducers/productReducers'
import {userLoginReducer,userRegisterReducer,userVerifyReducer,userActivationReducer,userDetailsReducer,userUpdateProfileReducer,userUpdatePasswordReducer,userListReducer,userDeleteReducer,userUpdateReducer,tableCountReducer} from './reducers/userReducers'
import {colorListReducer,colorDetailsReducer,colorCreateReducer,colorDeleteReducer,colorUpdateReducer} from "./reducers/colorReducers"
import {sizeListReducer,sizeDetailsReducer,sizeCreateReducer,sizeDeleteReducer,sizeUpdateReducer} from "./reducers/sizeReducers"
import {categoryListReducer,categoryDetailsReducer,categoryCreateReducer,categoryDeleteReducer,categoryUpdateReducer} from "./reducers/categoryReducers"
import {customerOrderCreateReducer,customerOrderDetailsReducer,customerOrderListReducer} from './reducers/orderReducers'

const reducer=combineReducers({
    productList:productListReducer,
    productTopRated:productTopRatedReducer,
    productDetails:productDetailsReducer,
    productDistinctDetails:productDistinctDetailsReducer,
    productSizesByColor:productSizesByColorReducer,
    productVariationBySize:productVariationBySizeReducer,
    productVariationDetails:productVariationDetailsReducer,
    productVariationDetail:productVariationDetailReducer,
    productDelete:productDeleteReducer,
    productVariationDelete:productVariationDeleteReducer,
    productCreate:productCreateReducer,
    productVariationCreate:productVariationCreateReducer,
    productUpdate:productUpdateReducer,
    productVariationUpdate:productVariationUpdateReducer,
    productReviewCreate:productReviewCreateReducer,

    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userVerify:userVerifyReducer,
    userActivation:userActivationReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdatePassword:userUpdatePasswordReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,
    tableCount:tableCountReducer,

    colorList:colorListReducer,
    colorCreate:colorCreateReducer,
    colorDelete:colorDeleteReducer,
    colorUpdate:colorUpdateReducer,
    colorDetails:colorDetailsReducer,

    sizeList:sizeListReducer,
    sizeCreate:sizeCreateReducer,
    sizeDelete:sizeDeleteReducer,
    sizeUpdate:sizeUpdateReducer,
    sizeDetails:sizeDetailsReducer,

    categoryList:categoryListReducer,
    categoryCreate:categoryCreateReducer,
    categoryDelete:categoryDeleteReducer,
    categoryUpdate:categoryUpdateReducer,
    categoryDetails:categoryDetailsReducer,

    customerOrderCreate:customerOrderCreateReducer,
    customerOrderDetails:customerOrderDetailsReducer,
    customerOrderList:customerOrderListReducer,
    
})

const cartItemsFromStorage=localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems")) : []

const userInfoFromStorage=localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null

const shippingAddressFromStorage=localStorage.getItem("shippingAddress") ?
    JSON.parse(localStorage.getItem("shippingAddress")) : {}

const initialState={
    cart:{
        cartItems:cartItemsFromStorage,
        shippingAddress:shippingAddressFromStorage
    },
    userLogin:{userInfo:userInfoFromStorage}
    

}
const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
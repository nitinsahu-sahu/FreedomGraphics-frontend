import {combineReducers} from 'redux'

import productReducer from './product.reducer'
import cartReducer from './cart.reducer'
import addressReducer from './address.reducer'
import orderReducer from './order.reducer'
// import fpReducer from './forgotPassword.reducer'
import authReducer from './userAuth.reducer'
import categoryReducer from './category.reducer'

const rootReducer = combineReducers({
    cart : cartReducer,
    product : productReducer,
    category : categoryReducer,
    userAuth : authReducer,
    address : addressReducer,
    order : orderReducer,
    // forgotpassword : fpReducer,
})
export default rootReducer
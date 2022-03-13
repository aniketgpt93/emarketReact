import {createStore, combineReducers} from 'redux'
import UserReducer from './reducers/UserReducer'
import CategoryReducer from './reducers/CategoryReducer'
import BrandReducer from './reducers/BrandReducer'
import ProductReducer from './reducers/ProductReducer'
import CartReducer from './reducers/CartReducer'

const store = createStore(combineReducers({
    user : UserReducer,
    categories : CategoryReducer,
    brands : BrandReducer,
    products : ProductReducer,
    carts : CartReducer
},{
    user : {},
    categories : [],
    brands : [],
    products : [],
    carts : []
}))

export default store
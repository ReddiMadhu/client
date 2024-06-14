import {createStore,combineReducers, applyMiddleware} from 'redux';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';
import {composeWithDevTools} from'redux-devtools-extension';
import thunk from 'redux-thunk';

import { CartReducer } from './reducers/CartReducer';


const reducer=combineReducers(
    {
        getProducts:getProductReducer,
        getProductDetails:getProductDetailsReducer,
        cart :CartReducer
    }
)

const middleWare=[thunk];

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)
export default store;
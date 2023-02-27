import { combineReducers, createStore } from 'redux';
import {productReducer} from './productReducer';
import { basketReducer } from './basketReducer';

const rootReducer = combineReducers({
    products: productReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer);


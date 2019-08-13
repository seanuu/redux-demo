import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import counter from './counter';

const middleware = [thunkMiddleware, promiseMiddleware];

export default createStore(
    combineReducers({
        counter
    }),
    {},
    applyMiddleware(...middleware)
);

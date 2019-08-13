import {createActions, handleActions, combineActions} from 'redux-actions'

const options = {
    prefix: 'counter'
};

export const counterActionCreator = createActions({
    increment: payload => payload,
    decrement: payload => -payload,
    incrementAsync: payload => new Promise(resolve => resolve(payload)),
}, options);

export const decrementAsync = (payload) => {
    return counterActionCreator.decrement(payload);
};


export default handleActions({
    [combineActions(counterActionCreator.increment, counterActionCreator.decrement)]: (state, action) => {
        return {
            ...state,
            count: state.count + action.payload
        }
    },
    incrementAsync: (state, action) => {
        return {
            ...state,
            count: state.count + action.payload
        }
    },
}, {count: 0}, options)

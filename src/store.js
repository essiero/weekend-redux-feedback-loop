import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from 'redux-logger';

const feeling = (state = '', action) => {
    if (action.type === "ADD_FEELING"){
        return (action.payload)
    } return state
}

const feedback = (state={}, action) => {
    if (action.type === "ADD_FEEDBACK"){
        return (action.payload)
    } return state
}

const store = createStore(
    combineReducers({
        feeling, 
        feedback
    }),
    applyMiddleware(logger),
);

export default store;
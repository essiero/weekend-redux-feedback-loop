import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from 'redux-logger';

const feeling = (state = '', action) => {
    if (action.type === "ADD_FEELING"){
        return (action.payload)
    } return state
}

const understanding = (state = '', action) => {
    if (action.type === "ADD_UNDERSTANDING"){
        return (action.payload)
    } return state
}

const support = (state = '', action) => {
    if (action.type === "ADD_SUPPORT"){
        return (action.payload)
    } return state
}

const comments = (state = '', action) => {
    if (action.type === "ADD_COMMENTS"){
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
        understanding,
        support,
        comments, 
        feedback
    }),
    applyMiddleware(logger),
);

export default store;
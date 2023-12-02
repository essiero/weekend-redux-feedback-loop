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

const feedback = (state={
    feeling: {feeling},
    understanding: {understanding},
    support: {support},
    comments: {comments}
}, action) => {
    if (action.type === "ADD_FEEDBACK"){
        return (action.payload)
    } return state
}

const resetFeedback = (state=feedback, action) => {
    if (action.type === "RESET_FEEDBACK"){
        return ({})
    } return state
}

const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments, 
        feedback,
        resetFeedback
    }),
    applyMiddleware(logger),
);

export default store;
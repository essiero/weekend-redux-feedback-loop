import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from 'redux-logger';

// const feeling = (state = '', action) => {
//     if (action.type === "ADD_FEELING"){
//         return (action.payload)
//     } return state
// }

// const understanding = (state = '', action) => {
//     if (action.type === "ADD_UNDERSTANDING"){
//         return (action.payload)
//     } return state
// }

// const support = (state = '', action) => {
//     if (action.type === "ADD_SUPPORT"){
//         return (action.payload)
//     } return state
// }

// const comments = (state = '', action) => {
//     if (action.type === "ADD_COMMENTS"){
//         return ({...state, comments: action.payload})
//     } return state
// }

const feedback = (state={}, action) => {
    if (action.type === "ADD_FEELING"){
        return ({...state, 
            feeling: action.payload})
    } else if (action.type === "ADD_UNDERSTANDING"){
        return ({...state, 
            understanding: action.payload})
    } else if (action.type === "ADD_SUPPORT"){
        return ({...state, 
            support: action.payload})
    } else if (action.type === "ADD_COMMENTS"){
        return ({...state, 
            comments: action.payload})
    } else if (action.type === "RESET_FEEDBACK"){
        return ({...state,
                feeling: '',
                understanding: '',
                support: '',
                comments: ''
            })
    } return state
}

// const resetFeedback = (state=feedback, action) => {
//     if (
//     } return state
// }

const store = createStore(
    combineReducers({
        // feeling,
        // understanding,
        // support,
        // comments, 
        feedback,
        // resetFeedback
    }),
    applyMiddleware(logger),
);

export default store;
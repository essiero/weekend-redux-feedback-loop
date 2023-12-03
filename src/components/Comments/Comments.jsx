import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Comments() {
    let [comments, setComments] = useState('')

    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setComments(event.target.value)
        console.log('comments now: ', comments)
    }

    const saveComments = () => {
        dispatch({
            type: "ADD_COMMENTS",
            payload: comments
        })
    }
    
    return (
    <>
    <h3>Any comments you want to leave?</h3>
    <label htmlFor="comments">Comments</label>
    <input 
    id="comments"
        onChange={() => handleInputChange(event)}
        data-testid="input"></input>
    <Router>
            <Link to="/review">
    <button 
        data-testid="next"
        onClick={saveComments}
        >NEXT</button>
        </Link>
</Router>
    </>)
}

export default Comments;
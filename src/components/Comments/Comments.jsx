import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Comments() {
    return (
    <>
    <h3>Any comments you want to leave?</h3>
    <label htmlFor="comments">Comments</label>
    <input id="comments"></input>
    <Router>
            <Link to="/review">
    <button 
        data-testid="next"
        >NEXT</button>
        </Link>
</Router>
    </>)
}

export default Comments;
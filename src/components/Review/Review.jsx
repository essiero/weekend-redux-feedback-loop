import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

function ReviewFeedback(){
    return (
    <>
    <h2>Review Your Feedback</h2>
    <h3>Feelings:</h3>
    <h3>Understanding:</h3>
    <h3>Support:</h3>
    <h3>Comments:</h3>
    <Router>
            <Link to="/submitted">
    <button
        data-testid="next"
        >SUBMIT</button>
</Link>
</Router>
    </>
)}

export default ReviewFeedback;
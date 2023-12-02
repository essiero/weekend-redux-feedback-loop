import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

function ReviewFeedback(){
    const dispatch = useDispatch();
    // const feedback = useSelector(store => store.feedback)


    // let feedbackToSubmit = feedback.map((feedback) => (
    //     {
    //     feeling: feedback.feeling,
    //     understanding: feedback.feeling,
    //     support: feedback.support,
    //     comments: feedback.comments}
    // ))
    
    
    // const sendFeedback = () => {
    //     axios({
    //         method: 'POST',
    //         url: '/feedback',
    //         data: feedbackToSubmit
    //     })
    //     .then((response) => {
    //         alert('Submission succesful!')
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     })
    // }
    return (
    <>
    <h2>Review Your Feedback</h2>
    <h3>Feelings: {feedback.feeling}</h3>
    <h3>Understanding: {feedback.understanding}</h3>
    <h3>Support: {feedback.support}</h3>
    <h3>Comments: {feedback.comments}</h3>
    <Router>
            <Link to="/submitted">
    <button
        data-testid="next"
        // onClick={sendFeedback}
        >SUBMIT</button>
</Link>
</Router>
    </>
)}

export default ReviewFeedback;
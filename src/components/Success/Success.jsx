import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Success() {
    const dispatch = useDispatch();
    const resetFeedback = () => {
        dispatch({
        type: "RESET_FEEDBACK"
    })
    }
  return (
    <>
      <div>Thank You!</div>
      <Router>
        <Link to="/">
      <button
      onClick={resetFeedback}>Leave New Feedback</button>
      </Link>
      </Router>
    </>
  );
}

export default Success;
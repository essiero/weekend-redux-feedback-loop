import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Success() {
  return (
    <>
      <div>Thank You!</div>
      <Router>
        <Link to="/">
      <button>Leave New Feedback</button>
      </Link>
      </Router>
    </>
  );
}

export default Success;
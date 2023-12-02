import { HashRouter as Router, Route, Link } from "react-router-dom";

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
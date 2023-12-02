import { HashRouter as Router, Route, Link } from "react-router-dom";

function Understanding() {
  return (
    <>
      <h3>How well are you understanding the content?</h3>
      <label htmlFor="understanding">Understanding?</label>
      <select name="rating" id="understanding">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <Router>
            <Link to="/support">
      <button 
        data-testid="next"
        >NEXT</button>
                </Link>
        </Router>
    </>
  );
}

export default Understanding;

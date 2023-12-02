import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Support() {
  let [support, setSupport] = useState('')

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSupport(event.target.value)
      console.log('support now: ', support)
  }

  const saveSupport = () => {
      dispatch({
          type: "ADD_SUPPORT",
          payload: support
      })
  }
  return (
    <>
      <h3>How well are you being supported?</h3>
      <label htmlFor="support">Support?</label>
      <select name="rating" id="support" 
        onChange={() => handleInputChange(event)}>
        <option value=""> </option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <Router>
            <Link to="/comments">
      <button 
        data-testid="next"
        onClick={saveSupport} >NEXT</button>
        </Link>
</Router>
    </>
  );
}

export default Support;

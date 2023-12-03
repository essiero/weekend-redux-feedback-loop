import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Understanding() {
  let [understanding, setUnderstanding] = useState('')

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
      setUnderstanding(event.target.value)
      console.log('understanding now: ', understanding)
  }

  const saveUnderstanding = () => {
      dispatch({
          type: "ADD_UNDERSTANDING",
          payload: understanding
      })
  }


  return (
    <>
      <h3>How well are you understanding the content?</h3>
      <label htmlFor="understanding">Understanding?</label>
      {/* <select 
        name="rating" 
        id="understanding" 
        onChange={() => handleInputChange(event)}
        data-testid="input">
        <option value=""> </option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select> */}
              <input 
        name="rating" 
        id="understanding"
        onChange={() => handleInputChange(event)}
        data-testid="input">
        </input>
      <Router>
            <Link to="/support">
      <button 
        data-testid="next"
        onClick={saveUnderstanding} >NEXT</button>
                </Link>
        </Router>
    </>
  );
}

export default Understanding;

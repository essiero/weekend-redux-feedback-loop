import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Feelings() {
    let [feeling, setFeeling] = useState('')

    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setFeeling(event.target.value)
        console.log('feeling now: ', feeling)
    }

    const saveFeeling = () => {
        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        })
    }
    return (
    <>
    <h3>How are you feeling today?</h3>
    <label htmlFor="feeling">Feeling?</label>
    <select 
        name="rating" 
        id="feeling"
        onChange={() => handleInputChange(event)}
        data-testid="input">
        <option value=""> </option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
        </select>
        {/* <input 
        name="rating" 
        id="feeling"
        onChange={() => handleInputChange(event)}
        data-testid="input">
        </input> */}
        <Router>
            <Link to="/understanding">
    <button 
        data-testid="next"
        onClick={saveFeeling}>NEXT</button>
        </Link>
        </Router>
    </>)
}

export default Feelings;
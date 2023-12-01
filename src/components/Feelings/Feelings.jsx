import { useDispatch, useSelector } from "react-redux";

function Feelings() {
    const toUnderstanding = (feeling) => {
        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        })
    }
    return (
    <>
    <h3>How are you feeling today?</h3>
    <label for="feelings">Feeling?</label>
    <select name="rating" id="feelings">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
        </select>
    <button 
        data-testid="next"
        onClick={toUnderstanding}>NEXT</button>
    </>)
}

export default Feelings;
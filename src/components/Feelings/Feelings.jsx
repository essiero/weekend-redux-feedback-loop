function Feelings() {
    return (
    <>
    <h3>How are you feeling today?</h3>
    <label for="feelings">Feeling?</label>
    <select name="rating" id="feelings"></select>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
    <button>NEXT</button>
    </>)
}

export default Feelings;
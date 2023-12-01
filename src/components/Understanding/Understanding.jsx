function Understanding() {
  return (
    <>
      <h3>How well are you understanding the content?</h3>
      <label for="understanding">Understanding?</label>
      <select name="rating" id="understanding">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <button 
        data-testid="next"
        >NEXT</button>
    </>
  );
}

export default Understanding;

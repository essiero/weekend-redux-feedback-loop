function Support() {
  return (
    <>
      <h3>How well are you being supported?</h3>
      <label for="support">Support?</label>
      <select name="rating" id="support">
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

export default Support;

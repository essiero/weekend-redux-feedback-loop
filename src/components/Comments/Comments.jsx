function Comments() {
    return (
    <>
    <h3>Any comments you want to leave?</h3>
    <label for="comments">Comments</label>
    <input id="comments"></input>
    <button 
        data-testid="next"
        >NEXT</button>
    </>)
}

export default Comments;
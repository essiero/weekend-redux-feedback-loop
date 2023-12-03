# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## Notes
- Feelings component => next button will use a react router to bring you to the next page/component and save your score as redux state

- Leave new feedback will bring you back to start page as well as clear all input fields.
- To reset input fields: return '', NOT state = ''
- We need to "npm install react-redux" - it's not in our package.json dependencies

## To-do's

[X] create all components
[/] create reducer for feedback redux state: object with property for each feedback category
[X] wrap <Feelings /> component in Route with exact path = "/"

    Feelings
    [X] import useDispatch, useSelector from react-redux
    [X] import HashRouter as Router, Route, Link from react-router-dom
    [X] create variable to capture input value
    [X] dispatch feedback.feeling to store
    [X] wrap "next" button in Router-Route-Link to '/understanding' page

    Understanding
    [X] import useDispatch, useSelector from react-redux
    [X] import HashRouter as Router, Route, Link from react-router-dom
    [X] create variable to capture input value
    [X] dispatch feedback.understanding to store
    [X] wrap "next" button in Router-Route-Link to '/support' page

    Support
    [X] import useDispatch, useSelector from react-redux
    [X] import HashRouter as Router, Route, Link from react-router-dom
    [X] create variable to capture input value
    [X] dispatch feedback.support to store
    [X] wrap "next" button in Router-Route-Link to '/review' page

    Review Feedback
    [X] import useDispatch, useSelector from react-redux
    [X] import HashRouter as Router, Route, Link from react-router-dom
    [X] get feedback object from Redux store with useSelector
    [X] map feedback object to display feedback values and comments
    [X] POST route to post feedback object to database table
    [X] wrap "submit" button in Router-Route-Link to '/success' page 
        [ ] upon successful feedback submission?

    Success
    [ ] onClick function for Leave New Feedback button to:
        [ ] clear Redux fields 
            [ ] dispatch "CLEAR_INPUT" to store
            [ ] function in store to return feedback object state as empty object
        [X] navigate to '/' home page (feelings) (need to wrap with Link)

    LEFT:
        I need to figure out how to render feedback components on the Review page; and how to make one object out of the different components to post to the database.

        Also need to check that my resetFeedback function and Success component actually work
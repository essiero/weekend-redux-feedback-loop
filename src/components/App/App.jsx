import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import ReviewFeedback from "../Review/Review";
import Success from "../Success/Success";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <Feelings />
        </Route>

        <Route exact path="/understanding">
        <Understanding />
        </Route>

        <Route exact path="/support">
        <Support />
        </Route>

        <Route exact path="/comments">
        <Comments />
        </Route>

        <Route exact path="/review">
        <ReviewFeedback />
        </Route>

        <Route exact path="/submitted">
        <Success />
        </Route>
      </Router>
    </div>
  );
}

export default App;

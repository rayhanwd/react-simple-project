import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About/About";

import './App.css';
import Comment from "./Comment/Comment";
import Home from './Home/Home';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/post/:id">
          <Comment></Comment>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

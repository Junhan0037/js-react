import React from "react";
import {Route, Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/profile/:username" component={Profile} exact />
    </div>
  );
}

export default App;

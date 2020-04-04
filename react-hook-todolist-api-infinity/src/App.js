import React from 'react';
import './css/style.css';

// Components
import HomePage from "./features/home-page";
import LoginPage from "./features/login-page";
import PostsPage from "./features/posts-page";
import RegisterPage from "./features/register-page";
import TodoPage from "./features/todo-page";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <>
        <h1>List Page</h1>
        <ul className="list-page">
          <li>
            <Link to="/"> Home Page </Link>
          </li>
          <li>
            <Link to="/register-page"> Register Page </Link>
          </li>
          <li>
            <Link to="/login-page"> Login Page </Link>
          </li>
          <li>
            <Link to="/todo-page"> Todo Page </Link>
          </li>
          <li>
            <Link to="/posts-page"> Posts Page </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/posts-page" component={PostsPage} />
          <Route path="/register-page" component={RegisterPage} />
          <Route path="/todo-page" component={TodoPage} />
          <TodoPage />
        </Switch>
      </>
    </Router>
  );
}

export default App;

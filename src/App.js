import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";

const handleLogout = () =>{
  localStorage.removeItem("token")
  window.location.href = "login"
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={handleLogout} data-testid="logoutButton" href="#">logout</a>
          <Link to="/login">Login</Link>
          
        </header>
        <Switch>
          <PrivateRoute path="/bubblepage" component={BubblePage}/>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/" component={Login}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
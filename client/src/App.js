import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";

import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import Navbar from "./components/layout/Navbar";
//import Footer from "./components/layout/Footer";
//import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ComingSoon from "./components/coming-soon/ComingSoon";

import "./App.css";

//if (localStorage.jwtToken) {
//  setAuthToken(localStorage.jwtToken);
//  const decoded = jwt_decode(localStorage.jwtToken);
//  store.dispatch(setCurrentUser(decoded));
//  const currentTime = Date.now() / 1000;
//  if (decoded.exp < currentTime) {
//    store.dispatch(logoutUser());
//    store.dispatch(clearCurrentProfile());
//    window.location.href = "/login";
//  }
//}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={ComingSoon} />
            {/*<Footer />*/}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

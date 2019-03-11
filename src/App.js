import React, { Component } from "react";
import "./Styles/App.css";
import TypeTest from "./Components/Typetest";
import Navbar from "./Components/Navbar.js";
import Contact from "./Components/Contact.js";
import About from "./Components/About.js";
import Profile from "./Components/Profile.js";
import NotFound from "./Components/NotFound.js";
import { Route, Switch, MemoryRouter } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <MemoryRouter>
        <div>
          <Route component={Navbar}/>
          <Switch>
            <Route exact path="/" component={TypeTest}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </MemoryRouter>
    );
  }
}

export default App;
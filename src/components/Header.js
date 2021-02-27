import React from 'react';
import { BrowserRouter as HashRouter, Route, NavLink } from "react-router-dom";
import Home  from '../pages/Home';
import About  from '../pages/About';

export default function Header() {
    return (
      <HashRouter basename='/'>
          <header>
            <nav>
              <ul>
                <li> 
                  <NavLink activeClassName='is--active' exact to="/">Home</NavLink >
                </li>
                <li>
                  <NavLink activeClassName='is--active' to="/about">About</NavLink >
                </li>                                               
              </ul> 
            </nav>
          </header>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </div>
        </HashRouter>
    );
}
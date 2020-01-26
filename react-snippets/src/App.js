import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Name from "./Name";
import Address from "./Address";
import { Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/name">Name</a>
            </li>
            <li>
              <a href="/address">Address</a>
            </li>
          </ul>
        </nav>
      </header>
      <BrowserRouter>
        <div className="App">
          {/* <Name />
        <Address /> */}

          <Route path="/name" component={Name} />
          <Route path="/address" component={Address} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          {/* <Route path="" exact={false} component={PageNotFound} /> */}
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

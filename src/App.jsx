// 親コンポーネント //
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Monitor from "./Monitor";

import Admin from "./Admin";
import Client from "./Client";
import Error from "./Error";

function App() {
    return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Monitor />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/client">
          <Client />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

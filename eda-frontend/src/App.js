import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Shared/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SchematicEditor from "./pages/SchematiEditor";
import Simulator from "./pages/Simulator";

function App() {
  // Routes For SchematicEditor
  const SchematicRoute = () => (
    <>
      <Route exact path="/editor" component={SchematicEditor} />
    </>
  );

  // Routes For DeafaultPages
  const DefaultRoute = () => (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/simulator" component={Simulator} />
        <Route component={NotFound} />
      </Switch>
    </>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/editor" component={SchematicRoute} />
        <Route path="/login" component={Login} />
        <Route component={DefaultRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
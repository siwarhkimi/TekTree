import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Offres from "views/components/Offres.js";
import Services from "views/components/Services.js";
import Sponsoring from "views/components/Sponsoring.js";
import Graphiques from "views/components/Graphiques.js";
import CreationWeb from "views/components/CreationWeb.js";
import NotFound from "views/components/404.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/offres"
        exact
        render={props => <Offres {...props} />}
      />
      <Route path="/sponsoring" exact render={props => <Sponsoring {...props} />} />
      <Route
        path="/graphiques"
        exact
        render={props => <Graphiques {...props} />}
      />
      <Route
        path="/creation-des-sites-web"
        exact
        render={props => <CreationWeb {...props} />}
      />
       <Route
        path="/services"
        exact
        render={props => <Services {...props} />}
      />
       {/* <Route
        path="/about"
        exact
        render={props => <About {...props} />}
      /> */}
      <Route
        path="/404"
        exact
        render={props => <NotFound {...props} />}
      /> 
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

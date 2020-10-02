import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { init } from "./redux/action/index";

import { routesHome } from "./routes/routes";
import HomeTemplate from "./templates/HomeTemplate";

import PageNotFound from "./pages/PageNotFound";

const showMenusHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

const App = ({ init, isLoading }) => {
  useEffect(() => {
    init();
  }, [init]);

  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          {showMenusHome(routesHome)}
          <Route path="/404" exact={false} component={PageNotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};
const mapStateToProps = ({ geral }) => {
  return { isLoading: geral.loading };
};
export default connect(mapStateToProps, { init })(App);

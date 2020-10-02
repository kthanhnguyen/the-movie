import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Sidebar from "../containers/Sidebar";

const HomeLayout = (props) => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main-content">{props.children}</div>
    </div>
  );
};

function HomeTemplate({ Component, ...props }) {
  return (
    <Fragment>
      <Route
        {...props}
        render={(propsComponent) => (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        )}
      />
    </Fragment>
  );
}
export default HomeTemplate;

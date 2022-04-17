import React from "react";
import { Route } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";

export default function HomeTemplate(props) {
  //props.path = '/home' , props.component = Home

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <div>
            <HeaderHome />
            <props.component {...propsRoute} />
          </div>
        );
      }}
    />
  );
}

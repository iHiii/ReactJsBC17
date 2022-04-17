import React from "react";
import { Route } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome/HeaderHome";

export default function UserTemplate(props) {
  return (
    <Route
      path={props.path}
      render={(propsRoute) => {
        return (
          <div>
            <HeaderHome />
            <div className="d-flex">
              <div className="w-50">
                <img
                  className="w-100"
                  src="https://picsum.photos/2000"
                  alt="..."
                />
              </div>
              <div className="w-50">
                <props.component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

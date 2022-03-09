import React, { Component } from "react";
import HeaderFunction from "../HeaderFunction";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import NavigationComponent from "./NavigationComponent";

export default class HomeComponent extends Component {
  render() { //Nội dung Component luôn luôn được bao phủ trong 1 thẻ
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <HeaderComponent />
          </div>
        </div>

        <div className="row">
          <div className="col-4 m-0 p-0">
            <NavigationComponent />
          </div>

          <div className="col-8 m-0 p-0">
          <ContentComponent />
        </div>
        </div>

        <div className="row">
          <div className="col-12">
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}

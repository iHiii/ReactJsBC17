import React, { Component } from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome";

export default class Home extends Component {
  render() {
    console.log("props", this.props);
    return (
      <>
        <div>Home</div>
        <button
          onClick={() => {
            this.props.history.push("/login");
          }}
        >
          Chuyển hướng
        </button>
      </>
    );
  }
}

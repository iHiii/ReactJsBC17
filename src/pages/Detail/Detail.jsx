import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    //this.props.history, this.props.match, this.props.location
    //this.props.match.params: dùng để lấy giá trị tham số trên thanh url
    return (
      <div className="container">Detail page: {this.props.match.params.id}</div>
    );
  }
}

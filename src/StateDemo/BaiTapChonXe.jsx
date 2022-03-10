import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    iSrc: "./img/products/black-car.jpg",
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <img className="w-100" src={this.state.iSrc} alt="" />
        </div>

        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.setState({ iSrc: "./img/products/black-car.jpg" });
                }}
              >
                Black
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.setState({ iSrc: "./img/products/red-car.jpg" });
                }}
              >
                Red
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn"
                style={{ background: "silver" }}
                onClick={() => {
                  this.setState({ iSrc: "./img/products/silver-car.jpg" });
                }}
              >
                Silver
              </button>
            </div>

            <div className="col-3">
              <button
                className="btn"
                style={{ background: "grey" }}
                onClick={() => {
                  this.setState({ iSrc: "./img/products/steel-car.jpg" });
                }}
              >
                Steel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import BaiTapChonXe from "./BaiTapChonXe";

export default class Ex1StateDemo extends Component {
  state = {
    fontSize: 37,
    homeColor: "pink",
  };

  render() {
    return (
      <div className="container">
        <h3>Bài tập 1: Tăng giảm font chữ</h3>
        <p
          style={{ fontSize: this.state.fontSize + "px" }}
          className="p-2 bg-dark text-white"
        >
          Noi dung van ban
        </p>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            let newFontSize = this.state.fontSize + 5;
            this.setState({ fontSize: newFontSize });
          }}
        >
          +
        </button>
        <button
          className="btn btn-outline-primary ml-2"
          onClick={() => {
            this.setState({ fontSize: this.state.fontSize - 5 });
          }}
        >
          -
        </button>

        <hr />
        <h3>Bài tập 2: Thay đổi màu sắc</h3>
        <h3
          className="fa fa-home"
          style={{ fontSize: "100px", color: this.state.homeColor }}
        ></h3>

        <br></br>

        <button
          className="btn btn-danger"
          onClick={() => {
            this.setState({ homeColor: "red" });
          }}
        >
          Red
        </button>
        <button
          className="btn btn-success ml-2"
          onClick={() => {
            this.setState({ homeColor: "green" });
          }}
        >
          Green
        </button>
        <button
          className="btn btn-primary ml-2"
          onClick={() => {
            this.setState({ homeColor: "blue" });
          }}
        >
          Blue
        </button>

        <hr/>
        <h3>Bài tập 3: Chọn màu xe</h3>
        <BaiTapChonXe/>
      </div>

    );
  }
}

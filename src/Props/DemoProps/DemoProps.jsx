import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class DemoProps extends Component {
  render() {
    let productA = {
      maSanPham: 1,
      tenSanPham: "iPhone",
      gia: 1000,
      hinhAnh: "https://picsum.photos/id/1/200/300",
    };

    let productB = {
        maSanPham: 2,
        tenSanPham: "iPhone XS",
        gia: 3000,
        hinhAnh: "https://picsum.photos/id/2/200/300",
      }

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            {/* <ChildComponent tenSanPham="iPhone" gia={1000} /> */}
            <ChildComponent product = {productA} />
          </div>
          <div className="col-4">
            <ChildComponent product = {productB} />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    //this.props là thuộc tính có sẵn của react class component dùng để truyền dữ liệu từ component cha sang component con
    //this.props là thuộc tính readonly: không thể gán lại giá trị khác

    let { maSanPham, tenSanPham, gia, hinhAnh } = this.props.product;

    return (
      <div className="card">
        {/* <img src="https://picsum.photos/200/300" alt="" /> */}
        {/* <img src={this.props.product.hinhAnh} alt="" /> */}
        <img src={hinhAnh} alt="" />

        <div className="card-body">
          {/* <p>Tên sản phẩm {this.props.tenSanPham}</p>
          <p>Giá {this.props.gia}</p> */}
          {/* <p>Tên sản phẩm {this.props.product.tenSanPham}</p>
          <p>Giá {this.props.product.gia}</p> */}
          <p>Tên sản phẩm {tenSanPham}</p>
          <p>Giá {gia}</p>
        </div>
      </div>
    );
  }
}

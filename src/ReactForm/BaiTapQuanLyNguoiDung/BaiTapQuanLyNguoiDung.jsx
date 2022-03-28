import React, { Component } from "react";
import FormNguoiDung from "./FormNguoiDung";
import TableNguoiDung from "./TableNguoiDung";

export default class BaiTapQuanLyNguoiDung extends Component {
  render() {
    return (
      <div className="container-fluid">
        <FormNguoiDung />
        <TableNguoiDung />
      </div>
    );
  }
}

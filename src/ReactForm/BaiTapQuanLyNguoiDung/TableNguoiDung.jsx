import React, { Component } from "react";

export default class TableNguoiDung extends Component {
  render() {
    return (
      <table className="table">
        <thead className="bg-dark text-white font-weight-bold">
          <tr>
            <th>Tài khoản</th>
            <th>Mật khẩu</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tài khoản</td>
            <td>Mật khẩu</td>
            <td>Họ tên</td>
            <td>Email</td>
            <td>Số điện thoại</td>
            <td>Loại người dùng</td>
            <td>
              <button className="btn btn-danger">Xóa</button>
              <button className="btn btn-primary ml-2">Sửa</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

import React, { Component } from "react";
import { Prompt } from "react-router-dom";

export default class Register extends Component {
  state = {
    isSaveForm: true,
  };

  render() {
    return (
      <div className="container">
        <h3 className="mt-5 display-4">Đăng ký</h3>
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({
              isSaveForm: false,
            });
          }}
        >
          <div className="col-6">
            <div className="form-group">
              <p>Tài khoản</p>
              <input id="taiKhoan" name="taiKhoan" className="form-control" />
            </div>
            <div className="form-group">
              <p>Mật khẩu</p>
              <input
                id="matKhau"
                type="password"
                name="matKhau"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p>Email</p>
              <input id="email" name="email" className="form-control" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Số điện thoại</p>
              <input
                id="soDienThoai"
                name="soDienThoai"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <p>Họ tên</p>
              <input id="hoTen" name="hoTen" className="form-control" />
            </div>
            <div className="form-group"></div>
          </div>
          <div className="col-12 mt-5">
            <button className="btn btn-success">Đăng ký</button>
          </div>
        </form>
        <Prompt
          when={this.state.isSaveForm}
          message={(location) => {
            return "Bạn thực sự muốn rời khỏi trang !";
          }}
        />
      </div>
    );
  }
}

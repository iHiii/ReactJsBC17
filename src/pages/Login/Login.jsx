import React, { Component } from "react";

export default class Login extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
  };
  handleChangeInput = (e) => {
    let { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.taiKhoan === "cybersoft" &&
      this.state.matKhau === "cybersoft"
    ) {
      //Chuyển hướng trang this.props.history.push('/pathname');
      this.props.history.push("/profile");
      //Thay đổi đường dẫn hiện tại = đường dẫn truyền vào
      // this.props.history.replace('/profile');
      localStorage.setItem("USER_LOGIN", this.state.taiKhoan);
    } else {
      alert("Bạn cần đăng ký tài khoản để đăng nhập !");
      this.props.history.push("/register");
    }
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h3>Đăng nhập</h3>
        <div className="form-group">
          <p>Tài khoản</p>
          <input
            id="taiKhoan"
            className="form-control"
            name="taiKhoan"
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="form-group">
          <p>Mật khẩu</p>
          <input
            id="matKhau"
            className="form-control"
            name="matKhau"
            onChange={this.handleChangeInput}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Đăng nhập
          </button>
        </div>
        <div>
          <span
            style={{ color: "blue", cursor: "pointer", fontSize: 18 }}
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            Trở về
          </span>
        </div>
      </form>
    );
  }
}

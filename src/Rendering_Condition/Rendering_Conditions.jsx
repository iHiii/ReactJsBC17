import React, { Component } from "react";

export default class Rendering_Conditions extends Component {
  /*
    state là thuộc tính có sẵn của react class component để quản lý các giá trị thay đổi trên giao diện khi người dùng thao tác (event)
    */

  state = {
    isLogin: false,
  };

  //   isLogin = false;
  userName = "lunyuan";
  renderLogin = () => {
    if (this.state.isLogin === true) {
      return (
        <span className="nav-item text-white">
          <a className="nav-link" href="#">
            {this.userName}
          </a>
        </span>
      );
    }

    return (
      <button
        className="btn btn-success my-2 my-sm-0"
        type="button"
        onClick={() => {
          this.handleLogin();
        }}
      >
        Đăng nhập
      </button>
    );
  };

  handleLogin = () => {
    // this.state.isLogin = true; Không được gán giá trị state trực tiếp mà phải thông qua phương thức setState
    console.log("islogin", this.state.isLogin);
    /**
     * this.setState là phương thức có sẵn của react class component dùng để thay đổi giá trị của state. Hàm setState sẽ nhận vào giá trị  state mới và gọi lại hàm render => giao diện thay đổi
     * this.setState: là 1 hàm bất đồng bộ, khi nó xử lí thì các đoạn code phía sau vẫn tiếp tục thực thi
     */

    // let newState = { isLogin: true };
    this.setState({ isLogin: true }, () => {
      //Hàm sẽ chạy sau khi state thay đổi và render xong giao diện
      console.log(this.state);
    });

    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-info">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* {this.isLogin ? (
                <span className="nav-item text-white">
                  <a className="nav-link" href="#">
                    {this.userName}
                  </a>
                </span>
              ) : (
                <button className="btn btn-success my-2 my-sm-0" type="submit">
                  Đăng nhập
                </button>
              )} */}

              {this.renderLogin()}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

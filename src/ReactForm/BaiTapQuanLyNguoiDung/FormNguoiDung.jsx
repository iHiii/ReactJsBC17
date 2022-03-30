import React, { Component } from "react";
import { connect } from "react-redux";

class FormNguoiDung extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      maLoaiNguoiDung: "NguoiDung",
    },

    errors: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
    },
  };

  handleChangeInput = (e) => {
    // e.target là thẻ xảy ra sự kiện

    // let value = e.target.value;
    // let id = e.target.id;
    // let name = e.target.name;
    // this.setState(
    //   {
    //     // taiKhoan: value,
    //     [id]: value, //dynamic key - để truyền động taiKhoan sang id
    //   },
    //   () => {
    //     console.log("this.state", this.state);
    //   }
    // );

    let { value, id, name } = e.target;
    let typeMeta = e.target.getAttribute("typeMeta"); //attribute là thuộc tính mở rộng của thẻ
    console.log("typeMeta", typeMeta);

    let newValues = { ...this.state.values };
    newValues[id] = value;

    let newErrors = { ...this.state.errors };
    let messagErrors = "";
    if (value === "") {
      messagErrors = id + "không được bỏ trống !";
    }
    if (typeMeta === "email") {
      let regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regexEmail.test(value)) {
        messagErrors = id + "Không đúng định dạng !";
      }
    }

    newErrors[id] = messagErrors;

    //setState
    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); //Đây là hàm cản sự kiện reload của browser
    //Kiểm tra dữ liệu có bị lỗi hay không trước khi submit
    let valid = true;

    //Lấy ra this.state.errors kiểm tra
    let { errors, values } = this.state;
    for (let key in errors) {
      //Nếu như có trường errors nào không hợp lệ
      if (errors[key] !== "") {
        valid = false;
      }
    }

    for (let key in values) {
      //Nếu có 1 trường value nào = rỗng => không hợp lệ
      if (values[key] === "") {
        valid = false;
      }
    }
    if (!valid) {
      alert("Dữ liệu không hợp lệ");
      return;
    }

    //Nếu dữ liệu hợp lệ thì gửi đi lên redux
    const action = {
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.state.values,
    };
    //Đưa dữ liệu lên redux
    this.props.dispatch(action);
  };

  //Can thiệp vào lifecycle khi props hoặc state thay đổi thành hàm này sẽ thực thi trước khi render
  // static getDerivedStateFromProps(newProps, state) {

  //     // //Chỉ khi nào ng dùng bấm nút sửa thì mới xử lý này
  //     if (state.values.taiKhoan !== newProps.nguoiDungSua.taiKhoan) {
  //         console.log('newProps', newProps);
  //         console.log('currentState', state);
  //         //Lấy dữ liệu từ newprops gán vào state => sau khi render dữ liệu binding từ state
  //         state.values = { ...newProps.nguoiDungSua }
  //     }
  //     return state;
  // }
  //Chỉ chạy khi props thay đổi
  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.nguoiDungSua,
    });
  }

  render() {
    // let { taiKhoan, hoTen, matKhau, email, soDienThoai, loaiNguoiDung } = this.props.nguoiDungSua;

    let { taiKhoan, hoTen, matKhau, email, maLoaiNguoiDung, soDienThoai } =
      this.state.values;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card">
          <div className="card-header bg-dark text-white font-weight-bold">
            Form đăng ký
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input
                    type="text"
                    className="form-control"
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={this.handleChangeInput}
                    value={taiKhoan}
                  />
                  <p className="text-danger">{this.state.errors.taiKhoan}</p>
                </div>

                <div className="form-group">
                  <p>Họ tên</p>
                  <input
                    type="text"
                    className="form-control"
                    id="hoTen"
                    name="hoTen"
                    onChange={this.handleChangeInput}
                    value={hoTen}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>

                <div className="form-group">
                  <p>Mật khẩu</p>
                  <input
                    type="text"
                    className="form-control"
                    id="matKhau"
                    name="matKhau"
                    onChange={this.handleChangeInput}
                    value={matKhau}
                  />
                  <p className="text-danger">{this.state.errors.matKhau}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Email</p>
                  <input
                    typeMeta="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={this.handleChangeInput}
                    value={email}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>

                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input
                    type="text"
                    className="form-control"
                    id="soDienThoai"
                    name="soDienThoai"
                    onChange={this.handleChangeInput}
                    value={soDienThoai}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>

                <div className="form-group">
                  <p>Loại người dùng</p>
                  <select
                    className="form-control"
                    id="maLoaiNguoiDung"
                    name="maLoaiNguoiDung"
                    onChange={this.handleChangeInput}
                    value={maLoaiNguoiDung}
                  >
                    <option>QuanTri</option>
                    <option>NguoiDung</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-success"
              onSubmit={this.handleSubmit}
            >
              Đăng ký
            </button>

            <button
              className="btn btn-primary ml-2"
              type="button"
              onClick={() => {
                //Gửi dữ liệu về redux thay đổi mảng người dùng
                const action = {
                  type: "CAP_NHAP_THONG_TIN",
                  nguoiDung: this.state.values,
                };
                //Đưa dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              Cập nhật người dùng
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    nguoiDungSua: rootReducer.quanLyNguoiDungReducer.nguoiDungSua,
  };
};

export default connect(mapStateToProps)(FormNguoiDung);

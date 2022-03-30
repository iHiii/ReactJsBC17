import React, { Component } from "react";
import { connect } from "react-redux";

class TableNguoiDung extends Component {
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
          {this.props.mangNguoiDung.map((nguoiDung, index) => {
            return (
              <tr key={index}>
                <td>{nguoiDung.taiKhoan}</td>
                <td>{nguoiDung.matKhau}</td>
                <td>{nguoiDung.hoTen}</td>
                <td>{nguoiDung.email}</td>
                <td>{nguoiDung.soDienThoai}</td>
                <td>{nguoiDung.maLoaiNguoiDung}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      const action = {
                        type: "XOA_NGUOI_DUNG",
                        taiKhoan: nguoiDung.taiKhoan,
                      };
                      //Đưa dữ liệu lên redux
                      this.props.dispatch(action);
                    }}
                  >
                    Xóa
                  </button>
                  <button
                    className="btn btn-primary ml-2"
                    onClick={() => {
                      const action = {
                        type: "SUA_NGUOI_DUNG",
                        nguoiDung: nguoiDung,
                      };
                      //Sau khi bấm nút sửa sẽ tạo ra action và đưa lên redux để thay đổi giá trị của state.nguoiDungSua
                      this.props.dispatch(action);
                    }}
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

// {return} = () (cách viết tắt)

const mapStateToProps = (rootReducer) => {
  return {
    mangNguoiDung: rootReducer.quanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(TableNguoiDung);

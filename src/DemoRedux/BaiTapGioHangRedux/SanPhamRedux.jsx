import React, { Component } from "react";
//kết nối với redux
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    console.log(this.props);
    return (
      <div className="card">
        <img height={300} src={sanPham.hinhAnh} alt="..." className="w-100" />
        <div className="card-body bg-dark text-white">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

//mapDispatchToProps dùng để định nghĩa props là các hàm để gửi giá trị lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      //   console.log(sanPhamClick);
      const action = {
        type: "THEM_GIO_HANG", //Thuộc tính bắt buộc của redux
        sanPhamClick,
      };
      //Gửi dữ liệu lên redux
      dispatch(action);
    },
  };
};

//mapDispatchToProps là tham số thứ 2, tham số thứ 1 là mapStateToProps
export default connect(null, mapDispatchToProps)(SanPhamRedux);

import React, { Component } from "react";
//kết nối với redux
import { connect } from "react-redux";

class GioHangRedux extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th>Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {this.props.gioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <img src={spGH.hinhAnh} alt="" width={50} />
                  </td>
                  <td>{spGH.giaBan}</td>
                  <td>{spGH.soLuong}</td>
                  <td>{spGH.giaBan * spGH.soLuong}</td>
                  <td>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

//Định nghĩa hàm để lấy dữ liệu từ redux về component này
const mapStateToProps = (rootReducer) => {
  //Hàm này sẽ tạo ra 1 component ở lệnh return
  return {
    gioHang: rootReducer.gioHangReducer,
  };
};

//Khi connect thành công sẽ trả về 1 component kết nối với redux store, và mình expore default component đó ra luôn
const ComponentRedux = connect(mapStateToProps)(GioHangRedux);

export default ComponentRedux;

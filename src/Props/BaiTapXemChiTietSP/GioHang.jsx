import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { gioHang } = this.props;
    //b4-modal-default (để tạo layout dạng pop-up)
    return (
      <div>
        {/* Button trigger modal */}
        {/* <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
        >
          Launch
        </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-dark">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Giá bán</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((spGH, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGH.maSP}</td>
                          <td>{spGH.tenSP}</td>
                          <td>
                            <img
                              src={spGH.hinhAnh}
                              alt=""
                              width={50}
                              height={50}
                            />
                          </td>
                          <td>{spGH.giaBan}</td>
                          <td>
                            <button>+</button>
                            {spGH.soLuong}
                            <button>-</button>
                          </td>
                          <td>{spGH.giaBan * spGH.soLuong}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.props.xoaSanPham(spGH.maSP);
                              }}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

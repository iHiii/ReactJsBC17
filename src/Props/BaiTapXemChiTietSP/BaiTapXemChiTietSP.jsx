import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class BaiTapXemChiTietSP extends Component {
  mangDienThoai = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },

    gioHang: [
      //   {
      //     maSP: 1,
      //     tenSP: "iPhone",
      //     hinhAnh: "./img/meizuphone.jpg",
      //     giaBan: 1000,
      //     soLuong: 1,
      //   },
    ],
  };

  //Hàm xóa giỏ hàng viết tại nơi chứa state.gioHang
  xoaGioHang = (maSPClick) => {
      let gioHangUpdate = [...this.state.gioHang]
    let index = gioHangUpdate.findIndex((sp) => sp.maSP == maSPClick);
    if (index != -1) {
      gioHangUpdate.splice(index, 1);
    }
    //Cập nhật lại state giỏ hàng
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  //state ở đâu thì setState ở đó
  themGioHang = (sanPhamClick) => {
    console.log("sanPhamClick", sanPhamClick);

    //Mỗi lần click vào sản phẩm => tạo thuộc tính soLuong cho sản phẩm đó
    let spGioHang = { ...sanPhamClick, soLuong: 1 };

    //Sao chép giỏ hàng ra để xử lí
    let gioHangUpdate = [...this.state.gioHang];

    //Kiểm tra sản phẩm đó đã có trong giỏ hàng hay chưa
    let spGH = gioHangUpdate.find((sp) => sp.maSP === spGioHang.maSP);
    if (spGH) {
      //sản phẩm đã có trong giỏ hàng
      spGH.soLuong += 1;
    } else {
      gioHangUpdate.push(spGioHang); //Chưa có thì thêm vào giỏ hàng
    }

    //setState
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  xemChiTiet = (sanPhamClick) => {
    console.log("sanPhamClick", sanPhamClick);
    //Lấy sản phẩm click thay cho sản phẩm chi tiết
    this.setState({
      sanPhamChiTiet: sanPhamClick,
    });
  };

  render() {
    let {
      maSP,
      tenSP,
      hinhAnh,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      ram,
      rom,
      manHinh,
      giaBan,
    } = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <div className="text-white">
          <h3
            data-toggle="modal"
            data-target="#modelId"
            className="text-danger font-weight-bold"
            style={{ cursor: "pointer" }}
          >
            Giỏ hàng (0)
          </h3>
          <GioHang gioHang={this.state.gioHang} xoaSanPham = {this.xoaGioHang} />
        </div>
        <h3>Danh sách sản phẩm</h3>
        <div className="row">
          {this.mangDienThoai.map((sanPham, index) => {
            return (
              <div className="col-4" key={index}>
                <SanPham
                  sp={sanPham}
                  hamXemChiTiet={this.xemChiTiet}
                  themGioHang={this.themGioHang}
                />
              </div>
            );
          })}

          {/* <div className="col-4">
            <div className="card">
              <img src="https:i.pravatar.cc?u=2" alt="..." height={300} />
              <div className="card-body">
                <p>Tên sản phẩm</p>
                <p>Giá</p>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <img src="https:i.pravatar.cc?u=3" alt="..." height={300} />
              <div className="card-body">
                <p>Tên sản phẩm</p>
                <p>Giá</p>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          </div> */}
        </div>

        <div className="row mt-5">
          <div className="col-4">
            <h3 className="text-center">{tenSP}</h3>
            <img src={hinhAnh} alt="" height={300} className="w-100" />
          </div>

          <div className="col-8">
            <h3 className="text-center">Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Cam trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Cam sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

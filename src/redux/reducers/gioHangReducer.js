let stateGioHangDefault = [
  {
    maSP: 1,
    tenSP: "iPhone XS",
    giaBan: 1000,
    soLuong: 1,
    hinhAnh: "https:i.pravatar.cc?u=1",
  },
];

export const gioHangReducer = (state = stateGioHangDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = [...state];
      //Từ sản phẩm được click thông qua redux gửi lên => tạo ra 1 sản phẩm có thuộc tính số lượng
      let spGH = { ...action.sanPhamClick, soLuong: 1 };

      //Kiểm tra sản phẩm gửi lên đã có trong giỏ hàng hay chưa
      let sp = gioHang.find((spGH) => spGH.maSP === action.sanPhamClick.maSP);
      if (sp) {
        sp.soLuong += 1;
      } else {
        gioHang.push(spGH);
      }

      //immutable: tính chất bất biến
      return gioHang;
    }

    case "Xoa_Gio_Hang": {
      let gioHang = [...state];

      //Xoá giỏ hàng
      gioHang = gioHang.filter((sp) => sp.maSP !== action.maSPXoa);
      return gioHang;
    }

    case "Tang_Giam_SL": {
      let gioHang = [...state];

      let sp = gioHang.find((sp) => sp.maSP === action.maSP);

      if (sp) {
        sp.soLuong += action.soLuong;
        if (sp.soLuong < 1) {
          if (window.confirm("Bạn có muốn xóa không?")) {
            gioHang = gioHang.filter((sp) => sp.maSP !== action.maSP);
            return gioHang;
          }
          sp.soLuong -= action.soLuong;
        }
      }

      return gioHang; //return state mới
    }
  }

  return state;
};

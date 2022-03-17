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
      let gioHang = [...state, action.sanPhamClick];
      return gioHang;
    }
  }

  return state;
};

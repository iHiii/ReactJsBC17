const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyenvana",
      hoTen: "Nguyen Van A",
      matKhau: "123123",
      email: "nguyenvana@gmail.com",
      maLoaiNguoiDung: "QuanTri",
      soDienThoai: "09099090",
    },
    {
      taiKhoan: "tranthib",
      hoTen: "Tran Thi B",
      matKhau: "123123",
      email: "tranthib@gmail.com",
      maLoaiNguoiDung: "NguoiDung",
      soDienThoai: "08088080",
    },
  ],

  nguoiDungSua: {
    taiKhoan: "",
    hoTen: "",
    matKhau: "",
    email: "",
    maLoaiNguoiDung: "QuanTri",
    soDienThoai: "",
  },
};

export const quanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "XOA_NGUOI_DUNG": {
      //Sao chép mảng người dùng
      let mangNguoiDung = [...state.mangNguoiDung];
      //Xử lí xóa
      mangNguoiDung = mangNguoiDung.filter(
        (nd) => nd.taiKhoan !== action.taiKhoan
      );
      //Sau khi xóa set lại giá trị cho mangNguoiDung
      state.mangNguoiDung = mangNguoiDung;

      //Tính immutable: tính bất biến của redux đối với object và array
      return { ...state };
    }

    case "THEM_NGUOI_DUNG": {
      let mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];

      //cách viết tắt:
      // return { ...state, mangNguoiDung };

      state.mangNguoiDung = mangNguoiDung;

      return { ...state };
    }

    case "SUA_NGUOI_DUNG": {
      state.nguoiDungSua = action.nguoiDung;
      return { ...state };
    }

    case "CAP_NHAP_THONG_TIN": {
      let mangNguoiDung = [...state.mangNguoiDung];
      let ndUpdate = mangNguoiDung.find(
        (nguoiDung) => nguoiDung.taiKhoan === action.nguoiDung.taiKhoan
      );
      if (ndUpdate) {
        //Lấy giá trị người dùng thay đổi (action.nguoiDung)
        // ndUpdate.hoTen = action.nguoiDung.hoTen;
        for (let key in ndUpdate) {
          ndUpdate[key] = action.nguoiDung[key];
        }
      }
      //Sau khi sửa cập nhật lại state
      state.mangNguoiDung = mangNguoiDung;
      return { ...state };
    }

    default:
      return state;
  }
};

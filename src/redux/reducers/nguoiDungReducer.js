import { USER_LOGIN } from "../actions/types/nguoiDungType";

let us;

if (localStorage.getItem(USER_LOGIN)) {
  us = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: us,
  thongTinTaiKhoan: {},
};

export const nguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      state.userLogin = action.userLogin;
      return { ...state };
    }
    case "LAY_THONG_TIN_NGUOI_DUNG": {
      state.thongTinTaiKhoan = action.thongTinTaiKhoan;
      return { ...state };
    }
    default:
      return state;
  }
};

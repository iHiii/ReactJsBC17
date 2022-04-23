import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../util/setting";
import { ACCESSTOKEN, USER_LOGIN } from "./types/nguoiDungType";

//userLogin : {taiKhoan:'',matKhau:''}

export const dangNhapAction = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data: userLogin,
        method: "POST",
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      });

      console.log("result", result.data);
      //Sau khi đăng nhập thành công
      const action = {
        type: "DANG_NHAP",
        userLogin: result.data.content,
      };
      dispatch(action);
      //Lưu store
      localStorage.setItem(ACCESSTOKEN, result.data.content.accessToken);

      let sUserLogin = JSON.stringify(result.data.content);

      localStorage.setItem(USER_LOGIN, sUserLogin);
    } catch (error) {
      console.log({ error });
    }
  };
};

export const layThongTinCaNhanAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/thongtintaikhoan",
        method: "POST",
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });

      console.log(result);

      //Đưa thông lên redux
      const action = {
        type: "LAY_THONG_TIN_NGUOI_DUNG",
        thongTinTaiKhoan: result.data.content,
      };
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};

import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../util/setting";

export const getPhimAction = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
        headers: {
          TokenCybersoft: TOKEN_CYBERSOFT,
        },
      });

      //Sau khi lấy dữ liệu từ api về đưa lên reducer
      dispatch({
        type: "LAY_DANH_SACH_PHIM_API",
        data: result.data.content,
      });
    } catch (err) {
      console.log({ err });
    }
  };
};

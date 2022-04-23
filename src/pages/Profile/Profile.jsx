import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinCaNhanAction } from "../../redux/actions/nguoiDungAction";
import { USER_LOGIN } from "../../redux/actions/types/nguoiDungType";
import { Redirect } from "react-router-dom";

export default function Profile(props) {
  const dispatch = useDispatch();
  const { thongTinTaiKhoan } = useSelector((state) => state.nguoiDungReducer);
  useEffect(() => {
    const action = layThongTinCaNhanAction();
    dispatch(action);
  }, []);
  if (!localStorage.getItem(USER_LOGIN)) {
    alert(
      "Bạn chưa đăng nhập nên không thể vào trang này vui lòng đăng nhập !"
    );
    return <Redirect to="/login" />;
  }

  return <div>Hello :{thongTinTaiKhoan.taiKhoan}</div>;
}

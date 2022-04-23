import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/nguoiDungAction";
export default function Login(props) {
  const dispatch = useDispatch();
  let formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
    },
    //validation
    validationSchema: yup.object().shape({
      taiKhoan: yup.string().required("tài khoản không được bỏ trống !"),
      matKhau: yup.string().required("mật khẩu không được bỏ trống !"),
      email: yup
        .string()
        .matches(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          "Email không đúng định dạng !"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      const action = dangNhapAction(values);
      dispatch(action);
    },
  });
  // console.log(formik.values);
  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <h3>Đăng nhập</h3>
      <div className="form-group">
        <p>Tài khoản</p>
        <input
          id="taiKhoan"
          className="form-control"
          name="taiKhoan"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
          <p className="text text-danger">{formik.errors.taiKhoan} </p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>Mật khẩu</p>
        <input
          id="matKhau"
          className="form-control"
          name="matKhau"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.matKhau && formik.touched.matKhau ? (
          <p className="text text-danger">{formik.errors.matKhau} </p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>Email</p>
        <input
          id="email"
          className="form-control"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="text text-danger">{formik.errors.email} </p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Đăng nhập
        </button>
      </div>
      <div>
        <span
          style={{ color: "blue", cursor: "pointer", fontSize: 18 }}
          onClick={() => {
            props.history.goBack();
          }}
        >
          Trở về
        </span>
      </div>
    </form>
  );
}

import React, { createRef, useRef, useState } from "react";
/*
    userRef: 
        +Dùng để dom đến tag jsx 
        +Cache lại giá trị sau mỗi lần component render
        useRef không bị ảnh hưởng bởi setState (Dùng để lưu những giá trị ngầm thay đổi mà không cần render lên giao diện)
*/
export default function UseRefDemo() {
  const [userLogin, setUserLogin] = useState({ taiKhoan: "", matKhau: "" });
  // const [tuKhoa,setTuKhoan] = useState('');
  let refTuKhoaTimKiem = useRef("");

  console.log(refTuKhoaTimKiem.current);
  const inputTaiKhoan = useRef("");
  const inputMatKhau = useRef("");
  const handleChange = (e) => {
    let { id, value } = e.target;
    setUserLogin({
      ...userLogin,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let taiKhoan = inputTaiKhoan.current.value;
    let matKhau = inputMatKhau.current.value;
    console.log("taiKhoan", taiKhoan);
    console.log("matKhau", matKhau);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group mt-2">
        <p>{refTuKhoaTimKiem.current}</p>
        <input
          className="form-control w-25"
          onChange={(e) => {
            console.log(e.target);
            refTuKhoaTimKiem.current = e.target.value;
            console.log("tuKhoa", refTuKhoaTimKiem.current);

            // setTuKhoan('abc')
          }}
        />
      </div>
      <hr />
      <h3>Đăng nhập </h3>
      <div className="form-group">
        <p>Tài khoản</p>
        <input
          ref={inputTaiKhoan}
          className="form-control"
          id="taiKhoan"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Mật khẩu</p>
        <input
          ref={inputMatKhau}
          className="form-control"
          id="matKhau"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Đăng nhập</button>
      </div>
    </form>
  );
}

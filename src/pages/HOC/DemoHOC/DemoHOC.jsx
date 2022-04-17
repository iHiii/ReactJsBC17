import React, { useState } from "react";
import ModalHOC from "./ModalHOC";
import Register from "../../Register/Register";
import Login from "../../Login/Login";
import { useDispatch } from "react-redux";

export default function DemoHOC(props) {
  const dispatch = useDispatch();
  const [ComponentContent, setComponentContent] = useState(
    <div>Default content</div>
  );
  return (
    <div className="container">
      <h3 className="display-4">Demo hoc modal</h3>
      <button
        className="btn btn-primary mr-2"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          // setComponentContent(<Register />)
          const action = {
            type: "OPEN_FORM",
            Component: <Register />,
            title: "Đăng ký",
          };
          //Gửi dữ liệu action lên redux
          dispatch(action);
        }}
      >
        Đăng ký
      </button>
      <button
        className="btn btn-success ml-2"
        data-toggle="modal"
        data-target="#modelId"
        onClick={() => {
          // setComponentContent(<Login />)
          // setComponentContent(<Register />)
          const action = {
            type: "OPEN_FORM",
            Component: <Login />,
            title: "Đăng nhập",
          };
          //Gửi dữ liệu action lên redux
          dispatch(action);
        }}
      >
        Đăng nhập
      </button>

      {/* {/* <ModalHOC title={'Đăng ký'} Com={ComponentContent} /> */}
    </div>
  );
}

//HOC là higher order component (Component nhận vào tham số là component khác để tạo ra giao diện có chứa logic của mình)

//rfc
import React, { useState } from "react";
import BaiTapDoiMauXe from "./BaiTapDoiMauXe";

export default function UseStateDemo(props) {
  //useState là hook của react tạo ra khi gọi hàm này trả về 2 giá trị trong mảng[state,setState] = useState('default value');

  let [state, setState] = useState({
    number: 5,
  });

  let [number, setNumber] = useState(1);

  let [fontSize, setFontSize] = useState(15);

  let [imgSrc, setImgSrc] = useState("https://i.pravatar.cc?u=1");

  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-primary mr-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary ml-2"
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </button>
      <hr />
      <h3>Bài tập tăng giảm font chữ</h3>
      <p style={{ fontSize: fontSize }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequatur
        dolor sequi repudiandae distinctio, id blanditiis eum adipisci aut
        incidunt, ipsum nam! Reprehenderit similique, obcaecati iure officia
        molestias inventore! Quis.
      </p>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setFontSize(fontSize + 5);
        }}
      >
        +
      </button>
      <button
        className="btn btn-success ml-2"
        onClick={() => {
          setFontSize(fontSize - 5);
        }}
      >
        -
      </button>
      <hr />
      <h3>Bài tập random ảnh</h3>
      <div className="card w-25">
        <img src={imgSrc} alt="..." className="w-100" />
        <div className="card-body">
          <button
            className="btn btn-danger"
            onClick={() => {
              let num = Math.floor(Math.random() * 100);
              setImgSrc(`https://i.pravatar.cc?u=${num}`);
            }}
          >
            Random
          </button>
        </div>
      </div>
      <hr />
      <h3>Bài tập đổi màu xe</h3>
      <BaiTapDoiMauXe />
    </div>
  );
}

import React, { useState } from "react";

export default function BaiTapDoiMauXe() {
  let [src, setSrc] = useState("./img/products/black-car.jpg");
  const handleChangeColor = (color) => {
    setSrc(`./img/products/${color}-car.jpg`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img className="w-100" src={src} />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <button
                className="btn"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() => {
                  handleChangeColor("red");
                }}
              >
                Red
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => {
                  handleChangeColor("black");
                }}
              >
                Black
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn"
                style={{ backgroundColor: "#EEE", color: "black" }}
                onClick={() => {
                  handleChangeColor("steel");
                }}
              >
                Steel
              </button>
            </div>
            <div className="col-3">
              <button
                className="btn"
                style={{ backgroundColor: "silver", color: "black" }}
                onClick={() => {
                  handleChangeColor("silver");
                }}
              >
                Silver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

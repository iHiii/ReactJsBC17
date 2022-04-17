import React, { Component, useEffect } from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import { useDispatch, useSelector } from "react-redux";
import { getPhimAction } from "../../redux/actions/phimAction";
export default function Home(props) {
  const { mangPhim } = useSelector((state) => state.phimReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //Call api đưa dữ liệu từ api lên redux
    const action = getPhimAction();
    dispatch(action);
  }, []);

  console.log(mangPhim);
  return (
    <div className="container">
      <h3 className="text-center display-4">Danh sách phim</h3>

      <div className="row">
        {mangPhim.map((phim, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card text-left">
                <img className="card-img-top" src={phim.hinhAnh} alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{phim.tenPhim}</h4>
                  <p className="card-text">{phim.moTa}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

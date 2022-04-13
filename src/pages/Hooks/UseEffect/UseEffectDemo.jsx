import axios from "axios";
import React, { useState, useEffect } from "react";
let t;
export default function UseEffectDemo() {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(1);
  const [arrTask, setArrTask] = useState([]);
  // useEffect(()=>{
  //     //Thực thi sau khi giao diện render và thực thi mỗi lần có bất kì state nào thay đổi
  //     console.log('componentDidMount & componentDidUpdate');
  // });

  useEffect(() => {
    console.log(
      "componentDidUpdate => thực thi khi like thay đổi giá trị => shallow compare"
    );
  }, [like]); //Khi giá trị like thay đổi thì component gọi lại hàm useEffect này

  useEffect(() => {
    //Thực thi sau khi giao diện render lần đầu tiên
    console.log("Giống componentDidMount");
    let promise = axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
    promise.then((result) => {
      console.log(result);
      setArrTask({
        arrTask: result.data,
      });
    });
    promise.catch((err) => {
      console.log(err.response.data);
    });

    // t = setInterval(()=>{
    //     console.log(1);
    // },1000)

    return () => {
      //Chay khi component mất khỏi giao diện (Giống component will unmount)
      clearInterval(t);
    };
  }, []);

  console.log("render");
  return (
    <div className="container">
      <h3>Demo useEffect</h3>
      <h3>{number}</h3>
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
      <h3>Like: {like}</h3>
      <button
        className="btn btn-primary mr-2"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary ml-2"
        onClick={() => {
          setLike(like - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

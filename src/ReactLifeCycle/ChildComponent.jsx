import React, { Component, PureComponent } from "react";

/*
purecomponent giống component tuy nhiên không có lifecycle shouldComponentUpdate mà purecomponent sẽ tự nhận biết các giá trị của props sau mỗi lần render  có thay đổi hay không (nhận biết theo shallow compare - chỉ nhận biết được primitive value (kiểu dữ liệu cơ sở: number, boolean, string,...))
*/
export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    console.log("constructor child");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    //Trả về state mới trước khi render
    console.log("getDerivedStateFromProps child");
    return currentState;
  }

  // shouldComponentUpdate(newProps, newState) {
  //   console.log("newProps", newProps);
  //   console.log("thisProps", this.props);
  //   console.log("shouldComponentUpdate");

  //   if (newProps.number === this.props.number) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log("render child");
    return (
      <div className="p-5 bg-dark text-white font-weight-bold">
        <h3>Child component</h3>
        <p>number props: {this.props.objectNum.number}</p>
      </div>
    );
  }

  timeOut = {};
  componentDidMount() {
    this.timeOut = setInterval(() => {
      console.log(123);
    }, 1000);
    console.log("componentDidMount child");
  }

  componentWillUnmount() {
    //Chạy trước khi component mất đi => handle các tình huống chạy script ngầm
    clearInterval(this.timeOut);
  }
}

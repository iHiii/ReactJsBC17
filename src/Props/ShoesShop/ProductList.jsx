import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderProduct = () => {
    let { shoesProduct } = this.props;
    return shoesProduct.map((item, index) => {
      return (
        <div className="col-4 mt-2" key={index}>
          <Product product ={item}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <h3>Product list</h3>
        </div>

        {this.renderProduct()}

        {/* <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div>
        <div className="col-4">
          <Product />
        </div> */}
      </div>
    );
  }
}

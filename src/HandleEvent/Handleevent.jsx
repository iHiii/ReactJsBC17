import React, { Component } from "react";

export default class Handleevent extends Component {

    handleClick = () => {
        alert("Xin chao cac ban")
    }

    showMess = (name) => {
        alert('Xin chao!' + name);
    }


  render() {
    return (
      <div className="container">
        <h3>Handle Event</h3>
        <button onClick={this.handleClick}>Show Message</button>

        <button onClick={()=>{alert("Ahihi do ngok's")}}>Click me</button>

        <hr />
        <h3>Handle event param</h3>
        <button onClick={this.showMess.bind(this, 'Luan')}>Show mess</button>
        <button onClick={()=>{this.showMess('Luan Chau')}}>Show more</button>
      </div>
    );
  }
}

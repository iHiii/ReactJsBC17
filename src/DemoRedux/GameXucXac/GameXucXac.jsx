import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import styleGame from "./resource/styles/GameXucXac.module.css";

export default class GameXucXac extends Component {
  render() {
    return (
      <div
        className={`${styleGame['bg-game']} pt-5`}
        // style={{
        //   backgroundImage: "url(./img/gameXucXac/bgGame.png)",
        //   width: "100vw",
        //   height: "100vh",
        // }}
      >
        <h3 className="display-4 text-center">Bài tập game Xúc Xắc</h3>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}

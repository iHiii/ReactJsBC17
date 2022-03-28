const stateGameDefault = {
  banChon: true, //  true là tài, false là xỉu
  soBanThang: 10,
  tongSoBanChoi: 10,
  mangXucXac: [
    { diem: 1, img: "./img/gameXucXac/1.png" },
    { diem: 5, img: "./img/gameXucXac/5.png" },
    { diem: 6, img: "./img/gameXucXac/6.png" },
  ],
};

export const gameXucXacReducer = (state = stateGameDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }

    case "PLAY_GAME": {
      let arrXucXacNN = [];
      //xử lí tạo ra 1 mảng xúc xắc ngẫu nhiên thay thế state.mangXucXac
      for (let i = 0; i < 3; i++) {
        //mỗi lần lặp sẽ tạo ra 1 con số ngẫu nhiên từ 1 -> 6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        //từ số ngẫu nhiên tạo ra 1 object ngẫu nhiên
        let xxnn = {
          diem: soNgauNhien,
          img: `./img/gameXucXac/${soNgauNhien}.png`,
        };
        //Đưa object ngẫu nhiên vào mảng
        arrXucXacNN.push(xxnn);
      }

      //Cập nhật mangXucXac = arrXucXacNN
      state.mangXucXac = arrXucXacNN;

      //tính tổng điểm của mảng ngẫu nhiên
      let tongDiem = arrXucXacNN.reduce((diem, xx, index) => {
        return (diem += xx.diem);
      }, 0);

      if (
        (tongDiem < 11 && !state.banChon) ||
        (tongDiem >= 11 && state.banChon)
      ) {
        state.soBanThang += 1;
      }

      state.tongSoBanChoi = state.tongSoBanChoi + 1;
      return { ...state };
    }

    default:
      return state;
  }
};

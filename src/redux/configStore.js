import { bindActionCreators, combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";

// let stateGioHangDefault = [
//   {
//     maSP: 1,
//     tenSP: "iPhone XS",
//     giaBan: 1000,
//     soLuong: 1,
//     hinhAnh: "https:i.pravatar.cc?u=1",
//   },
// ];

//rootReducer xem như là state tổng của ứng dụng
const rootReducer = combineReducers({
  //Nơi chứ state của ứng dụng
  gioHangReducer: gioHangReducer,
  // (state = stateGioHangDefault, action) => {
  //   switch (action.type) {
  //     case "THEM_GIO_HANG": {
  //       let gioHang = [...state, action.sanPhamClick];
  //       return gioHang;
  //     }
  //   }

  //   return state;
  // },
  numberReducer: (state = 1, action) => {
    return state;
  },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

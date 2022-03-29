import { combineReducers, createStore } from "redux";
import { gameXucXacReducer } from "./reducers/gameXucXacReducer";
import { gioHangReducer } from "./reducers/gioHangReducer";
import { quanLyNguoiDungReducer } from "./reducers/quanLyNguoiDungReducer";

//rootReducer xem như là state tổng của ứng dụng
const rootReducer = combineReducers({
  //Nơi chứa state của ứng dụng
  gameXucXacReducer: gameXucXacReducer,

  gioHangReducer: gioHangReducer,

  quanLyNguoiDungReducer: quanLyNguoiDungReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

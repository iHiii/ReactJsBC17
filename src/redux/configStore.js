import { combineReducers, createStore } from "redux";

//rootReducer xem như là state tổng của ứng dụng
const rootReducer = combineReducers({
  //Nơi chứ state của ứng dụng
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

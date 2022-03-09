import logo from "./logo.svg";
import "./App.css";
import HeaderClass from "./components/HeaderClass";
import HeaderFunction from "./components/HeaderFunction";
import HomeComponent from "./components/BaiTapLayout/HomeComponent";
import Databinding from "./DataBinding/Databinding";
import Handleevent from "./HandleEvent/Handleevent";

function App() {
  return (
    <div className="App">
      {/* <HomeComponent/> */}
      {/* Hello iHii */}
      {/* Cách 1
      <HeaderClass/>
      <HeaderFunction/> */}
      {/* Cách 2
      <HeaderClass></HeaderClass>  */}

      {/* <Databinding /> */}

      <Handleevent/>
    </div>
  );
}

export default App;

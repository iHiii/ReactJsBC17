import logo from "./logo.svg";
import "./App.css";
import HeaderClass from "./components/HeaderClass";
import HeaderFunction from "./components/HeaderFunction";
import HomeComponent from "./components/BaiTapLayout/HomeComponent";
import Databinding from "./DataBinding/Databinding";
import Handleevent from "./HandleEvent/Handleevent";
import Rendering_Conditions from "./Rendering_Condition/Rendering_Conditions";
import Ex1StateDemo from "./StateDemo/Ex1StateDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import QuanLyDanhSachPhim from "./RenderWithMap/QuanLyDanhSachPhim";
import DemoProps from "./Props/DemoProps/DemoProps";
import ShoesShop from "./Props/ShoesShop/ShoesShop";
import BaiTapXemChiTietSP from "./Props/BaiTapXemChiTietSP/BaiTapXemChiTietSP";
import BaiTapGioHangRedux from "./DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux";
import GameXucXac from "./DemoRedux/GameXucXac/GameXucXac";

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

      {/* <Handleevent/> */}

      {/* <Rendering_Conditions/> */}

      {/* <Ex1StateDemo/> */}

      {/* <RenderWithMap/> */}

      {/* <QuanLyDanhSachPhim /> */}

      {/* <DemoProps /> */}

      {/* <ShoesShop /> */}

      {/* <BaiTapXemChiTietSP/> */}

      {/* <BaiTapGioHangRedux /> */}

      <GameXucXac />
    </div>
  );
}

export default App;

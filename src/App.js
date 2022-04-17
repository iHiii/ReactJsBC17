import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import ToDoApp from "./pages/DemoAxios/ToDoApp/ToDoApp";
import UseStateDemo from "./pages/Hooks/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/Hooks/UseEffect/UseEffectDemo";
import UseCallbackDemo from "./pages/Hooks/UseCallback/UseCallbackDemo";
import UseMemoDemo from "./pages/Hooks/UseMemo/UseMemoDemo";
import UseRefDemo from "./pages/Hooks/UseRef/UseRefDemo";
import ReduxHook from "./pages/Hooks/ReduxHook/ReduxHook";
import ToDoListHook from "./pages/Hooks/ToDoListHook/ToDoListHook";
import DemoHOC from "./pages/HOC/DemoHOC/DemoHOC";
import ModalHOC from "./pages/HOC/DemoHOC/ModalHOC";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

function App() {
  return (
    <BrowserRouter>
      {/* Nếu không để trong route luôn hiển thị mọi trang */}
      {/* <HeaderHome /> */}
      {/* <Home abc="123" /> */}
      <ModalHOC />
      <Switch>
        {/* <Route exact path={'/home'} render={(pRoute) => { //propRoute là props của thẻ Route bao gồm : history,match,location
          return <div>
            <HeaderHome />
            <Home {...pRoute} />
          </div>
        }} />
        <Route exact path={'/about'} component={About} />
        <Route exact path={'/contact'} component={Contact} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/about'} render={(pRoute) => { //propRoute là props của thẻ Route bao gồm : history,match,location
          return <div>
            <HeaderHome />
            <About {...pRoute} />
          </div>
        }} /> */}
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/about" component={About} />
        <HomeTemplate exact path={"/contact"} component={Contact} />
        <HomeTemplate exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/detail/:id"} component={Detail} />
        <Route exact path={"/todoapp"} component={ToDoApp} />
        <Route exact path={"/usestate"} component={UseStateDemo} />
        <Route exact path={"/useeffect"} component={UseEffectDemo} />
        <Route exact path={"/usecallback"} component={UseCallbackDemo} />
        <Route exact path={"/usememo"} component={UseMemoDemo} />
        <Route exact path={"/useref"} component={UseRefDemo} />
        <Route exact path={"/reduxhook"} component={ReduxHook} />
        <Route exact path={"/todolisthook"} component={ToDoListHook} />
        <Route exact path={"/demohoc"} component={DemoHOC} />

        <Route exact path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

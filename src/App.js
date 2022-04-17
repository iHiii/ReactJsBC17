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

import UserTemplate from "./templates/UserTemplate/UserTemplate";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Index from "./pages/AdminPage/Index/Index";
import User from "./pages/AdminPage/Users/User";
import DemoAntD from "./pages/DemoAntD/DemoAntD";
import DemoLayout from "./pages/DemoAntD/DemoLayout";

function App() {
  return (
    <BrowserRouter>
      {/* Nếu không để trong route luôn hiển thị mọi trang */}
      {/* <HeaderHome /> */}
      {/* <Home abc="123" /> */}
      <ModalHOC />
      <Switch>
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/about" component={About} />
        <HomeTemplate exact path={"/contact"} component={Contact} />
        <UserTemplate exact path={"/login"} component={Login} />
        <UserTemplate exact path={"/register"} component={Register} />
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

        <AdminTemplate path={"/admin/index"} component={Index} />
        <AdminTemplate path={"/admin/users"} component={User} />
        <AdminTemplate path={"/admin/demoantd"} component={DemoAntD} />

        <Route path={"/admin/demolayout"} component={DemoLayout} />

        <Route exact path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

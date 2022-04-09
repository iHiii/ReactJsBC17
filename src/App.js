import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HeaderHome from "./components/HeaderHome/HeaderHome";
import Profile from "./pages/Profile/Profile";
import Detail from './pages/Detail/Detail';
import ToDoApp from './pages/DemoAxios/ToDoApp/ToDoApp';
import UseStateDemo from './pages/Hooks/UseStateDemo/UseStateDemo';

function App() {
  return (
    <BrowserRouter>
      {/* Nếu không để trong route luôn hiển thị mọi trang */}
      <HeaderHome />
      {/* <Home abc="123" /> */}
      <Switch>
        <Route
          exact
          path={"/home"}
          render={(pRoute) => {
            //propRoute là props của thẻ Route bao gồm : history,match,location

            return (
              <div>
                <HeaderHome />
                <Home {...pRoute} />
              </div>
            );
          }}
        />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/detail/:id"} component={Detail} />
        <Route exact path={"/todoapp"} component={ToDoApp} />
        <Route exact path={"/usestate"} component={UseStateDemo} />

        <Route exact path={"/"} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

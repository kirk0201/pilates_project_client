import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import Home from "../pages/home/Home";
function MainNav() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default MainNav;

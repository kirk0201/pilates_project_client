import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import Login from "./login/Login";
import { FrameView } from "../styles/Common";
function Main() {
  return (
    <FrameView>
      {/* <div>메인페이지</div> */}
      <Login />
      {/* <button>다음</button> */}
    </FrameView>
  );
}

export default Main;

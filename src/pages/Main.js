import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import Login from "./login/Login";
function Main() {
  return (
    <FrameView>
      <div>메인페이지</div>
      <Login />
      <StyledLink to="/home" />
      <button>다음</button>
    </FrameView>
  );
}
export const FrameView = styled.div`
  width: 600px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  width: 100px;
  height: 40px;
  background-color: gray;
  border-radius: 5px;
`;
export default Main;

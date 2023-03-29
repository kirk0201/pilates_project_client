import styled from "styled-components";
import { FrameView, Container } from "../../styles/Common";

function Login() {
  return (
    // <LoginFrameView>
    <NewContainer>
      <DivLbl>아이디</DivLbl>
      <InputBlock></InputBlock>
      <DivLbl>비밀번호</DivLbl>
      <InputBlock type="password"></InputBlock>
      <ButtonLogin>로그인</ButtonLogin>
    </NewContainer>
    // </LoginFrameView>
  );
}

const NewContainer = styled(Container)`
  padding-top: 150px;
`;
const InputBlock = styled.input`
  display: block;
  width: 100%;
  height: 3rem;
  border-style: none;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 1.5rem;
  font-size: 1.2rem;
`;

const DivLbl = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  color: navy; //dimgray
  margin-bottom: 10px;
`;

const ButtonLogin = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  background-color: #114580;
  color: white;
  border: none;
  &:hover {
    background-color: #115580;
  }
`;
export default Login;

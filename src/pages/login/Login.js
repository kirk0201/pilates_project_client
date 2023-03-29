import styled from "styled-components";
import { FrameView } from "../Main";
function Login() {
  return (
    <FrameView>
      <InputBlock />
    </FrameView>
  );
}

const InputBlock = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 10px;
`;

const LoginFrameView = styled(FrameView)`
  margin: 0 auto;
`;
export default Login;

import styled from "styled-components";
import KakaoLogin from "../../components/KakaoLogin";
import { PLFrame } from "../../components/PLFrame";

const Login = () => {
  return (
    <PLFrame>
      <KakaoLogin />
    </PLFrame>
  );
};

export default Login;

const LoginBox = styled.div`
  box-sizing: border-box;
`;

import styled from "styled-components";
import KakaoLogin from "../components/KakaoLogin";

const Login = () => {
  return (
    <LoginBox>
      <KakaoLogin />
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  box-sizing: border-box;
`;

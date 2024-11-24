import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import axios from "axios"; 

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const loginData = {
      id: id,
      password: password,
    };

    console.log("로그인 요청 데이터:", loginData);

    try {
      // const response = await axios.post("/auth/login", loginData);
      // console.log("로그인 성공:", response.data);

      // navigate("/"); 
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return (
    <Container>
      <Header>
        <BackIcon src="/assets/backicon.png" alt="Back" />
      </Header>

      <Logo src="/assets/logo1.png" alt="Logo" />
      <Input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <SignupContainer>
        <Text>아직 AssetAid 회원이 아니라면?</Text>
        <SignupLink onClick={() => navigate("/signup")}>회원가입</SignupLink>
      </SignupContainer>
    </Container>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center; 
  justify-content: flex-start; 
  width: 100%; 
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const BackIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: #fff;
`;

const Logo = styled.img`
  width: 300px;
  margin: 100px 0 40px 0;
`;

const Input = styled.input`
  width: 320px;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 9px;
  padding: 0 10px;
  margin-bottom: 15px;
`;

const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: #fc7900;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin: 30px 0 5px;

  &:hover {
    background-color: #e67300;
  }
`;

const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Text = styled.span`
  font-size: 14px;
  color: #333;
`;

const SignupLink = styled.span`
  margin-left: 10px;
  color: #fc7900;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #e67300;
  }
`;

export default Login;


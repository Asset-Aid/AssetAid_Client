import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Preference1: React.FC = () => {
  const dummyData = {
    nickname: "부자되십송",
  };
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/preference/basic");
  };
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <Container>
      <Header>
        <BackButton onClick={handleHome}>
          <Logo src="/assets/logo1.png" />
        </BackButton>
      </Header>
      <Title1>
        환영합니다 <Highlight>{dummyData.nickname}</Highlight> 님의
      </Title1>
      <Title2>금융성향을 알려주세요!</Title2>

      <CharacterImage src="/assets/character2.png" alt="Character" />
      <StartButton onClick={handleNext}>START</StartButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title1 = styled.h2`
  color: #2d2d2d;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 30px;
  margin-top: -50px;
`;
const Title2 = styled.h2`
  color: #2d2d2d;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 73px;
`;

const Highlight = styled.span`
  color: #fc7900;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CharacterImage = styled.img`
  width: 170px;
  margin: 20px 0;
  margin-left: 165px;
  margin-top: 150px;
`;

const StartButton = styled.button`
  border-radius: 35px;
  background: #f58748;
  color: white;
  border: none;
  width: 326px;
  height: 50px;
  flex-shrink: 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: -20px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff8000;
  }
`;
const BackButton = styled.button`
  width: 100px;
  height: 13.514px;
  background: none;
  border: none;
  flex-shrink: 0;
  margin-left: 80px;
  margin-right: 100px;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 90px;
  height: 11px;
`;
const Header = styled.div`
  display: flex;
  align-items: left;
  margin-bottom: 100px;
`;
export default Preference1;

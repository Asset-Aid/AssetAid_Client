import React from "react";
import styled from "styled-components";

interface Preference1Props {
  nickname: string;
}

const Preference1: React.FC<Preference1Props> = ({ nickname }) => {
  const dummyData = {
    nickname: "부자되십송",
  };
  return (
    <Container>
      <Title1>
        환영합니다 <Highlight>{dummyData.nickname}</Highlight> 님의
      </Title1>
      <Title2>금융성향을 알려주세요!</Title2>

      <CharacterImage src="/assets/character2.png" alt="Character" />
      <StartButton>START</StartButton>
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

export default Preference1;

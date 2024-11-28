import React from "react";
import styled from "styled-components";
import GoalCard from "../component/preference/GoalCard";
import { useNavigate } from "react-router-dom";

interface PreferenceGoal1Props {
  nickname: string;
  shortTermCount: number;
  longTermCount: number;
}

const PreferenceGoal1: React.FC<PreferenceGoal1Props> = (
  {
    //   nickname,
    //   shortTermCount,
    //   longTermCount,
  }
) => {
  const dummyData = {
    nickname: "부자되십송",
    shortTermCount: 2,
    longTermCount: 1,
  };

  const navigate = useNavigate();
  const handleShort = () => {
    navigate("/preference/goal/short");
  };
  const handleLong = () => {
    navigate("/preference/goal/long");
  };
  const handleHome = () => {
    navigate("/home");
  };
  const handleBefore = () => {
    navigate("/preference/basic");
  };
  return (
    <Container>
      <Header>
        <BackButton onClick={handleBefore}>{"<"}</BackButton>
        <Logo src="/assets/logo1.png" />
      </Header>
      <Progress>
        <Circle active>1</Circle>
        <Dots active />
        <Circle active>2</Circle>
        <Dots />
        <Circle>3</Circle>
      </Progress>

      <Title>
        <Nickname>{dummyData.nickname}</Nickname> 님의 재정목표는 단기입니까?
        장기입니까?
      </Title>

      <ButtonContainer>
        <SelectButton onClick={handleShort}>
          단기
          <Description>6개월보다 짧은 기간</Description>
        </SelectButton>
        <SelectButton onClick={handleLong}>
          장기
          <Description>6개월보다 긴 기간</Description>
        </SelectButton>
      </ButtonContainer>

      <Footer>
        <GoalCard
          nickname={dummyData.nickname}
          shortTermCount={dummyData.shortTermCount}
          longTermCount={dummyData.longTermCount}
        />
        <StopButton onClick={handleHome}>그만하기</StopButton>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 100vh;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 100px;
  height: 13.514px;
  flex-shrink: 0;
  margin-left: 80px;
  margin-right: 100px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #f58748;
  }
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;

const Circle = styled.div<{ active?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#F58748" : "#C8C4BB")};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
`;

const Dots = styled.div<{ active?: boolean }>`
  width: 40px;
  height: 2px;
  background-color: ${({ active }) => (active ? "#FFCCAE" : "#C8C4BB")};
  border-radius: 2px;
`;

const Title = styled.h2`
  color: #2d2d2d;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 140px;
  margin-bottom: 30px;
`;

const Nickname = styled.span`
  color: #fc7900;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
`;

const SelectButton = styled.button`
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 20px;
  border: none;
  border-radius: 9px;
  background-color: #f58748;
  cursor: pointer;
  text-align: center;
  position: relative;

  &:hover {
    background-color: #e67300;
  }
`;

const Description = styled.div`
  font-size: 12px;
  color: #fff;
  margin-top: 4px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const StopButton = styled.button`
  width: 60.75px;
  height: 18px;
  flex-shrink: 0;
  background: none;
  margin-top: 8px;
  border: none;
  color: #c8c4bb;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export default PreferenceGoal1;

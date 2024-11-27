import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SliderComponent from "../component/preference/sliderComponent";

interface Preference2Props {
  nickname: string;
}

const Preference2: React.FC<Preference2Props> = ({ nickname }) => {
  const dummyData = {
    nickname: "부자되십송",
  };
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/preference/goal");
  };
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
        <Logo src="/assets/logo1.png" />
      </Header>
      <Progress>
        <Level>1</Level>
        <Level>2</Level>
        <Level>3</Level>
      </Progress>

      <Title>
        <Highlight>{dummyData.nickname}</Highlight> 님의 직업군을 알려주세요
      </Title>
      <ButtonContainer>
        <HorizontalContainer>
          <Button>학생</Button>
          <Button>비정규직</Button>
          <Button>정규직</Button>
          <Button>인턴</Button>
        </HorizontalContainer>
      </ButtonContainer>

      <Title>
        <Highlight>{dummyData.nickname}</Highlight> 님의 월 소득 수준을
        알려주세요
      </Title>
      <SliderComponent />

      <Title>
        <Highlight>{dummyData.nickname}</Highlight> 님의 월 평균 지출 금액을
        알려주세요
      </Title>
      <SliderComponent />

      <Title>
        <Highlight>{dummyData.nickname}</Highlight> 님의 부채 금액을 알려주세요
      </Title>
      <SliderComponent />
      <Title>
        <Highlight>{dummyData.nickname}</Highlight> 님의 선호 및 사용중인 은행을
        알려주세요
      </Title>
      <BankButtonContainer>
        <HorizontalContainer>
          <Button>농협</Button>
          <Button>토스뱅크</Button>
          <Button>카카오뱅크</Button>
          <Button>삼성</Button>
        </HorizontalContainer>
        <HorizontalContainer>
          <Button>현대</Button>
          <Button>케이뱅크</Button>
          <Button>국민</Button>
          <Button>하나</Button>
        </HorizontalContainer>
        <HorizontalContainer>
          <Button>우리</Button>
          <Button>SC제일</Button>
          <Button>기업은행</Button>
          <Button>지방은행</Button>
        </HorizontalContainer>
      </BankButtonContainer>
      <Description>
        지방은행의 경우 경남은행, 광주은행, 대구은행, 부산은행, 전북은행,
        제주은행을 포함하고 있습니다.
      </Description>

      <Footer>
        <NextButton onClick={handleNext}>다음으로</NextButton>
        <StopButton onClick={handleHome}>그만하기</StopButton>
      </Footer>
    </Container>
  );
};

export default Preference2;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
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
    color: #00c853;
  }
`;
const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
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

const Progress = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
`;
const Level = styled.div`
   width: 20px;
height: 20px;
flex-shrink: 0;
    border-radius: 50%;
    background: #ddd;
    color: #F5F5F5;
text-align: center;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top : -10px;


    &:nth-child(1) {
      background: #F58748;
`;

const Title = styled.h2`
  color: #2d2d2d;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  text-align: left;
`;

const Highlight = styled.span`
  color: #fc7900;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border-radius: 32.5px;
  background: #fc7900;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 78px;
  height: 37px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ff8000;
  }
`;

const BankButtonContainer = styled(ButtonContainer)`
  margin: 20px 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const NextButton = styled.button`
  width: 312px;
  height: 49px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid #c8c4bb;
  color: #c8c4bb;
  background: none;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

const Description = styled.p`
  color: #797979;
  text-align: right;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 175px;
  height: 20px;
  flex-shrink: 0;
  margin-left: 150px;
  margin-top: -10px;
`;

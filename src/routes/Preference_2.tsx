import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SliderComponent from "../component/preference/sliderComponent";

interface Preference2Props {
  nickname: string;
}

const Preference2: React.FC<Preference2Props> = ({ nickname }) => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const dummyData = {
    nickname: "부자되십송",
  };
  const navigate = useNavigate();

  const handleBefore = () => {
    navigate("/preference/start");
  };
  const handleNext = () => {
    navigate("/preference/goal/start");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handleJobSelect = (job: string) => {
    setSelectedJob(job);
  };

  const handleBankToggle = (bank: string) => {
    if (selectedBanks.includes(bank)) {
      setSelectedBanks(selectedBanks.filter((b) => b !== bank));
    } else {
      setSelectedBanks([...selectedBanks, bank]);
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBefore}>{"<"}</BackButton>
        <Logo src="/assets/logo1.png" />
      </Header>
      <Progress>
        <Circle active>1</Circle>
        <Dots />
        <Circle>2</Circle>
        <Dots />
        <Circle>3</Circle>
      </Progress>

      <Title>
        <Highlight>{dummyData.nickname}</Highlight> 님의 직업군을 알려주세요
      </Title>
      <HorizontalContainer>
        {["학생", "비정규직", "정규직", "인턴"].map((job) => (
          <Button
            key={job}
            active={selectedJob === job}
            onClick={() => handleJobSelect(job)}
          >
            {job}
          </Button>
        ))}
      </HorizontalContainer>

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
      <HorizontalContainer>
        {[
          "농협",
          "토스뱅크",
          "카카오뱅크",
          "삼성",
          "현대",
          "케이뱅크",
          "국민",
          "하나",
          "우리",
          "SC제일",
          "기업은행",
          "지방은행",
        ].map((bank) => (
          <Button
            key={bank}
            active={selectedBanks.includes(bank)}
            onClick={() => handleBankToggle(bank)}
          >
            {bank}
          </Button>
        ))}
      </HorizontalContainer>
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

// 스타일 컴포넌트
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
    color: #f58748;
  }
`;

const HorizontalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개씩 배치 */
  gap: 10px; /* 버튼 간격 */
  justify-items: center; /* 버튼을 가운데 정렬 */
  margin-top: 10px;
  margin-bottom: 20px;
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

const Dots = styled.div`
  width: 40px;
  height: 2px;
  background-color: #c8c4bb;
  border-radius: 2px;
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

const Button = styled.button<{ active: boolean }>`
  color: ${({ active }) => (active ? "#fff" : "#333")};
  background-color: ${({ active }) => (active ? "#F58748" : "#f1f1f1")};
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 78px;
  height: 37px;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  text-align: center;
  position: relative;

  &:hover {
    background-color: ${({ active }) => (active ? "#e67300" : "#ddd")};
  }
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
  cursor: pointer;

  &:hover {
    background-color: #f58748;
    color: #fff;
  }
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
  cursor: pointer;
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

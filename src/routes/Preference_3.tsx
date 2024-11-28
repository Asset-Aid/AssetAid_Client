import React, { useState } from "react";
import styled from "styled-components";
import SliderComponent from "../component/preference/sliderComponent";
import { useNavigate } from "react-router-dom";

const Preference3: React.FC = () => {
  const [knowledgeLevel, setKnowledgeLevel] = useState<string>("중");
  const [preference, setPreference] = useState<string>("이자율");

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/preference/end");
  };
  const handleHome = () => {
    navigate("/home");
  };
  const handleBefore = () => {
    navigate("/preference/goal/start");
  };

  const handleKnowledgeClick = (level: string) => setKnowledgeLevel(level);
  const handlePreferenceClick = (pref: string) => setPreference(pref);

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBefore}>{"<"}</BackButton>
        <Logo src="/assets/logo1.png" />
      </Header>
      <Title>
        <Nickname>부자되십송</Nickname> 님의 금융에 대한 지식 수준을 알려주세요
      </Title>
      <KnowledgeButtonContainer>
        {["상", "중", "하"].map((level) => (
          <KnowledgeButton
            key={level}
            active={knowledgeLevel === level}
            onClick={() => handleKnowledgeClick(level)}
          >
            {level}
          </KnowledgeButton>
        ))}
      </KnowledgeButtonContainer>
      <KnowledgeDescription>
        {knowledgeLevel === "상"
          ? "금융상품도 많이 사용해봤고 금융에 대해 잘 알고 있습니다"
          : knowledgeLevel === "중"
          ? "금융상품을 사용해봤지만 금융에 대해 잘 모릅니다"
          : "금융상품을 써본 경험도 거의 없고 금융에 대해 잘 모릅니다"}
      </KnowledgeDescription>

      <Subtitle>투자나 저축에 할당할 수 있는 금액은 얼마입니까?</Subtitle>
      <SliderComponent />

      <Subtitle>금융상품 선택 시 가장 중요한 점을 알려주세요</Subtitle>
      <PreferenceButtonContainer>
        {["혜택", "이자율", "은행", "유동성", "이용편의성", "저축기간"].map(
          (item) => (
            <PreferenceButton
              key={item}
              active={preference === item}
              onClick={() => handlePreferenceClick(item)}
            >
              {item}
            </PreferenceButton>
          )
        )}
      </PreferenceButtonContainer>
      <Footer>
        <NextButton onClick={handleNext}>다음으로</NextButton>
        <StopButton onClick={handleHome}>그만하기</StopButton>
      </Footer>
    </Container>
  );
};

export default Preference3;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  height: 100vh;
  overflow-y: auto;
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

const Title = styled.h2`
  color: #2d2d2d;
  font-size: 16px;
  margin: 20px 0 10px;
`;

const Nickname = styled.span`
  color: #fc7900;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const KnowledgeButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const KnowledgeButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#FC7900" : "#f1f1f1")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  width: 80px;
  height: 46px;

  &:hover {
    background-color: ${({ active }) => (active ? "#e67300" : "#ddd")};
  }
`;

const KnowledgeDescription = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #797979;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  margin: 20px 0 10px;
  color: #333;
`;

const PreferenceButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

const PreferenceButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#FC7900" : "#f1f1f1")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  width: 100px;
  height: 46px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? "#e67300" : "#ddd")};
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
  cursor: pointer;
`;

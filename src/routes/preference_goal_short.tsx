import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GoalSliderComponent from "../component/preference/GoalSliderComponent";
import { useNavigate } from "react-router-dom";

const PreferenceGoalShort: React.FC = () => {
  const [goal, setGoal] = useState<string>("여행");
  const [amount, setAmount] = useState<number>(500000);
  const [year, setYear] = useState<number>(2025);
  const [month, setMonth] = useState<number>(1);
  const [day, setDay] = useState<number>(1);
  const [frequency, setFrequency] = useState<string>("매일");
  const [savingsPerPeriod, setSavingsPerPeriod] = useState<number>(0);

  const handleGoalClick = (selectedGoal: string) => setGoal(selectedGoal);
  const handleFrequencyClick = (selectedFrequency: string) =>
    setFrequency(selectedFrequency);
  useEffect(() => {
    const today = new Date();
    const targetDate = new Date(year, month - 1, day);
    const remainingTime = (targetDate.getTime() - today.getTime()) / 1000;
    const remainingDays = Math.ceil(remainingTime / (60 * 60 * 24));

    let periods = 0;
    if (frequency === "매일") {
      periods = remainingDays;
    } else if (frequency === "매주") {
      periods = Math.ceil(remainingDays / 7);
    } else if (frequency === "매월") {
      periods = Math.ceil(remainingDays / 30);
    }

    const savings = periods > 0 ? amount / periods : 0;
    console.log(
      `남은 기간: ${periods}, 금액: ${amount}, 주기당 저축: ${savings}`
    );
    setSavingsPerPeriod(savings);
  }, [amount, year, month, day, frequency]);
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
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
        <Nickname>부자되십송</Nickname> 님의 단기재정목표 설정 목적은
        무엇인가요?
      </Title>
      <GoalButtonContainer>
        {["여행", "비상금", "큰 지출", "물건 구매", "선물 준비", "기타"].map(
          (item) => (
            <GoalButton
              key={item}
              active={goal === item}
              onClick={() => handleGoalClick(item)}
            >
              {item}
            </GoalButton>
          )
        )}
      </GoalButtonContainer>

      <Subtitle>희망하는 재정목표 금액은 얼마입니까?</Subtitle>
      <GoalSliderComponent amount={amount} setAmount={setAmount} />

      <Subtitle>목표 달성일을 설정해주세요</Subtitle>
      <DropdownContainer>
        <Dropdown
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {[2024, 2025].map((y) => (
            <option key={y} value={y}>
              {y}년
            </option>
          ))}
        </Dropdown>
        <Dropdown
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
            <option key={m} value={m}>
              {m}월
            </option>
          ))}
        </Dropdown>
        <Dropdown value={day} onChange={(e) => setDay(Number(e.target.value))}>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
            <option key={d} value={d}>
              {d}일
            </option>
          ))}
        </Dropdown>
      </DropdownContainer>

      <Subtitle>재정목표를 위한 저축주기를 골라주세요</Subtitle>
      <FrequencyButtonContainer>
        {["매일", "매주", "매월"].map((item) => (
          <FrequencyButton
            key={item}
            active={frequency === item}
            onClick={() => handleFrequencyClick(item)}
          >
            {item}
          </FrequencyButton>
        ))}
      </FrequencyButtonContainer>

      <Summary>
        <Nickname>부자되십송</Nickname> 님은 <Goal>{goal}</Goal>을 위해{" "}
        <Amount>₩{amount.toLocaleString()}</Amount>을 {frequency}{" "}
        <Savings>₩{savingsPerPeriod.toLocaleString()}</Savings>만큼 저축하며{" "}
        <br />
        <DateCheck>
          {year}년 {month}월 {day}일
        </DateCheck>{" "}
        까지 저축할 예정입니다.
      </Summary>

      <ButtonContainer>
        <NextButton>다음으로</NextButton>
        <StopButton>그만하기</StopButton>
      </ButtonContainer>
    </Container>
  );
};

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
    color: #00c853;
  }
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Nickname = styled.span`
  color: #fc7900;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const GoalButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

const GoalButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#FC7900" : "#f1f1f1")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  width: 100px;
  height: 46px;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ active }) => (active ? "#e67300" : "#ddd")};
  }
`;

const Subtitle = styled.h2`
  font-size: 16px;
  margin: 20px 0 10px;
  color: #333;
`;

const DropdownContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Dropdown = styled.select`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const FrequencyButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

const FrequencyButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#FC7900" : "#f1f1f1")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  width: 100px;
  height: 46px;
  flex-shrink: 0;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? "#e67300" : "#ddd")};
  }
`;

const Summary = styled.div`
  background: none;
  border: 0.3px solid #bbb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Goal = styled.span`
  color: #fc7900;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Amount = styled.span`
  color: #fc7900;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Savings = styled.span`
  color: #fc7900;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const DateCheck = styled.span`
  color: #fc7900;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ButtonContainer = styled.div`
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
export default PreferenceGoalShort;

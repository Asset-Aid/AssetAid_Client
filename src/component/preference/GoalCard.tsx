import React from "react";
import styled from "styled-components";

interface GoalCardProps {
  nickname: string;
  shortTermCount: number;
  longTermCount: number;
}

const GoalCard: React.FC<GoalCardProps> = ({
  nickname,
  shortTermCount,
  longTermCount,
}) => {
  const totalCount = shortTermCount + longTermCount;

  return (
    <CardContainer>
      <CharacterImage src={"/assets/character1.png"} alt="Character" />
      <Text>
        <Nickname>{nickname}</Nickname> 님의
        <br /> 저장된 재정목표는 <Count>{totalCount}개</Count>입니다
      </Text>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 10px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 10px auto;
`;

const CharacterImage = styled.img`
  width: 50px;
  height: 44.02px;
  margin-right: 10px;
`;

const Text = styled.div`
  color: #2d2d2d;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Nickname = styled.span`
  color: #fc7900;
  text-align: right;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Count = styled.span`
  color: #fc7900;
  text-align: right;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default GoalCard;

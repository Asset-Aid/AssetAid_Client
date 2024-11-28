import React from "react";
import styled from "styled-components";

interface SavingData {
  savingId: number;
  savingName: string;
  bankColor: string;
  bankName: string;
}

interface SavingRecommendCardProps {
  savingData: SavingData;
}

const SavingRecommendCard: React.FC<SavingRecommendCardProps> = ({
  savingData,
}) => {
  return (
    <CardContainer style={{ backgroundColor: savingData.bankColor }}>
      <Title>{savingData.savingName}</Title>
      <ImageContainer>
        <Character src="/assets/character1.png" alt="Character" />
      </ImageContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 16px;
  padding: 16px;
  margin: 8px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: #121212;
  margin-bottom: 8px;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 85px;
  right: 5px;
`;

const Character = styled.img`
  width: 52px;
  height: 50px;
`;

export default SavingRecommendCard;

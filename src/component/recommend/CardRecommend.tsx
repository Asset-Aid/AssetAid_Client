import React from "react";
import styled from "styled-components";

interface CardData {
  cardId: number;
  cardName: string;
  bankColor: string;
  bankName: string;
}

interface CardRecommendCardProps {
  cardData: CardData;
}

const CardRecommendCard: React.FC<CardRecommendCardProps> = ({ cardData }) => {
  return (
    <CardContainer style={{ backgroundColor: cardData.bankColor }}>
      <Title>{cardData.cardName}</Title>
      <ImageContainer>
        <Character src="/assets/character1.png" alt="Card Character" />
      </ImageContainer>
      <BankName>{cardData.bankName}</BankName>
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
  font-size: 15px;
  font-weight: bold;
  color: #121212;
  margin-bottom: 8px;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 85px;
  right: 80px;
`;

const Character = styled.img`
  width: 50px;
  height: 50px;
`;

const BankName = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 110px;
  left: 78px;
`;

export default CardRecommendCard;

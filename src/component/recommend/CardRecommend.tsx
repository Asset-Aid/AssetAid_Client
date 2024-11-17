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
  right: 70px;
`;

const Character = styled.img`
  width: 52px;
  height: 50px;
`;

export default CardRecommendCard;

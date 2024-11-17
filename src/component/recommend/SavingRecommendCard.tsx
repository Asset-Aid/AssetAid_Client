import React from "react";
import styled from "styled-components";

interface DepositData {
  depositId: number;
  depositName: string;
  bankColor: string;
  bankName: string;
}

interface DepositRecommendCardProps {
  depositData: DepositData;
}

const DepositRecommendCard: React.FC<DepositRecommendCardProps> = ({
  depositData,
}) => {
  return (
    <Card style={{ backgroundColor: depositData.bankColor }}>
      <Title>{depositData.depositName}</Title>
      <ImageContainer>
        <CardImage src="/assets/character1.png" alt="Character" />
      </ImageContainer>
      <BankName>{depositData.bankName}</BankName>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
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

const CardImage = styled.img`
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

export default DepositRecommendCard;

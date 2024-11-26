import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeartIcon } from './HeartIcon';
// import axios from 'axios';

interface CardModalProps {
  visible: boolean;
  onClose: () => void;
  id: number;
}

interface CardInfo {
  cardId: number;
  annualFeeFor: number | null;
  annualFeeKor: number;
  cardLimit: number | null;
  cardType: number;
  cardImage: string;
  bank: string;
  benefit: string;
  cardName: string;
}

const CardModal = ({ visible, onClose, id }: CardModalProps) => {
  const [cardInfo, setCardInfo] = useState<CardInfo | null>(null);

  useEffect(() => {
    if (visible && id) {
      // axios.get(`/recommend/cardInfo/${id}`)
      //   .then(response => {
      //     setCardInfo(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching card info:', error);
      //   });

      const mockResponse = {
        cardId: 200,
        annualFeeFor: null,
        annualFeeKor: 2000,
        cardLimit: null,
        cardType: 1,
        cardImage: "https://d1c5n4ri2guedi.cloudfront.net/card/407/card_img/28394/407card.png",
        bank: "현대카드",
        benefit: "이용금액별\n1~0.5% 적립",
        cardName: "현대카드M CHECK현대카드"
      };
      setCardInfo(mockResponse);
    }
  }, [visible, id]);

  if (!cardInfo) {
    return null;
  }

  return (
    <ModalOverlay visible={visible}>
      <ModalContainer>
        <ModalHeader>
          <HeartIcon id={id} type="card" />
          <CloseButton onClick={onClose}>
            <ExitIcon src="/assets/exiticon.png" alt="Exit" />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          <TitleContainer>
            <TitleText>{cardInfo.cardName} | 카드</TitleText>
          </TitleContainer>
          <ImageContainer>
            <CardImage src={cardInfo.cardImage} alt={cardInfo.cardName} />
          </ImageContainer>
          <DetailContainer>
            <DetailList>
              <DetailItem>은행: {cardInfo.bank}</DetailItem>
              <DetailItem>연회비: {cardInfo.annualFeeKor.toLocaleString()} 원</DetailItem>
              <DetailItem>카드 한도: {cardInfo.cardLimit ? cardInfo.cardLimit.toLocaleString() : '없음'}</DetailItem>
            </DetailList>
            <DetailText>
              {cardInfo.benefit.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </DetailText>
          </DetailContainer>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

// 스타일 컴포넌트
const ModalOverlay = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  width: 360px;
  height: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExitIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const TitleContainer = styled.div`
  width: 320px;
  height: 50px;
  border: 3px solid #FC7900;
  border-radius: 10px;
  background-color: #FEE0C5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const TitleText = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #FC7900;
`;

const ImageContainer = styled.div`
  width: 320px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DetailContainer = styled.div`
  width: 320px;
  height: 150px;
  background-color: #F5F5F5;
  border-radius: 10px;
  padding: 15px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #FC7900 #F5F5F5;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #FC7900;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #F5F5F5;
  }
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

const DetailItem = styled.li`
  position: relative;
  font-size: 13px;
  margin-bottom: 10px;
  padding-left: 10px;

  &::before {
    content: '●';
    position: absolute;
    left: 0;
    top: 7px;
    font-size: 5px;
    color: #000;
  }
`;

const DetailText = styled.p`
  font-size: 13px;
  text-align: left;
  margin-top: 10px;
`;

export default CardModal;

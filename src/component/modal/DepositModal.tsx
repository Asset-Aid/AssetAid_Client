import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeartIcon } from './HeartIcon';
// import axios from 'axios';
import { useAuth } from '../../AuthContext';

interface DepositModalProps {
  visible: boolean;
  onClose: () => void;
  id: number;
}

interface DepositInfo {
  depositId: number;
  depositName: string;
  bank: string;
  joinWay: string;
  startAt: string;
  endAt: string | null;
  limitDeposit: number;
  contents: string;
  intRate: number;
}

const DepositModal = ({ visible, onClose, id }: DepositModalProps) => {
  const [depositInfo, setDepositInfo] = useState<DepositInfo | null>(null);
  const { token } = useAuth();  // AuthContext에서 토큰을 가져옵니다.

  useEffect(() => {
    if (visible && id) {
      // axios.get(`/recommend/depositInfo/${id}`)
      //   .then(response => {
      //     setDepositInfo(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching deposit info:', error);
      //   });

      const mockResponse = {
        depositId: 670,
        depositName: "1석7조통장(실세금리정기예금)",
        bank: "중소기업은행",
        joinWay: "인터넷,스마트폰",
        startAt: "20241113",
        endAt: null,
        limitDeposit: 0,
        contents: "없음 실명의 개인\n(개인사업자 제외) 계좌 수 제한 없으며, 최소 1백만원 이상 납입한도 제한 없음",
        intRate: 0.0,
      };
      setDepositInfo(mockResponse);
    }
  }, [visible, id]);

  if (!depositInfo) {
    return null;
  }

  return (
    <ModalOverlay visible={visible}>
      <ModalContainer>
        <ModalHeader>
          {/* 로그인 상태에서만 하트 아이콘이 보이게 합니다 */}
          <HeartIconContainer>
            {token && <HeartIcon id={id} type="deposit" />}
          </HeartIconContainer>
          <CloseButton onClick={onClose}>
            <ExitIcon src="/assets/exiticon.png" alt="Exit" />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          <TitleContainer>
            <TitleText>{depositInfo.depositName} | 예금</TitleText>
          </TitleContainer>
          <DetailContainer>
            <DetailList>
              <DetailItem>은행: {depositInfo.bank}</DetailItem>
              <DetailItem>가입 방법: {depositInfo.joinWay}</DetailItem>
              <DetailItem>가입 시작일: {depositInfo.startAt}</DetailItem>
              <DetailItem>가입 종료일: {depositInfo.endAt || '없음'}</DetailItem>
              <DetailItem>최대 입금액: {depositInfo.limitDeposit > 0 ? `${depositInfo.limitDeposit.toLocaleString()} 원` : '제한 없음'}</DetailItem>
              <DetailItem>금리: {depositInfo.intRate.toFixed(2)}%</DetailItem>
            </DetailList>
            <DetailText>
              {depositInfo.contents.split('\n').map((line, index) => (
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

const HeartIconContainer = styled.div`
  width: 30px; 
  height: 30px;
`;

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
  height: 400px;
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

const DetailContainer = styled.div`
  width: 320px;
  height: 250px;
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

export default DepositModal;


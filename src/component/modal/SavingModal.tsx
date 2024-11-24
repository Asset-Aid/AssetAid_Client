import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeartIcon } from './HeartIcon';
// import axios from 'axios';

interface SavingModalProps {
  visible: boolean;
  onClose: () => void;
  id: number;
}

interface SavingInfo {
  savingId: number;
  savingName: string;
  bank: string;
  joinWay: string;
  startAt: string;
  endAt: string | null;
  limitDeposit: number;
  contents: string;
}

const SavingModal = ({ visible, onClose, id }: SavingModalProps) => {
  const [savingInfo, setSavingInfo] = useState<SavingInfo | null>(null);

  useEffect(() => {
    if (visible && id) {
      // axios.get(`/recommend/savingInfo/${id}`)
      //   .then(response => {
      //     setSavingInfo(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching saving info:', error);
      //   });

      const mockResponse = {
        savingId: 970,
        savingName: "여행스케치_남도투어적금",
        bank: "광주은행",
        joinWay: "영업점,스마트폰",
        startAt: "20241021",
        endAt: null,
        limitDeposit: 1000000,
        contents: "▶ 최고우대금리 1.9%p \n①예금가입일~만기일전일까지 당행이선정한 전라남도 관광지 방문 인증시 : 최고 1.5%p\n②신용(체크)카드사용실적300만원이상:최고 0.3%p\n③개인(신용)정보 동의: 0.1%p 만14세이상 개인 및 개인사업자 1. 가입기간 :12개월제,18개월제\n2. 가입금액 : 월 5만원 이상 1백만원 이하 (1인1계좌)\n※ 18개월 정액식 기본금리 3.3%, 최고금리 5.2%"
      };
      setSavingInfo(mockResponse);
    }
  }, [visible, id]);

  if (!savingInfo) {
    return null;
  }

  return (
    <ModalOverlay visible={visible}>
      <ModalContainer>
        <ModalHeader>
          <HeartIcon />
          <CloseButton onClick={onClose}>
            <ExitIcon src="/assets/exiticon.png" alt="Exit" />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          <TitleContainer>
            <TitleText>{savingInfo.savingName} | 적금</TitleText>
          </TitleContainer>
          <DetailContainer>
            <DetailList>
              <DetailItem>은행: {savingInfo.bank}</DetailItem>
              <DetailItem>가입 방법: {savingInfo.joinWay}</DetailItem>
              <DetailItem>가입 시작일: {savingInfo.startAt}</DetailItem>
              <DetailItem>가입 종료일: {savingInfo.endAt || '없음'}</DetailItem>
              <DetailItem>최대 입금액: {savingInfo.limitDeposit.toLocaleString()} 원</DetailItem>
            </DetailList>
            <DetailText>
              {savingInfo.contents.split('\n').map((line, index) => (
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
`

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

export default SavingModal;

import React from 'react';
import styled from 'styled-components';

const LikedData = [
  {
    name: "NH든든밥심예금",
    bank: "농협",
    type: "예금",
    salePeriod: "2023-12-31까지",
    joinPeriod: "5년",
    joinAmount: "1,000,000원",
    baseInterest: "3.0%",
    maxInterest: "4.5%"
  },
  {
    name: "국민VIP정기예금",
    bank: "국민은행",
    type: "예금",
    salePeriod: "2023-11-30까지",
    joinPeriod: "3년",
    joinAmount: "500,000원",
    baseInterest: "2.5%",
    maxInterest: "3.8%"
  },
  {
    name: "NH든든밥심예금",
    bank: "농협",
    type: "예금",
    salePeriod: "2023-12-31까지",
    joinPeriod: "5년",
    joinAmount: "1,000,000원",
    baseInterest: "3.0%",
    maxInterest: "4.5%"
  },
  {
    name: "국민VIP정기예금",
    bank: "국민은행",
    type: "예금",
    salePeriod: "2023-11-30까지",
    joinPeriod: "3년",
    joinAmount: "500,000원",
    baseInterest: "2.5%",
    maxInterest: "3.8%"
  },
  
];

const LikedItems = () => {
  return (
    <Container>
      <Header>
        <BackIcon src="/assets/backicon.png" alt="Back" />
        <Logo src="/assets/logo1.png" alt="Logo" />
        <ExitIcon src="/assets/exiticon.png" alt="Exit" />
      </Header>
      <MyPageHeader>
        <Title>찜한 상품</Title>
        <Separator />
      </MyPageHeader>
      {LikedData.map((item, index) => (
        <Item key={index}>
          <NameContainer>
            <NameText>{item.name}</NameText>
            <NameText>|</NameText>
            <NameText>{item.bank}</NameText>
            <NameText>|</NameText>
            <NameText>{item.type}</NameText>
          </NameContainer>
          <ContextRow>
            <ContentText>* 판매 기간 : </ContentText>
            <ContentText>{item.salePeriod}</ContentText>
          </ContextRow>
          <ContextRow>
            <ContentText>* 가입 기간 : </ContentText>
            <ContentText>{item.joinPeriod}</ContentText>
          </ContextRow>
          <ContextRow>
            <ContentText>* 가입 금액 : </ContentText>
            <ContentText>{item.joinAmount}</ContentText>
          </ContextRow>
          <ContextRow>
            <ContentText>* 기본 금리 : </ContentText>
            <ContentText>{item.baseInterest}</ContentText>
          </ContextRow>
          <ContextRow>
            <ContentText>* 최고 금리 : </ContentText>
            <ContentText>{item.maxInterest}</ContentText>
          </ContextRow>
        </Item>
      ))}
    </Container>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.img`
  width: 100px;
  height: 14px;
`;

const BackIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const ExitIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const Container = styled.div`
  padding: 16px;
  background-color: #fff;
`;

const MyPageHeader = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 16px;
  color: #2d2d2d;
  margin: 15px 0px 10px 8px;
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: #c8c4bb;
`;

const Item = styled.div`
  width: 320px;
  height: 120px;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 15px;
  box-sizing: border-box;
`;

const NameContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const NameText = styled.span`
  margin-right: 5px;
  font-weight: bold;
  font-size: 15px;
  color: #2d2d2d;
`;

const ContextRow = styled.div`
  display: flex;
  margin-left: 10px;
`;

const ContentText = styled.span`
  font-size: 11px;
  color: #2d2d2d;
`;

export default LikedItems;

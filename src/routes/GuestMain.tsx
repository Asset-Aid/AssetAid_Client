import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BannerCarousel from "../component/banner/BannerCarousel";

const DepositData = [
  {
    depositName: "LIVE정기예금",
    bank: "부산은행",
    depositId: 615,
  },
  {
    depositName: "e-그린세이브예금",
    bank: "한국스탠다드차타드은행",
    depositId: 610,
  },
  {
    depositName: "The플러스예금",
    bank: "광주은행",
    depositId: 660,
  },
];
const SavingData = [
  {
    savingId: 972,
    savingName: "jbank 저금통적금",
    bank: "제주은행",
  },
  {
    savingId: 971,
    savingName: "VIP플러스적금",
    bank: "광주은행",
  },
  {
    savingId: 970,
    savingName: "여행스케치_남도투어적금",
    bank: "광주은행",
  },
];
const CardData = [
  {
    cardId: 1,
    cardName: "신한카드 Mr.Life신한카드",
    bank: "신한카드",
  },
  {
    cardId: 2,
    cardName: "삼성카드 taptap O삼성카드",
    bank: "삼성카드",
  },
  {
    cardId: 3,
    cardName: "현대카드 M현대카드",
    bank: "현대카드",
  },
];

const GuestMain = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Logo src="/assets/logo1.png" alt="Logo" />
        <LoginButton>로그인 하기</LoginButton>
      </Header>
      <BannerCarousel />
      <StyledButton onClick={() => navigate("/DepositSearch")}>
        금융상품 찾아보기
      </StyledButton>
      <SectionTitle>실시간 인기 차트</SectionTitle>

      <ChartSection>
        <ChartTitle>
          <OrangeLine />
          예금
        </ChartTitle>
        {DepositData.map((item, index) => (
          <ChartItem key={item.depositId}>
            <Rank>{index + 1}</Rank>
            <ItemName>{item.depositName}&nbsp;</ItemName>
            <BankName> | {item.bank}</BankName>
          </ChartItem>
        ))}
      </ChartSection>

      <ChartSection>
        <ChartTitle>
          <OrangeLine />
          적금
        </ChartTitle>
        {SavingData.map((item, index) => (
          <ChartItem key={item.savingId}>
            <Rank>{index + 1}</Rank>
            <ItemName>{item.savingName}</ItemName>
            <BankName> | {item.bank}</BankName>
          </ChartItem>
        ))}
      </ChartSection>

      <ChartSection>
        <ChartTitle>
          <OrangeLine />
          카드
        </ChartTitle>
        {CardData.map((item, index) => (
          <ChartItem key={item.cardId}>
            <Rank>{index + 1}</Rank>
            <ItemName>{item.cardName}</ItemName>
            <BankName> | {item.bank}</BankName>
          </ChartItem>
        ))}
      </ChartSection>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.img`
  width: 100px;
  height: 14px;
  margin-top: 15px;
  margin-left: 85px;
`;

const LoginButton = styled.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
  margin-top: 15px;
  background-color: #ffaa64;
  color: white;
  font-weight: bold;
  font-size: 12px;
  border-radius: 8px;
  border: 0;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 50px;
  margin: 20px auto;
  display: block;
  background-color: #fc7900;
  border: 0;
  border-radius: 25px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  line-height: 50px;

  &:hover {
    background-color: #e67300;
  }
`;

const SectionTitle = styled.h2`
  color: #fc7900;
  font-weight: bold;
  margin: 0px 0;
`;

const ChartSection = styled.div`
  margin-bottom: 5px;
  padding-top: 5px;
`;

const ChartTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
  display: flex;
  align-items: center;
`;

const OrangeLine = styled.span`
  width: 260px;
  height: 2px;
  background-color: #fc7900;
  margin-right: 9px;
`;

const ChartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
`;

const Rank = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #000;
  margin-right: 8px;
`;

const ItemName = styled.span`
  font-weight: bold;
  font-size: 16px;
  flex-grow: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  width: 0;
  font-size: clamp(10px, 1.5vw, 16px);
`;

const BankName = styled.span`
  font-size: 13px;
  color: #555;
  text-align: right;
  margin-left: auto;
`;

export default GuestMain;

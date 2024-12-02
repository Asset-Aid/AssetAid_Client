import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardSearch = () => {
  const navigate = useNavigate();
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);
  const [cardResults, setCardResults] = useState<any[]>([]);

  const benefits = ['편의점', '음식', '주유', '통신', '교통', '쇼핑', '여행'];

  const handleBenefitSelect = (benefit: string) => {
    setSelectedBenefits((prev) =>
      prev.includes(benefit) ? prev.filter((b) => b !== benefit) : [...prev, benefit]
    );
  };

  const handleSearch = () => {
    if (selectedBenefits.length > 0) {
      const requestData = { benefits: selectedBenefits };
      console.log("보낸 데이터:", requestData);

      // 목업 데이터 사용
      const mockResponse = [
        {
          cardId: 200,
          cardName: "현대카드M CHECK",
          bank: "현대카드",
          benefits: ["쇼핑", "편의점"],
          cardType: 1,
          annualFeeKor: 2000,
          annualFeeFor: null,
          cardLimit: null,
        },
        {
          cardId: 230,
          cardName: "예시카드 2",
          bank: "현대카드",
          benefits: ["쇼핑"],
          cardType: 1,
          annualFeeKor: 2000,
          annualFeeFor: null,
          cardLimit: null,
        },
        {
          cardId: 300,
          cardName: "삼성카드 T2",
          bank: "삼성카드",
          benefits: ["외식", "교통"],
          cardType: 2,
          annualFeeKor: 10000,
          annualFeeFor: 5000,
          cardLimit: 3000000,
        },
        {
          cardId: 310,
          cardName: "우리카드 FRESH",
          bank: "우리카드",
          benefits: ["여행", "항공"],
          cardType: 1,
          annualFeeKor: 15000,
          annualFeeFor: 10000,
          cardLimit: 2000000,
        },
        {
          cardId: 320,
          cardName: "KB국민카드 WISH",
          bank: "KB국민카드",
          benefits: ["쇼핑", "편의점"],
          cardType: 1,
          annualFeeKor: 2000,
          annualFeeFor: null,
          cardLimit: 500000,
        },
        {
          cardId: 330,
          cardName: "하나카드 SIMPLE",
          bank: "하나카드",
          benefits: ["교육", "도서"],
          cardType: 3,
          annualFeeKor: 8000,
          annualFeeFor: 4000,
          cardLimit: 1000000,
        },
        {
          cardId: 340,
          cardName: "롯데카드 JOY",
          bank: "롯데카드",
          benefits: ["쇼핑", "영화"],
          cardType: 2,
          annualFeeKor: 12000,
          annualFeeFor: 8000,
          cardLimit: 1500000,
        },
        {
          cardId: 350,
          cardName: "신한카드 HAPPY",
          bank: "신한카드",
          benefits: ["외식", "쇼핑"],
          cardType: 1,
          annualFeeKor: 6000,
          annualFeeFor: null,
          cardLimit: 700000,
        },
        {
          cardId: 360,
          cardName: "삼성카드 LUXE",
          bank: "삼성카드",
          benefits: ["럭셔리", "여행"],
          cardType: 3,
          annualFeeKor: 30000,
          annualFeeFor: 25000,
          cardLimit: 5000000,
        },
        {
          cardId: 370,
          cardName: "NH카드 GREEN",
          bank: "NH농협카드",
          benefits: ["환경", "식료품"],
          cardType: 1,
          annualFeeKor: 5000,
          annualFeeFor: 3000,
          cardLimit: 800000,
        },
        {
          cardId: 380,
          cardName: "현대카드 TUNE",
          bank: "현대카드",
          benefits: ["음악", "스트리밍"],
          cardType: 2,
          annualFeeKor: 10000,
          annualFeeFor: 5000,
          cardLimit: null,
        },
        {
          cardId: 390,
          cardName: "KB국민카드 JOYFUL",
          bank: "KB국민카드",
          benefits: ["외식", "쇼핑"],
          cardType: 2,
          annualFeeKor: 2000,
          annualFeeFor: null,
          cardLimit: 600000,
        },
        {
          cardId: 400,
          cardName: "신한카드 PLUS",
          bank: "신한카드",
          benefits: ["교육", "레저"],
          cardType: 3,
          annualFeeKor: 12000,
          annualFeeFor: 8000,
          cardLimit: 1200000,
        },
        {
          cardId: 410,
          cardName: "롯데카드 FUN",
          bank: "롯데카드",
          benefits: ["영화", "편의점"],
          cardType: 1,
          annualFeeKor: 7000,
          annualFeeFor: 3000,
          cardLimit: 900000,
        },
      ];
      

      setCardResults(mockResponse);
    }
  };

  return (
    <Container>
      <Header>
        <BackIconContainer />
        <Logo src="/assets/logo1.png" alt="Logo" />
        <ExitIcon src="/assets/exiticon.png" alt="Exit" onClick={() => navigate('/')} />
      </Header>

      <SelectContainer>
        <SelectButton onClick={() => navigate('/DepositSearch')}>
          <ButtonText>예금</ButtonText>
        </SelectButton>
        <SelectButton onClick={() => navigate('/SavingSearch')}>
          <ButtonText>적금</ButtonText>
        </SelectButton>
        <SelectButton isCard>
          <ButtonText>카드</ButtonText>
        </SelectButton>
      </SelectContainer>

      <SearchContainer>
        <BoldText>혜택으로 카드 찾기</BoldText>
        <BenefitContainer>
          {benefits.map((benefit, index) => (
            <BenefitButton
              key={index}
              selected={selectedBenefits.includes(benefit)}
              onClick={() => handleBenefitSelect(benefit)}
            >
              <BenefitText>{benefit}</BenefitText>
            </BenefitButton>
          ))}
        </BenefitContainer>
      </SearchContainer>

      <ButtonContainer>
        <ResetButton onClick={() => { 
          setSelectedBenefits([]); 
          setCardResults([]); 
        }}>
          <ButtonText>초기화</ButtonText>
        </ResetButton>
        <SearchButton onClick={handleSearch} disabled={selectedBenefits.length === 0}>
          <ButtonText>검색</ButtonText>
        </SearchButton>
      </ButtonContainer>

      <ResultsContainer>
        {cardResults.map((card) => (
          <Item key={card.cardId}>
            <NameContainer>
              <NameText>{card.cardName} | 카드 | {card.bank}</NameText>
            </NameContainer>
            <ContextRow>
              <ContentText>* 혜택:  </ContentText>
              <ContentText> {card.benefits.join(", ")}</ContentText>
            </ContextRow>
          </Item>
        ))}
      </ResultsContainer>
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

const BackIconContainer = styled.div`
  width: 15px;
  height: 15px;
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

const SelectContainer = styled.div`
  display: flex;
  width: 250px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background-color: #fc7900;
  padding: 10px;
  border: 0;
  border-radius: 20px;
  margin: 15px auto 20px auto;
`;

const SelectButton = styled.button<{ isCard?: boolean }>`
  background-color: ${({ isCard }) => (isCard ? '#fee0c5' : '#f5f5f5')};
  border-radius: 20px;
  border: 0;
  padding: 10px;
  width: 70px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  padding: 0;
`;

const ButtonText = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #000;
  white-space: nowrap;
`;

const SearchContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const BoldText = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: #000;
`;

const BenefitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  white-space: nowrap;
`;

const BenefitText = styled.p`
  font-weight: bold;
  font-size: 11px;
  color: #000;
`;

const BenefitButton = styled.button<{ selected: boolean }>`
  margin: 3px;
  padding: 6px;
  width: 75px;
  background-color: ${({ selected }) => (selected ? '#fee0c5' : '#fff')};
  border: 1px solid #808080;
  border-radius: 15px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const ResetButton = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #808080;
  cursor: pointer;
`;

const SearchButton = styled.button<{ disabled: boolean }>`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #808080;
  background-color: #ffaa64;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const ResultsContainer = styled.div`
  margin-top: 20px;
  max-height: 450px;
 
  overflow-x:hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #FC7900 #FFFFFF;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #FC7900;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #FFFFFF;
  }
`;
const Item = styled.div`
  width: 320px;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-bottom: 10px;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }
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

export default CardSearch;



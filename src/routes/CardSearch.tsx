import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CardSearch = () => {
  const navigate = useNavigate();
  const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);

  const benefits = ['편의점', '음식', '주유', '통신', '교통', '쇼핑', '여행'];

  const handleBenefitSelect = (benefit: string) => {
    setSelectedBenefits((prev) =>
      prev.includes(benefit) ? prev.filter((b) => b !== benefit) : [...prev, benefit]
    );
  };

  const handleSearch = () => {
    if (selectedBenefits.length > 0) {
      const requestData = { benefits: selectedBenefits };
      console.log('Sending requestData:', requestData);

      /*
      axios
        .post('/search/cards', requestData)
        .then((response => console.log(response.data))
        .catch(error => console.error(error));
      */
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
        <ResetButton onClick={() => setSelectedBenefits([])}>
          <ButtonText>초기화</ButtonText>
        </ResetButton>
        <SearchButton onClick={handleSearch} disabled={selectedBenefits.length === 0}>
          <ButtonText>검색</ButtonText>
        </SearchButton>
      </ButtonContainer>
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

export default CardSearch;



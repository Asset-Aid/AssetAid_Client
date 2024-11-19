import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SavingSearch = () => {
  const navigate = useNavigate(); 
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const banks = [
    '농협', '국민', '삼성', '현대', '카카오뱅크', '토스뱅크', '케이뱅크', '하나', '우리', 'SC제일', '기업은행', '지방은행'
  ];

  const handleBankSelect = (bank: string) => {
    setSelectedBank(selectedBank === bank ? null : bank);
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  const handleTermSelect = (term: string) => {
    setSelectedTerm(term);
  };

  const handleSearch = () => {
    if (selectedBank && selectedType && selectedTerm) {
      //navigate('/SavingSearch');  
    }
  };

  return (
    <Container>

      <Header>
        <BackIcon src="/assets/backicon.png" alt="Back" />
        <Logo src="/assets/logo1.png" alt="Logo" />
        <ExitIcon src="/assets/exiticon.png" alt="Exit" />
      </Header>

      <SelectContainer>
        <SelectButton onClick={() => navigate('/DepositSearch')}>
          <ButtonText>예금</ButtonText>
        </SelectButton>
        <SelectButton isSaving >
          <ButtonText>적금</ButtonText>
        </SelectButton>
        <SelectButton onClick={() => navigate('/CardSearch')}>
          <ButtonText>카드</ButtonText>
        </SelectButton>
      </SelectContainer>

      <SearchContainer>
        <BoldText>은행으로 적금 찾기</BoldText>
        <BankContainer>
          {banks.map((bank, index) => (
            <BankButton
              key={index}
              selected={selectedBank === bank}
              onClick={() => handleBankSelect(bank)}
            >
              <BankText>{bank}</BankText>
            </BankButton>
          ))}
        </BankContainer>
        <InfoText>지방은행의 경우 경남은행,광주은행,대구은행,부산은행,<br />전북은행,제주은행을 포함하고 있습니다.</InfoText>

        <TypeContainer>
          <TypeButton selected={selectedType === '정액적립식'} onClick={() => handleTypeSelect('정액적립식')}>
            <BoldText>정액적립식</BoldText>
          </TypeButton>
          <TypeButton selected={selectedType === '자유적립식'} onClick={() => handleTypeSelect('자유적립식')}>
            <BoldText>자유적립식</BoldText>
          </TypeButton>
        </TypeContainer>

        <TermContainer>
          <TermText>만기</TermText>
          {['6개월', '12개월', '24개월 이상'].map((term, index) => (
            <TermOption key={index} selected={selectedTerm === term} onClick={() => handleTermSelect(term)}>
              <TermRadio selected={selectedTerm === term}></TermRadio>
              <TermText>{term}</TermText>
            </TermOption>
          ))}
        </TermContainer>
      </SearchContainer>

      <ButtonContainer>
        <ResetButton>
          <ButtonText>초기화</ButtonText>
        </ResetButton>
        <SearchButton onClick={handleSearch} disabled={!selectedBank || !selectedType || !selectedTerm}>
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

const SelectButton = styled.button<{ isSaving?: boolean }>`
  background-color: ${({ isSaving }) => (isSaving ? '#fee0c5' : '#f5f5f5')};
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

const BankContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  white-space: nowrap;
`;

const BankText = styled.p`
  font-weight: bold;
  font-size: 11px;
  color: #000;
`;

const BankButton = styled.button<{ selected: boolean }>`
  margin: 3px;
  padding: 6px;
  width: 75px;
  background-color: ${({ selected }) => (selected ? '#eeeeee' : '#fff')};
  border: 1px solid #808080;
  border-radius: 15px;
  cursor: pointer;
`;

const InfoText = styled.p`
  font-size: 10px;
  color: #808080;
  margin-top: 5px;
`;

const TypeContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const TypeButton = styled.button<{ selected: boolean }>`
  margin: 5px;
  padding: 5px;
  width: 150px;
  background-color: ${({ selected }) => (selected ? '#eeeeee' : '#fff')};
  border: 1px solid #808080;
  border-radius: 15px;
  cursor: pointer;
`;

const TermContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const TermText = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-right: 15px;
  white-space: nowrap;
`;

const TermOption = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 2px;
  cursor: pointer;
`;

const TermRadio = styled.div<{ selected: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #808080;
  background-color: ${({ selected }) => (selected ? '#ffae64' : '#fff')};
  margin-right: 5px;
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

export default SavingSearch;


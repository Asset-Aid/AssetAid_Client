import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DepositSearch = () => {
  const navigate = useNavigate(); 
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);

  const [depositResults, setDepositResults] = useState<any[]>([]);


  const banks = [
    '농협', '국민', '삼성', '현대', '카카오뱅크', '토스뱅크', '케이뱅크', '하나', '우리', 'SC제일', '기업은행', '지방은행'
  ];

  const handleBankSelect = (bank: string) => {
    if (selectedBanks.includes(bank)) {
      setSelectedBanks(selectedBanks.filter((b) => b !== bank));
    } else {
      setSelectedBanks([...selectedBanks, bank]);
    }
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  const handleTermSelect = (term: string) => {
    setSelectedTerm(term);
  };

  const handleSearch = () => {
    if (selectedBanks.length > 0 && selectedType && selectedTerm) {
      const requestData = {
        banks: selectedBanks,
        depositType: selectedType,
        maturity: selectedTerm,
      };
      console.log('Request Data:', requestData);

      // axios.post('/search/deposit', requestData)
      //   .then(response => console.log(response.data))
      //   .catch(error => console.error(error));

      const mockResponse = [
          {
              "depositId": 670,
              "name": "1석7조통장(실세금리정기예금)",
              "bank": "중소기업은행",
              "startAt": "2024-11-13",
              "endAt": null,
              "limitDeposit": 1000000,
              "basicRate": 2.5,
              "maxRate": 3.0
          },
          {
              "depositId": 671,
              "name": "NH주거래우대예금",
              "bank": "농협은행",
              "startAt": "2024-01-01",
              "endAt": "2024-12-31",
              "limitDeposit": 500000,
              "basicRate": 3.0,
              "maxRate": 3.5
          }

      ];

      setDepositResults(mockResponse);
    }
  };

  return (
    <Container>
      <Header>
        <BackIconContainer/>
        <Logo src="/assets/logo1.png" alt="Logo" />
        <ExitIcon src="/assets/exiticon.png" alt="Exit" onClick={() => navigate('/')}/>
      </Header>

      <SelectContainer>   
        <SelectButton isDeposit onClick={() => handleTypeSelect('예금')}>
          <ButtonText>예금</ButtonText>
        </SelectButton>
        <SelectButton onClick={() => navigate('/SavingSearch')} >
          <ButtonText>적금</ButtonText>
        </SelectButton>
        <SelectButton onClick={() => navigate('/CardSearch')}>
          <ButtonText>카드</ButtonText>
        </SelectButton>
      </SelectContainer>

      <SearchContainer>
        <BoldText>은행으로 예금 찾기</BoldText>
        <BankContainer>
          {banks.map((bank, index) => (
            <BankButton
              key={index}
              selected={selectedBanks.includes(bank)}
              onClick={() => handleBankSelect(bank)}
            >
              <BankText>{bank}</BankText>
            </BankButton>
          ))}
        </BankContainer>
        <InfoText>지방은행의 경우 경남은행,광주은행,대구은행,부산은행,<br />전북은행,제주은행을 포함하고 있습니다.</InfoText>

        <TypeContainer>
          <TypeButton selected={selectedType === '입출금자유예금'} onClick={() => handleTypeSelect('입출금자유예금')}>
            <BoldText>입출금자유예금</BoldText>
          </TypeButton>
          <TypeButton selected={selectedType === '정기예금'} onClick={() => handleTypeSelect('정기예금')}>
            <BoldText>정기예금</BoldText>
          </TypeButton>
        </TypeContainer>

        <TermContainer>
          <TermText>만기</TermText>
          {['6개월', '12개월', '24개월 이상'].map((term, index) => (
            <TermOption key={index} selected={selectedTerm === term} onClick={() => handleTermSelect(term)}>
              <TermRadio selected={selectedTerm === term}>
                <span/>
              </TermRadio>
              <TermText>{term}</TermText>
            </TermOption>
          ))}
        </TermContainer>
      </SearchContainer>

      <ButtonContainer>
        <ResetButton onClick={() => {
          setSelectedBanks([]);
          setSelectedType(null);
          setSelectedTerm(null);
          setDepositResults([]);
        }}>
          <ButtonText>초기화</ButtonText>
        </ResetButton>
        <SearchButton onClick={handleSearch} disabled={selectedBanks.length === 0 || !selectedType || !selectedTerm}>
          <ButtonText>검색</ButtonText>
        </SearchButton>
      </ButtonContainer>

      <ResultsContainer>
      {depositResults.map((deposit) => (
          <Item key={deposit.depositId}>
            <NameContainer>
              <NameText>{deposit.name} | 예금 | {deposit.bank}</NameText>
              
            </NameContainer>
            <ContextRow>
              <ContentText>* 기본 금리: {deposit.basicRate}% / 최대 금리: {deposit.maxRate}%</ContentText>
              <ContentText></ContentText>
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

const SelectButton = styled.button<{ isDeposit?: boolean }>`
  background-color: ${({ isDeposit }) => (isDeposit ? '#fee0c5' : '#f5f5f5')};
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
  background-color: ${({ selected }) => (selected ? '#fee0c5' : '#fff')};
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
  background-color: ${({ selected }) => (selected ? '#fee0c5' : '#fff')};
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
  border: 1px solid #808080;
  background-color: #fff; 
  margin-right: 5px;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */

  /* 내부 원 */
  &::after {
    content: '';
    width: 8px; 
    height: 8px;
    border-radius: 50%;
    background-color: ${({ selected }) => (selected ? '#ffae64' : 'transparent')};
  }
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
  max-height: 300px;

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

export default DepositSearch;


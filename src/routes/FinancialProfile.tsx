import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

const FinancialProfile = () => {
  const [profileData, setProfileData] = useState({
    job: '',
    salary: 0,
    spend: 0,
    debt: 0,
    knowledge_level: '',
    investment_style: '',
    available_amount: 0,
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      // try {
      //   const response = await axios.get(`/mypage/${id}/bias`);
      //   setProfileData(response.data);
      // } catch (error) {
      //   console.error('Error fetching profile data:', error);
      // }

      const mockResponse = {
        available_amount: 4580000,
        bank: null,
        bank_id: [1, 4],
        debt: 1580000,
        investment_style: 'safe',
        job: 'student',
        knowledge_level: 'high',
        salary: 50000000,
        spend: 500000,
        user_id: '7',
      };
      setProfileData(mockResponse);
    };

    fetchProfileData();
  }, []);

  return (
    <Container>
      <Header>
        <BackIcon src="/assets/backicon.png" alt="Back" />
        <Logo src="/assets/logo1.png" alt="Logo" />
        <ExitIcon src="/assets/exiticon.png" alt="Exit" />
      </Header>
      <MyPageHeader>
        <Title>금융성향 확인 및 수정</Title>
        <Separator />
      </MyPageHeader>

      <ContentContainer>
        <Content>
          <LineContainer>
            <InfoNameText>직업군</InfoNameText>
            <InfoContainer>
              <InfoText>{profileData.job}</InfoText>
            </InfoContainer>
          </LineContainer>

          <LineContainer>
            <InfoNameText>월 소득 수준</InfoNameText>
            <InfoContainer>
              <InfoText>{profileData.salary.toLocaleString()} 원</InfoText>
            </InfoContainer>
          </LineContainer>

          <LineContainer>
            <InfoNameText>월 지출 수준</InfoNameText>
            <InfoContainer>
              <InfoText>{profileData.spend.toLocaleString()} 원</InfoText>
            </InfoContainer>
          </LineContainer>

          <LineContainer>
            <InfoNameText>부채 수준</InfoNameText>
            <InfoContainer>
              <InfoText>{profileData.debt.toLocaleString()} 원</InfoText>
            </InfoContainer>
          </LineContainer>

          <LineContainer>
            <InfoNameText>금융지식 수준</InfoNameText>
            <InfoContainer>
              <InfoText>{profileData.knowledge_level}</InfoText>
            </InfoContainer>
          </LineContainer>

          <LineContainer>
            <InfoNameText>투자 성향</InfoNameText>
            <InfoContainer>
              <InfoText>{profileData.investment_style}</InfoText>
            </InfoContainer>
          </LineContainer>

          <LineContainer>
            <InfoNameText>투자 가능 금액</InfoNameText>
            <InfoContainer>
              <InfoText>{profileData.available_amount.toLocaleString()} 원</InfoText>
            </InfoContainer>
          </LineContainer>
        </Content>
      </ContentContainer>
      <EditButton>수정하기</EditButton>
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

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 30px;
  padding: 0;
`;

const Content = styled.div`
  max-width: 280px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 280px;
  margin-bottom: 10px;
`;

const InfoNameText = styled.span`
  flex: 1;
  font-size: 17px;
  font-weight: bold;
  color: #2d2d2d;
  text-align: left;
  margin-right: 10px;
  white-space: nowrap;
`;

const InfoContainer = styled.div`
  flex: 2;
  height: 37px;
  border-radius: 4px;
  border: 1px solid #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

const InfoText = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #555555;
  text-align: center;
`;

const EditButton = styled.button`
  display: block;
  width: 330px;
  height: 45px;
  margin: 20px auto;
  border: 1px solid #fc7900;
  border-radius: 10px;
  background-color: transparent;
  color: #fc7900;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

export default FinancialProfile;

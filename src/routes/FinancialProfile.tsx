import React from 'react';
import styled from 'styled-components';


const FinancialProfileData =[

];

const FinancialProfile = () => {
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
            <InfoText />
          </InfoContainer>
        </LineContainer>

        <LineContainer>
          <InfoNameText>월 소득 수준</InfoNameText>
          <InfoContainer>
            <InfoText />
          </InfoContainer>
        </LineContainer>

        <LineContainer>
          <InfoNameText>월 지출 수준</InfoNameText>
          <InfoContainer>
            <InfoText />
          </InfoContainer>
        </LineContainer>

        <LineContainer>
          <InfoNameText>부채 수준</InfoNameText>
          <InfoContainer>
            <InfoText />
          </InfoContainer>
        </LineContainer>

        <LineContainer>
          <InfoNameText>금융지식 수준</InfoNameText>
          <InfoContainer>
            <InfoText />
          </InfoContainer>
        </LineContainer>

        <LineContainer>
          <InfoNameText>투자 성향</InfoNameText>
          <InfoContainer>
            <InfoText />
          </InfoContainer>
        </LineContainer>

        <LineContainer>
          <InfoNameText>투자 가능 금액</InfoNameText>
          <InfoContainer>
            <InfoText />
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
  display: flex; /* 플렉스 박스 활성화 */
  justify-content: center; /* 가로 가운데 정렬 */
  width: 100%; /* 부모 컨테이너의 전체 너비 사용 */
  height: auto; 
  margin-top:30px;
  padding: 0;
`

const Content = styled.div`
  max-width: 280px; /* Content의 최대 너비 고정 */
  width: 100%; /* 부모 요소 너비에 맞춤 */
  display: flex;
  flex-direction: column; /* 내부 요소를 세로로 배치 */
`;

const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 두 요소를 양 끝에 배치 */
  width: 100%; /* 부모 컨테이너의 전체 너비를 차지 */
  max-width: 280px; /* 최대 너비를 고정하여 균일한 레이아웃 유지 */
  margin-bottom: 10px; /* 요소 간의 간격 */
`;

const InfoNameText = styled.span`
  flex: 1; /* 이름 텍스트가 가변적으로 공간을 차지 */
  font-size: 17px;
  font-weight: bold;
  color: #2d2d2d;
  text-align: left; /* 텍스트를 왼쪽 정렬 */
  margin-right: 10px; /* 오른쪽 여백 추가 */
  white-space: nowrap
`;

const InfoContainer = styled.div`
  flex: 2; /* 입력 박스가 가변적으로 공간을 차지 */
  height: 37px;
  border-radius: 4px;
  border: 1px solid #c9c9c9;
  display: flex;
  align-items: center; /* 중앙 정렬 */
  justify-content: center; /* 텍스트를 가운데 정렬 */
  background-color: #f5f5f5; /* 약간의 배경색 추가 */
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

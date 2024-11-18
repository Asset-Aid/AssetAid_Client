import React from 'react';
import styled from 'styled-components';



const EditUserInfo = () => {
  return (
    <Container>
        
      <Header>
        <BackIcon src="/assets/backicon.png" alt="Back" />
        <Logo src="/assets/logo1.png" alt="Logo" />
        <ExitIcon src="/assets/exiticon.png" alt="Exit" />
      </Header>
      <MyPageHeader>
        <Title>회원 정보 수정</Title>
        <Separator />
      </MyPageHeader>
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



export default EditUserInfo;
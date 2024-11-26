import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BannerCarousel from "../component/banner/BannerCarousel";
// import axios from "axios";

const MyPage = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    user_id: "",
    nickname: "",
    birthday: "",
    job: "",
    salary: 0,
    available_amount: 0,
    investment_style: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      // try {
      //   const response = await axios.get(`/mypage/${id}/profile`);
      //   setProfileData(response.data);
      // } catch (error) {
      //   console.error("Error fetching profile data:", error);
      // }

      const mockResponse = {
        user_id: "buza",
        nickname: "부자되십송",
        birthday: "1990-05-21",
        job: "engineer",
        salary: 60000,
        available_amount: 20000,
        investment_style: "conservative",
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
      <ProfileContainer>
        <ProfileImage src="/assets/character3.png" alt="Profile" />
        <TextContainer>
          <NameWrapper>
            <NameHighlight>{profileData.nickname}</NameHighlight>
            <Name>님</Name>
          </NameWrapper>
          <UserId>@{profileData.user_id}</UserId>
          <LogoutText>로그아웃</LogoutText>
        </TextContainer>
      </ProfileContainer>

      <Separator />

      <ButtonContainer>
        <Button onClick={() => navigate("/edit-user-info")}>
          <ButtonLogo src="/assets/usericon.png" alt="User Info" />
          <ButtonText>
            유저정보
            <br />
            수정
          </ButtonText>
        </Button>

        <Button onClick={() => navigate("/financial-profile")}>
          <ButtonLogo src="/assets/walleticon.png" alt="Financial Profile" />
          <ButtonText>
            금융성향
            <br />
            확인 및 수정
          </ButtonText>
        </Button>

        <Button onClick={() => navigate("/financial-goals")}>
          <ButtonLogo src="/assets/goalicon.png" alt="Financial Goals" />
          <ButtonText>
            재정목표
            <br />
            확인
          </ButtonText>
        </Button>

        <Button onClick={() => navigate("/liked-items")}>
          <ButtonLogo src="/assets/likecheckicon.png" alt="Liked Items" />
          <ButtonText>
            찜한 상품
            <br />
            보기
          </ButtonText>
        </Button>
      </ButtonContainer>

      <BannerCarousel />
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
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  height: 100%;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ProfileImage = styled.img`
  width: 50px;
  margin-left: 30px;
  margin-right: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 3px;
`;

const NameHighlight = styled.span`
  color: #fc7900;
  font-weight: bold;
  font-size: 25px;
`;

const Name = styled.span`
  color: #000;
  font-weight: bold;
  font-size: 25px;
`;

const UserId = styled.p`
  color: #797979;
  font-size: 15px;
  margin-bottom: 5px;
`;

const LogoutText = styled.p`
  color: #c8c4bb;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;

const Separator = styled.div`
  height: 1px;
  background-color: #c8c4bb;
  margin: 30px 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`;

const Button = styled.button`
  width: 80px;
  height: 110px;
  background-color: #f58748;
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #e67340;
  }
`;

const ButtonText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
`;

const ButtonLogo = styled.img`
  width: 45px;
  margin-bottom: 5px;
`;


export default MyPage;

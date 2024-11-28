import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Preference4: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };
  const dummyData = {
    nickname: "부자되십송",
  };

  return (
    <Container>
      <Logo src="/assets/logo1.png" alt="Logo" />
      <MessageContainer>
        <Message>
          <Highlight>{dummyData.nickname}</Highlight> 님의 성향을 모두
          파악했습니다!
          <br />
          성향에 맞는 금융상품을 홈에서 확인해보세요 😉
        </Message>
        <MessageImg src="/assets/talk.png" />
      </MessageContainer>
      <Character src="/assets/character2.png" alt="Character" />
      <Button onClick={handleHomeClick}>홈으로 가기</Button>
    </Container>
  );
};

export default Preference4;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  text-align: center;
  padding: 20px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 100px;
`;

const MessageImg = styled.img`
  width: 285px;
  height: 199px;
`;

const Message = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  color: #333;
  margin: 0;
  position: absolute;
  top: 45px;
  text-align: center;
`;

const Highlight = styled.span`
  color: #fc7900;
`;

const Character = styled.img`
  width: 160px;
  flex-shrink: 0;
  height: auto;
  margin-top: 40px;
  margin-left: 130px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #fc7900;
  border: none;
  border-radius: 5px;
  width: 312px;
  height: 49px;
  flex-shrink: 0;
  margin-top: 100px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e67300;
  }
`;

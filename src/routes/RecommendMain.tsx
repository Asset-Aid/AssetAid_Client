import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DepositRecommendCard from "../component/recommend/DepositRecommendCard";
import SavingRecommendCard from "../component/recommend/SavingRecommendCard";
import CardRecommendCard from "../component/recommend/CardRecommend";

const depositData = [
  {
    depositId: 831,
    depositName: "NH왈츠회전예금 II",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    depositId: 988,
    depositName: "NH내가Green초록세상예금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    depositId: 870,
    depositName: "NH왈츠회전예금 II",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    depositId: 792,
    depositName: "NH왈츠회전예금 II",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    depositId: 834,
    depositName: "NH고향사랑기부예금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    depositId: 639,
    depositName: "NH고향사랑기부예금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    depositId: 717,
    depositName: "NH고향사랑기부예금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    depositId: 636,
    depositName: "NH왈츠회전예금 II",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    depositId: 951,
    depositName: "NH고향사랑기부예금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    depositId: 950,
    depositName: "NH올원e예금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
];

const savingData = [
  {
    savingId: 995,
    savingName: "NH올원e 미니적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    savingId: 996,
    savingName: "NH1934월복리적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    savingId: 997,
    savingName: "NH내가Green초록세상적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    savingId: 998,
    savingName: "NH고향사랑기부적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    savingId: 999,
    savingName: "NH직장인월복리적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    savingId: 1053,
    savingName: "NH올원e 미니적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    savingId: 1054,
    savingName: "NH1934월복리적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    savingId: 1055,
    savingName: "NH내가Green초록세상적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    savingId: 1056,
    savingName: "NH고향사랑기부적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    savingId: 1057,
    savingName: "NH직장인월복리적금",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
];

const cardData = [
  {
    cardId: 2,
    cardName: "삼성카드 taptap O삼성카드",
    bankId: [1, 4],
    bankColor: "#0047AB",
  },
  {
    cardId: 5,
    cardName: "삼성카드 & MILEAGE PLATINUM (스카이패스)삼성카드",
    bankId: [1, 4],
    bankColor: "#0047AB",
  },
  {
    cardId: 13,
    cardName: "삼성 iD SIMPLE 카드삼성카드",
    bankId: [1, 4],
    bankColor: "#0047AB",
  },
  {
    cardId: 20,
    cardName: "올바른 FLEX 카드NH농협카드",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    cardId: 21,
    cardName: "삼성 iD GLOBAL 카드삼성카드",
    bankId: [1, 4],
    bankColor: "#0047AB",
  },
  {
    cardId: 27,
    cardName: "올바른 NEW HAVE카드NH농협카드",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    cardId: 29,
    cardName: "삼성 iD ALL 카드삼성카드",
    bankId: [1, 4],
    bankColor: "#0047AB",
  },
  {
    cardId: 34,
    cardName: "zgm.the pay카드NH농협카드",
    bankId: [1, 4],
    bankColor: "#FFD700",
  },
  {
    cardId: 35,
    cardName: "삼성 iD ON 카드삼성카드",
    bankId: [1, 4],
    bankColor: "#0047AB",
  },
  {
    cardId: 37,
    cardName: "삼성 iD CLASSY 카드삼성카드",
    bankId: [1, 4],
    bankColor: "#0047AB",
  },
];

const RecommendMain: React.FC = () => {
  const navigate = useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const renderItem = (item: any) => (
    <CardWrapper key={item.depositId || item.savingId || item.cardId}>
      {item.depositId && <DepositRecommendCard depositData={item} />}
      {item.savingId && <SavingRecommendCard savingData={item} />}
      {item.cardId && <CardRecommendCard cardData={item} />}
    </CardWrapper>
  );

  return (
    <Container>
      <Header>
        <Logo src="/assets/logo1.png" alt="Logo" />
        <MyPageIcon src="/assets/mypageicon.png" alt="My Page" />
      </Header>

      <SectionTitle>예금</SectionTitle>
      <Carousel
        responsive={responsive}
        infinite
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {depositData.map(renderItem)}
      </Carousel>

      <SectionTitle>적금</SectionTitle>
      <Carousel
        responsive={responsive}
        infinite
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {savingData.map(renderItem)}
      </Carousel>

      <SectionTitle>카드</SectionTitle>
      <Carousel
        responsive={responsive}
        infinite
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {cardData.map(renderItem)}
      </Carousel>
      <StyledButton onClick={() => navigate("/DepositSearch")}>
        {" "}
        금융상품 찾아보기
      </StyledButton>
    </Container>
  );
};
export default RecommendMain;

const Container = styled.div`
  background-color: #fff;
  padding: 16px;
`;

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
  margin-top: 15px;
  margin-left: 85px;
`;

const MyPageIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-top: 15px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 16px 0;
  color: #fc7900;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px;
`;
const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <ArrowLeft onClick={onClick}>
      <span>&lt;</span>
    </ArrowLeft>
  );
};

const CustomRightArrow = ({ onClick }: any) => {
  return (
    <ArrowRight onClick={onClick}>
      <span>&gt;</span>
    </ArrowRight>
  );
};

const ArrowLeft = styled.button`
  position: absolute;
  top: 50%;
  left: -25px;
  background: none;
  border: none;
  font-size: 30px;
  color: #333;
`;

const ArrowRight = styled.button`
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 30px;
  color: #333;
  cursor: pointer;
`;

const StyledButton = styled.button`
  width: 300px;
  height: 50px;
  margin: 20px auto;
  display: block;
  background-color: #fc7900;
  border: 1px solid #ccc;
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
const CarouselStyled = styled(Carousel)`
  .react-multi-carousel-item {
    margin-right: 8px;
  }
`;

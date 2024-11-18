import React, { useState } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FinancialGoalData = [
  {
    goal_id: 1,
    goal_type: "short",
    purpose: "여행",
    hope_amount: 15000,
    due_date: "2026-01-01",
    cycle: "monthly",
  },
  {
    goal_id: 2,
    goal_type: "long",
    purpose: "목돈마련",
    hope_amount: 300000,
    due_date: "2040-12-31",
    cycle: "yearly",
  },
  {
    goal_id: 3,
    goal_type: "short",
    purpose: "비상금",
    hope_amount: 15000,
    due_date: "2026-01-01",
    cycle: "monthly",
  },
  {
    goal_id: 4,
    goal_type: "long",
    purpose: "펀드",
    hope_amount: 300000,
    due_date: "2040-12-31",
    cycle: "yearly",
  },
  {
    goal_id: 5,
    goal_type: "long",
    purpose: "5",
    hope_amount: 300000,
    due_date: "2040-12-31",
    cycle: "yearly",
  },
  {
    goal_id: 6,
    goal_type: "short",
    purpose: "6",
    hope_amount: 15000,
    due_date: "2026-01-01",
    cycle: "monthly",
  },
  {
    goal_id: 7,
    goal_type: "long",
    purpose: "7",
    hope_amount: 300000,
    due_date: "2040-12-31",
    cycle: "yearly",
  },
];

const FinancialGoals = () => {
  const [selectedGoalId] = useState<number | null>(null);
  //const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // 한 번에 스크롤되는 아이템 개수
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Container>
      <Header>
        <BackIcon src="/assets/backicon.png" alt="Back" />
        <Logo src="/assets/logo1.png" alt="Logo" />
        <ExitIcon src="/assets/exiticon.png" alt="Exit" />
      </Header>
      <MyPageHeader>
        <Title>재정목표 확인</Title>
        <Separator />
      </MyPageHeader>

      <CarouselContainer>
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
        >
          {FinancialGoalData.map((goal) => (
            <Goal
              key={goal.goal_id}
              selected={selectedGoalId === goal.goal_id}
              //onClick={() => handleGoalClick(goal.goal_id)}
            >
              <GoalType goalType={goal.goal_type}>
                {goal.goal_type === 'short' ? '단기 재정목표' : '장기 재정목표'}
              </GoalType>
              <GoalText>
                목적: {goal.purpose}
                <br />
                {goal.hope_amount.toLocaleString()}원
                <br />
                {goal.due_date}까지
              </GoalText>
              {selectedGoalId === goal.goal_id && (
                <EditIcon src="/assets/editgoalicon.png" alt="Edit Icon" />
              )}
            </Goal>
          ))}
        </Carousel>
      </CarouselContainer>

      <AddContainer>
        <AddIcon src="/assets/addgoalicon.png" alt="Add Goal Icon" />
      </AddContainer>
    </Container>
  );
};

export default FinancialGoals;

// Styled Components
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

const CarouselContainer = styled.div`
  margin-top: 20px;
`;

const Goal = styled.div<{ selected: boolean }>`
  width: 100px;
  height: 150px;
  background-color: ${({ selected }) => (selected ? 'rgba(0, 0, 0, 0.5)' : '#f5f5f5')};
  border-radius: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
  margin: auto;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  padding: 5px; 
  box-sizing: border-box; 
`;

const GoalType = styled.h3<{ goalType: string }>`
  color: ${({ goalType }) => (goalType === 'short' ? '#FFAE64' : '#F58748')};
  font-size:13px;
`;

const GoalText = styled.p`
  color: #2d2d2d;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
`;

const EditIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
`;

const AddContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const AddIcon = styled.img`
  cursor: pointer;
`;


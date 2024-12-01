import React, { useState } from "react";
import styled from "styled-components";
import DepositModal from "../component/modal/DepositModal";
import SavingModal from "../component/modal/SavingModal";
import CardModal from "../component/modal/CardModal";
import { useNavigate } from "react-router-dom";

const LikedData = [
  {
    bookmark_id: 1,
    product_type: "card",
    product_id: 1,
    product_name: "Platinum Credit Card",
    benefit: "Travel rewards",
  },
  {
    bookmark_id: 2,
    product_type: "saving",
    product_id: 2,
    product_name: "High Interest Savings",
    bank: "ABC Bank",
  },
  {
    bookmark_id: 3,
    product_type: "deposit",
    product_id: 3,
    product_name: "Fixed Term Deposit",
    bank: "XYZ Bank",
  },
];

const LikedItems = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<{
    type: string;
    id: number;
  } | null>(null);

  const handleCloseModal = () => setSelectedItem(null);

  const handleItemClick = (type: string, id: number) => {
    setSelectedItem({ type, id });
  };

  return (
    <Container>
      <Header>
        <BackIcon src="/assets/backicon.png" alt="Back" onClick={() => navigate("/mypage")}/>
        <Logo src="/assets/logo1.png" alt="Logo" />
        <ExitIcon src="/assets/exiticon.png" alt="Exit" onClick={() => navigate("/home")}/>
      </Header>
      <MyPageHeader>
        <Title>찜한 상품</Title>
        <Separator />
      </MyPageHeader>
      <ItemContainer>
      {LikedData.map((item) => (
        <Item
          key={item.bookmark_id}
          onClick={() => handleItemClick(item.product_type, item.product_id)}
        >
          <NameContainer>
            <NameText>{item.product_name}</NameText>
            {item.product_type === "card" && <NameText>| 카드</NameText>}
            {(item.product_type === "saving" || item.product_type === "deposit") && (
              <>
                <NameText>|</NameText>
                <NameText>{item.bank}</NameText>
                <NameText>
                  {item.product_type === "saving" ? "| 적금" : "| 예금"}
                </NameText>
              </>
            )}
          </NameContainer>
          {item.product_type === "card" && (
            <ContextRow>
              <ContentText>* 혜택: </ContentText>
              <ContentText>{item.benefit}</ContentText>
            </ContextRow>
          )}
        </Item>
      ))}

      </ItemContainer>
      
      {selectedItem && selectedItem.type === "deposit" && (
        <DepositModal
          visible={true}
          onClose={handleCloseModal}
          id={selectedItem.id}
        />
      )}
      {selectedItem && selectedItem.type === "saving" && (
        <SavingModal
          visible={true}
          onClose={handleCloseModal}
          id={selectedItem.id}
        />
      )}
      {selectedItem && selectedItem.type === "card" && (
        <CardModal
          visible={true}
          onClose={handleCloseModal}
          id={selectedItem.id}
        />
      )}
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

const ItemContainer = styled.div`
  height:500px;
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

export default LikedItems;

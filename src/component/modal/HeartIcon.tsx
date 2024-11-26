import React, { useState } from "react";
import styled from "styled-components";
// import axios from "axios";

interface HeartIconProps {
  id: number;
  type: "deposit" | "saving" | "card";
}

export const HeartIcon: React.FC<HeartIconProps> = ({ id, type }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleHeart = async () => {
    try {
      if (isActive) {
        console.log("취소", { id, type });
        // const deleteUrl = `/recommend/bookmark/${type}Cancel?${type}Id=${id}`;
        // await axios.delete(deleteUrl);
      } else {
        console.log("추가", { id, type });
        // const postUrl = `/recommend/bookmark/${type}Like?${type}Id=${id}`;
        // await axios.post(postUrl);
      }
      setIsActive((prev) => !prev); 
    } catch (error) {
      console.error("Failed to update bookmark:", error);
    }
  };

  return (
    <Icon
      src={isActive ? "/assets/colorheart.svg" : "/assets/heart.svg"}
      alt="Heart"
      onClick={toggleHeart}
    />
  );
};

const Icon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

import React, { useState } from 'react';
import styled from 'styled-components';

export const HeartIcon = () => { // 명명된 내보내기
  const [isActive, setIsActive] = useState(false);

  const toggleHeart = () => {
    setIsActive((prev) => !prev);
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

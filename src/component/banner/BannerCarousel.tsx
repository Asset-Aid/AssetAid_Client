import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BannerCarousel = () => {
    const images = [
        "/assets/image1.png", 
        "/assets/image2.png", 
        "/assets/image1.png", 
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselWrapper>
      <CarouselContainer>
        <Image src={images[currentIndex]} alt={`Banner ${currentIndex + 1}`} />
      </CarouselContainer>
      <Navigation>
        {images.map((_, index) => (
          <Dot
            key={index}
            isActive={currentIndex === index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Navigation>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselContainer = styled.div`
  width: 320px;
  height: 190px;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  background-color: #f0f0f0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
`;

const Navigation = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#fc7900" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export default BannerCarousel;

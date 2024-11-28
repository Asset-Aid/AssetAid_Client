import React, { useState } from "react";
import styled from "styled-components";
import labelImage from "/assets/label.png";

interface GoalSliderComponentProps {
  amount: number;
  setAmount: (value: number) => void;
}

const GoalSliderComponent: React.FC<GoalSliderComponentProps> = ({
  amount,
  setAmount,
}) => {
  const [value, setValue] = useState(50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    setAmount(newValue * 500000);
  };

  return (
    <SliderWrapper>
      <SliderTrack>
        <SliderThumb left={`${(value / 50) * 100}%`}>
          <SliderLabel>₩{(value * 500000).toLocaleString()}</SliderLabel>
        </SliderThumb>
        <SliderInput
          type="range"
          min="1"
          max="49"
          step="1"
          value={value}
          onChange={handleChange}
        />
      </SliderTrack>
      <SliderValues>
        <span>₩100,000</span>
        <span>₩24,500,000</span>
      </SliderValues>
    </SliderWrapper>
  );
};

export default GoalSliderComponent;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const SliderValues = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #797979;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const SliderTrack = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: #f58748;
  border-radius: 4px;
  margin-top: 20px;
`;

const SliderThumb = styled.div<{ left: string }>`
  position: absolute;
  top: -7px;
  width: 20px;
  height: 20px;
  background: url(${labelImage}) no-repeat center / cover;
  transform: translate(-50%);
  left: ${(props) => props.left};
`;

const SliderLabel = styled.span`
  position: absolute;
  top: -18px;
  font-size: 14px;
  color: #666;
  font-weight: bold;
  transform: translate(-50%);
`;

const SliderInput = styled.input`
  width: 100%;
  height: 8px;
  -webkit-appearance: none;
  background: transparent;
  position: relative;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
    background: transparent;
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 0;
    height: 0;
    background: transparent;
  }
`;

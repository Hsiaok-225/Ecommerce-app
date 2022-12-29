import { useState } from "react";
import styled from "styled-components";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const SliderContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;
  position: relative;
`;
const ImagesContainer = styled.div`
  width: 300vw;
  height: 100%;
  display: flex;
  transition: transform 1s ease;

  // translateX currentSlide*100vw
  transform: ${(props) => `translateX(-${props.currentSlide * 100}vw)`};

  img {
    width: 100vw;
    height: 100%; //when should use height setting
    object-fit: cover;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  width: fit-content;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  margin: auto;
  gap: 10px;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  background-color: rgb(0, 0, 0, 0.2);
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const handlePrevImg = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const handleNextImg = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <SliderContainer>
      <ImagesContainer currentSlide={currentSlide}>
        <img src={data[0]} alt="img" />
        <img src={data[1]} alt="img" />
        <img src={data[2]} alt="img" />
      </ImagesContainer>
      <IconsContainer>
        <IconBox onClick={handlePrevImg}>
          <WestOutlinedIcon />
        </IconBox>
        <IconBox onClick={handleNextImg}>
          <EastOutlinedIcon />
        </IconBox>
      </IconsContainer>
    </SliderContainer>
  );
}

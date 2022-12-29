import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  height: 80vh;
  gap: 10px;
  margin: 10px;
`;
const ColBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const RowBox = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
`;
const RightBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ImageBox = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  position: relative;
  overflow: hidden;

  button {
    position: absolute;
    min-width: 100px;
    width: fit-content;
    height: 50px;
    padding: 10px;
    inset: 0;
    margin: auto;
    cursor: pointer;
    border: none;
    background-color: white;
    text-transform: uppercase;
    font-weight: 500;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Categories() {
  const navigate = useNavigate();
  return (
    <CategoryContainer>
      <ColBox>
        <ImageBox>
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => navigate(`/products/1`)}>Sale</button>
        </ImageBox>
        <ImageBox>
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => navigate(`/products/1`)}>Women</button>
        </ImageBox>
      </ColBox>
      <ColBox>
        <ImageBox>
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => navigate(`/products/1`)}>New Season</button>
        </ImageBox>
      </ColBox>
      <RightBox>
        <RowBox>
          <ImageBox>
            <img
              src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button onClick={() => navigate(`/products/1`)}>New Season</button>
          </ImageBox>
          <ImageBox>
            <img
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button onClick={() => navigate(`/products/1`)}>New Season</button>
          </ImageBox>
        </RowBox>
        <ImageBox>
          <img
            src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button onClick={() => navigate(`/products/1`)}>New Season</button>
        </ImageBox>
      </RightBox>
    </CategoryContainer>
  );
}

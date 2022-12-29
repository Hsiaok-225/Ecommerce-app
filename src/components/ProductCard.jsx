import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
  cursor: pointer;

  h2 {
    :hover {
      color: rgb(0, 0, 0, 0.6);
    }
  }
`;
const ImageBox = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;

  span {
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: white;
    color: teal;
    padding: 3px 5px;
    z-index: 3;
    font-weight: 500;
    font-size: 12px;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    & img:nth-child(2) {
      z-index: 2;
    }
  }
`;
const PriceBox = styled.div`
  display: flex;
  gap: 20px;

  h3 {
    font-size: 18px;
    font-weight: 500;

    &:first-child {
      color: gray;
      text-decoration: line-through;
    }
  }
`;

export default function ProductCard({ productDetail }) {
  const { id, img, img2, title, isNew, oldPrice, price } = productDetail || {};
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/product/${id}`)}>
      <ImageBox>
        {isNew && <span>New Season</span>}
        <img src={img} alt="product" />
        <img src={img2} alt="product" />
      </ImageBox>
      <h2>{title}</h2>
      <PriceBox>
        <h3>${oldPrice || price + 20}</h3>
        <h3>${price}</h3>
      </PriceBox>
    </CardContainer>
  );
}

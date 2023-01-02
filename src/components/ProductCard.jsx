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
`;

const ProductImage = styled.div`
  background: ${(props) => `url(${props.img}) no-repeat top center`};
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  top: 0;
  left: 0;

  :hover {
    background: ${(props) => `url(${props.hoverImg}) no-repeat top center`};
    background-size: cover;
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

export default function ProductCard({ id, product }) {
  const { img, imgback, title, isNew, oldPrice, price } = product || {};
  const navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/product/${id}`)}>
      <ImageBox>
        {isNew && <span>New Season</span>}
        <ProductImage
          img={`${process.env.REACT_APP_API_BASEURL}${img.data.attributes.url}`}
          hoverImg={`${process.env.REACT_APP_API_BASEURL}${imgback.data.attributes.url}`}
        />
      </ImageBox>
      <h2>{title}</h2>
      <PriceBox>
        <h3>${oldPrice || price + 20}</h3>
        <h3>${price}</h3>
      </PriceBox>
    </CardContainer>
  );
}

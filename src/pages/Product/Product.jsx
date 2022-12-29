import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const ProductContainer = styled.div`
  box-sizing: border-box;
  padding: 20px 50px;
  display: flex;
  gap: 50px;
`;

const ImageBox = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
`;
const MiniImageBox = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
    margin-bottom: 10px;
    box-sizing: border-box;

    :hover {
      border: 1px solid gray;
    }
  }
`;
const MainImage = styled.div`
  flex: 5;
  img {
    width: 100%;
    height: 100%;
    /* max-height: 800px; */
    object-fit: cover;
  }
`;

const ProductInfoBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;

  button:nth-child(3) {
    width: 250px;
    padding: 10px;
    color: white;
    background-color: #2879fe;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
    border: none;
    font-weight: 500;
  }

  hr {
    border: 1px solid rgb(238, 237, 237);
  }
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  span {
    font-size: 30px;
    color: #2879fe;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    text-align: justify;
  }
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
  }
`;
const LinkBox = styled.div`
  display: flex;
  gap: 20px;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #2879fe;
  font-size: 14px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: gray;
  font-size: 14px;
  margin-top: 30px;

  hr {
    width: 200px;
    border: 1px solid rgb(238, 237, 237);
  }
`;

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddtoCart = () => {
    //
  };

  const images = [
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <ProductContainer>
      <ImageBox>
        <MiniImageBox>
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </MiniImageBox>
        <MainImage>
          <img src={images[selectedImg]} alt="" />
        </MainImage>
      </ImageBox>
      <ProductInfoBox>
        <TopInfo>
          <h1>title </h1>
          <span>$ price</span>
          <p>desc</p>
        </TopInfo>
        <QuantityBox>
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </QuantityBox>
        <button onClick={handleAddtoCart}>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <LinkBox>
          <IconBox>
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </IconBox>
          <IconBox>
            <BalanceIcon /> ADD TO COMPARE
          </IconBox>
        </LinkBox>
        <InfoBox>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </InfoBox>
        <hr />
        <InfoBox>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </InfoBox>
      </ProductInfoBox>
    </ProductContainer>
  );
}

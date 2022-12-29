import React from "react";
import styled from "styled-components";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const CartContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 80px;
  z-index: 999;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;

  > h1 {
    margin-bottom: 30px;
    color: gray;
    font-weight: 400;
    font-size: 24px;
  }

  > span:last-child {
    color: gray;
    font-size: 12px;
    cursor: pointer;
  }
`;
const ItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  img {
    width: 80px;
    height: 100px;
    object-fit: cover;
  }
`;
const ItemDetail = styled.div`
  > h1 {
    font-size: 18px;
    font-weight: 500;
  }

  > p {
    color: gray;
    margin-bottom: 10px;
    font-size: 14px;
  }

  > div {
    color: #2879fe;
  }
`;

const IconBox = styled.div`
  color: gray;
  font-size: 30px;
  cursor: pointer;
`;
const TotalBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
`;
const ButtonPayment = styled.button`
  width: 250px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 20px; */
  cursor: pointer;
  border: none;
  background-color: #2879fe;
  color: white;
  font-weight: 500;
  margin-bottom: 20px;
`;

export default function Cart() {
  const handlePayment = () => {
    //
  };
  return (
    <CartContainer>
      <h1>Products in your cart</h1>
      <ItemBox>
        <img
          src={
            "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt=""
        />
        <ItemDetail>
          <h1>title</h1>
          <p>desc.substring</p>
          <div>item.quantity x item.price</div>
        </ItemDetail>
        <IconBox>
          <DeleteOutlinedIcon />
        </IconBox>
      </ItemBox>
      <TotalBox>
        <span>SUBTOTAL</span>
        <span>$ totalPrice</span>
      </TotalBox>
      <ButtonPayment onClick={handlePayment}>PROCEED TO CHECKOUT</ButtonPayment>
      <span>Reset Cart</span>
    </CartContainer>
  );
}

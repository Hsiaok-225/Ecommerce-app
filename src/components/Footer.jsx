import React from "react";
import styled from "styled-components";
import paymentImage from "../assets/images/payment.png";

const FooterConatiner = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 100px 200px 20px 200px;
`;
const TopWrapper = styled.div`
  display: flex;
  gap: 50px;
`;
const ItemsBox = styled.div`
  flex: 1; // make every Item grow same distance
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  text-align: justify;

  h1 {
    font-size: 18px;
    font-weight: 500;
    color: #555;
  }

  span {
    color: gray;
  }
`;
const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;
const BottomLeft = styled.div`
  display: flex;
  align-items: center;

  & span:first-child {
    color: #2879fe;
    font-weight: bold;
    font-size: 24px;
  }
  & span:nth-child(2) {
    margin-left: 20px;
    font-size: 12px;
    color: gray;
  }
`;
const BottomImage = styled.div`
  img {
    height: 50px;
  }
`;

export default function Footer() {
  return (
    <FooterConatiner>
      <TopWrapper>
        <ItemsBox>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </ItemsBox>
        <ItemsBox>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </ItemsBox>
        <ItemsBox>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </ItemsBox>
        <ItemsBox>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </ItemsBox>
      </TopWrapper>
      <BottomWrapper>
        <BottomLeft>
          <span>UniStore</span>
          <span>© Copyright 2023. All Rights Reserved</span>
        </BottomLeft>
        <BottomImage>
          <img src={paymentImage} alt="payment" />
        </BottomImage>
      </BottomWrapper>
    </FooterConatiner>
  );
}

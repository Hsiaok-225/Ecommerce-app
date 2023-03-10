import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const CenterBox = styled.div`
  font-size: 30px;
  letter-spacing: 2px;
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const ItemsBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  :hover {
    color: gray;
  }
`;
const IconsBox = styled.div`
  display: flex;
  gap: 15px;
  color: #777;
  cursor: pointer;
`;
const CartIconBox = styled.div`
  position: relative;

  span {
    font-size: 12px;
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #2879fe;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Navbar() {
  const { products } = useSelector((store) => store.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <ItemsBox>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </ItemsBox>
          <ItemsBox>
            <Link to="/products/1">Women</Link>
          </ItemsBox>
          <ItemsBox>
            <Link to="/products/2">Men</Link>
          </ItemsBox>
          <ItemsBox>
            <Link to="/products/3">Children</Link>
          </ItemsBox>
        </LeftBox>
        <CenterBox>
          <Link to="/">ONLINE-STORE</Link>
        </CenterBox>
        <RightBox>
          <ItemsBox>
            <Link to="/">Homepage</Link>
          </ItemsBox>
          <ItemsBox>
            <Link to="/">About</Link>
          </ItemsBox>
          <ItemsBox>
            <Link to="/">Contact</Link>
          </ItemsBox>
          <ItemsBox>
            <Link to="/">Stores</Link>
          </ItemsBox>
          <IconsBox>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <CartIconBox onClick={() => setIsCartOpen(!isCartOpen)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </CartIconBox>
          </IconsBox>
        </RightBox>
      </Wrapper>
      {isCartOpen && <Cart />}
    </Container>
  );
}

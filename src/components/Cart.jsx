import React from "react";
import styled from "styled-components";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/reducers/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { axiosFetch } from "../utils/Web_API";

const CartContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 60px;
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
  const { products } = useSelector((store) => store.cart);
  console.log(products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(
      removeItem({
        id: productId,
      })
    );
  };

  const stripePromise = loadStripe(
    "pk_test_51MLVFQIRJpeJsI77clgUYhE5iAEApWab0R52LCVGpGmVEnxxlLTz458VEaAdL8TY4lKI9tgGkYamv8rFm61ZAdhT009E1YkZeZ"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await axiosFetch.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CartContainer>
      <h1>Products in your cart</h1>
      {products.map((product) => (
        <ItemBox key={product.id}>
          <img
            src={`${process.env.REACT_APP_API_BASEURL}${product.img}`}
            alt=""
          />
          <ItemDetail>
            <h1>{product.title}</h1>
            <p>{product.desc?.substring(0, 10)}</p>
            <div>
              ${product.price} x {product.quantity}
            </div>
          </ItemDetail>
          <IconBox onClick={() => handleRemove(product.id)}>
            <DeleteOutlinedIcon />
          </IconBox>
        </ItemBox>
      ))}
      <TotalBox>
        <span>SUBTOTAL</span>
        <span>$ {totalPrice()}</span>
      </TotalBox>
      <ButtonPayment onClick={handlePayment}>PROCEED TO CHECKOUT</ButtonPayment>
      <span onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </CartContainer>
  );
}

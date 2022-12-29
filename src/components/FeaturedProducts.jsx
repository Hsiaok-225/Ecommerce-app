import styled from "styled-components";
import ProductCard from "./ProductCard";
import { tempData } from "../utils/data";

const ProductsContainer = styled.div`
  box-sizing: border-box;
  padding: 100px 200px;
`;
const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  h1 {
    flex: 2;
    text-transform: capitalize;
  }

  p {
    flex: 3;
    color: gray;
  }
`;
const BottomBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export default function FeaturedProducts({ title }) {
  const { data, loading, error } = {};

  return (
    <ProductsContainer>
      <TopBox>
        <h1>{title} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </TopBox>
      <BottomBox>
        {tempData?.map((productDetail) => (
          <ProductCard key={productDetail.id} productDetail={productDetail} />
        ))}
      </BottomBox>
    </ProductsContainer>
  );
}

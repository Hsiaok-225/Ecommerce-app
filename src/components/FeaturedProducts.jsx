import styled from "styled-components";
import ProductCard from "./ProductCard";
import { tempData } from "../utils/data";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosFetch } from "../utils/Web_API";
import useFetch from "../hooks/useFetch";

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
  const [products, setProducts] = useState(null);
  const { data, isLoading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${title}`
  );

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
        {error
          ? "Something went wrong"
          : isLoading
          ? "loading..."
          : data?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                product={product.attributes}
              />
            ))}
      </BottomBox>
    </ProductsContainer>
  );
}

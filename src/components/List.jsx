import React from "react";
import styled from "styled-components";
import { tempData } from "../utils/data";
import ProductCard from "./ProductCard";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function List() {
  return (
    <ListContainer>
      {tempData?.map((productDetail) => (
        <ProductCard key={productDetail.id} productDetail={productDetail} />
      ))}
    </ListContainer>
  );
}

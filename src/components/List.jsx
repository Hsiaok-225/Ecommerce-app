import React from "react";
import styled from "styled-components";
import { tempData } from "../utils/data";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function List({ categoryId, maxPrice, sort, subCats }) {
  // console.log("categoryId", categoryId);
  // console.log("maxPrice", maxPrice);
  // console.log("sort", sort);
  // console.log("subCats", subCats);
  // const { data, isLoading, error } = useFetch(
  //   `/products?populate=*&filters[type][$eq]=trending`
  // );
  const { data, isLoading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}&${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  console.log(data);

  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          product={product.attributes}
        />
      ))}
    </ListContainer>
  );
}

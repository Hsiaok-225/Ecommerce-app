import { useState } from "react";
import styled from "styled-components";
import List from "../../components/List";

const ProductsContainer = styled.div`
  box-sizing: border-box;
  padding: 30px 50px;
  display: flex;
`;

const SideSearch = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  height: 100%;
  position: sticky;
  top: 50px;
`;

const FilterBox = styled.div`
  margin-bottom: 30px;

  h2 {
    font-weight: 400;
    margin-bottom: 20px;
  }
`;
const InputItem = styled.div`
  margin-bottom: 10px;
  label {
    margin-left: 10px;
  }
`;

const RightProductsBox = styled.div`
  flex: 3;
  display: flex;
  /* align-items: center; */
  flex-direction: column;

  & img:first-child {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 50px;
  }
`;

export default function Products() {
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState(null);

  return (
    <ProductsContainer>
      <SideSearch>
        <FilterBox>
          <h2>Product Categories</h2>
          <InputItem>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </InputItem>
          <InputItem>
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </InputItem>
          <InputItem>
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Coats</label>
          </InputItem>
        </FilterBox>
        <FilterBox>
          <h2>Filter by price</h2>
          <InputItem>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <label />
            <span>{maxPrice}</span>
          </InputItem>
        </FilterBox>
        <FilterBox>
          <h2>Sort by</h2>
          <InputItem>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </InputItem>
          <InputItem>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </InputItem>
        </FilterBox>
      </SideSearch>
      <RightProductsBox>
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List />
      </RightProductsBox>
    </ProductsContainer>
  );
}

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import List from "../../components/List";
import useFetch from "../../hooks/useFetch";

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
  const categoryId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // GET SubCategory by categoryId
  const { data, isLoading, error } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${categoryId}`
  );

  const handleCheckbox = (e) => {
    const value = e.target.value;
    const isCheck = e.target.checked;

    isCheck
      ? setSelectedSubCats([...selectedSubCats, value])
      : setSelectedSubCats(
          selectedSubCats.filter((checkboxValue) => checkboxValue !== value)
        );
  };

  return (
    <ProductsContainer>
      <SideSearch>
        {/* Sort by categories  */}
        <FilterBox>
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <InputItem key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleCheckbox}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </InputItem>
          ))}
        </FilterBox>

        {/* Sort by Price 'max' */}
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

        {/* Sort by Price 'asc' or 'desc' */}
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
        <List
          categoryId={categoryId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </RightProductsBox>
    </ProductsContainer>
  );
}

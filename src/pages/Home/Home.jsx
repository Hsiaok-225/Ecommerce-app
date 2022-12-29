import React from "react";
import styled from "styled-components";
import Categories from "../../components/Categories";
import Contact from "../../components/Contact";
import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <FeaturedProducts title="featured" />
      <Categories />
      <FeaturedProducts title="trending" />
      <Contact />
    </>
  );
}

import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ types }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${types}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{types} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia iure
          perferendis repellendus tempore recusandae veniam totam quidem commodi
          provident fuga?
        </p>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong"
          : loading
          ? "Loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

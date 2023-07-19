import React from "react";
import Slider from "../../Components/Slider/Slider";
import "./Home.scss";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts types="featured" />
      <Categories />
      <FeaturedProducts types="trending" />
      <Contact />
    </div>
  );
};

export default Home;

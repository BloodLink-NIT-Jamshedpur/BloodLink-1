import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Cards.css";
import Product from "./Product";
import { productData } from "./data";

const Cards = () => {
  return (
    <div className="cards">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000} // Adjust the autoplay interval in milliseconds
      >
        {productData.map((item) => (
          <Product key={item.id} url={item.imageurl} />
        ))}
      </Carousel>
    </div>
  );
};

export default Cards;

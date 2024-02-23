import React from "react";

export default function Product(props) {
  return (
    <div className="card2">
      <div className="product-container2">
        <img className="product--image2" src={props.url} alt="product image" />
        <div className="product-overlay2">
          <p className="product-text2">
            <strong>SERVICES</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

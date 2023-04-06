import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { id, name, img, category, price, seller, ratings } = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="product">
      <img src={img} alt="images" />
      <div className="product-info">
        <h4>Product Details</h4>
        <h6>Id: {id}</h6>
        <p>Name: {name}</p>
        <p>Category: {category}</p>
        <p className="price-clr">Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p className="ratings">Ratings: {ratings} stars</p>
      </div>
      <button
        onClick={() => {
          addToCart(props.product);
        }}
        className="btn-cart"
      >
        Add To Cart
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;

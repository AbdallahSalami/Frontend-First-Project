import React from "react";
import "./OffersProduct.css";
import img1 from "../../Images/Base.jpg";

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <div className="product">
        <div className="imageSectionProduct">
          <img
            className="imageProduct"
            src={product?.productID?.imag}
            alt="testImage"
          ></img>
        </div>
        <div className="textProduct">
          <h3 className="groceryName">
            {product?.productID?.storeID?.storeName}
          </h3>
          <div className="price">
            <h4 className="oldPrice">Price: {product?.productID?.price}$</h4>
            <h4 className="newPrice">Price: {product?.productID?.newprice}$</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

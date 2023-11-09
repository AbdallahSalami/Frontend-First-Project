import React from "react";
import { useNavigate } from "react-router-dom";
import "./OffersProduct.css";

const OffersProduct = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/StoreDetails/${product.storeID._id}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <div className="imageSectionProduct">
        <img
          className="imageProduct"
          src={product?.image}
          alt="testImage"
        ></img>
      </div>
      <div className="textProduct">
        <h2 className="groceryName">{product?.storeID?.storeName}</h2>
        <div className="price">
          <h3 className="oldPrice">
            Price: <s>{product?.price}$</s>
          </h3>
          <h3 className="newPrice">
            Price: {product?.newPrice}$
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OffersProduct;

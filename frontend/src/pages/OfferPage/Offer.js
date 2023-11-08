import React from "react";
import {useEffect,useState} from "react";
import Search from "../../components/SearchBar/SearchBar";
import Product from "../../components/Offers/OffersProduct";
import imageOffers from "../../Images/Offers.png";
import "./Offer.css";

const Offer = () => {

    const [offerProducts, setOfferProducts] = useState([]);
  
    useEffect(() => {
      const fetchOfferProducts = async () => {
        try {
          const response = await fetch("/offer");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const json = await response.json();
          console.log(json);
          setOfferProducts(json);
        } catch (error) {
          console.error("Error fetching Products:", error);
        }
      };
      fetchOfferProducts();
    }, []);

  return (
    <div className="offerMain">
      <div className="offerBoxImage">
        <img  className="offerImage" src={imageOffers} alt="theOffers"></img>
      </div>

      <div className="offerSearch">
        <Search />
      </div>

     <div className="offerGroups">
     <Product />
     <Product />

     <Product />
     <Product />
     <Product />
     <Product />
     <Product />
     
     {offerProducts &&
          offerProducts.map((product, index) => (
            <Product product={product} key={product._id} />
          ))}      
     </div>
     

    </div>
  );
};

export default Offer;  
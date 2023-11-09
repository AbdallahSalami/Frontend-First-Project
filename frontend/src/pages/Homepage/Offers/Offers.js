import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Offers.css";
import OffersProduct from "../../../components/OfferProduct/OffersProduct";
import Search from "../../../components/Navbar/SearchBar/SearchBar";
const Offers = () => {
  const [offers, setOffers] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/offer"); // Replace with the correct API endpoint
      setOffers(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = async (searchValue) => {
    const data = await fetchProducts();
    if (data && searchValue) {
      const filteredOffers = data.filter((offer) => {
        return (
          offer.productID.storeID.storeName
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          offer.productID.productName
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
      });
      setOffers(filteredOffers);
    }
  };

  return (
    <div>
      <img
        src="https://t4.ftcdn.net/jpg/02/61/01/87/360_F_261018762_f15Hmze7A0oL58Uwe7SrDKNS4fZIjLiF.jpg"
        className="offersimg"
        alt="special offer"
      />
      <Search onSearch={handleSearch} placeholder="find your store" />
      <div className="offers-container">
        <div className="offers-list">
          {offers
            .filter((offer) => offer.productID.itsNew)
            .map((offer, index) => (
              <OffersProduct key={index} product={offer.productID} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;

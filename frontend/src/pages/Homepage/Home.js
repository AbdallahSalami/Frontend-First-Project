import { useEffect, useState } from "react";
import "./Home.css";
import GroceryDetail from "../../components/Navbar/GroceryDetails/GroceryDetails";
import Search from "../../components/Navbar/SearchBar/SearchBar";
import Carousel from "../../components/Navbar/Carousel/Carousel";

const Home = () => {
  const [groceries, setGroceries] = useState([]);
  const [filteredGroceries, setFilteredGroceries] = useState([]);

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const response = await fetch("/groceries");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setGroceries(json);
        setFilteredGroceries(json); // Set filtered groceries initially to all groceries
      } catch (error) {
        console.error("Error fetching groceries:", error);
      }
    };
    fetchGroceries();
  }, []);

  const handleSearch = (searchValue) => {
    if (groceries) {
      const filteredGroceries = groceries.filter((grocery) => {
        return (
          grocery.storeName &&
          grocery.storeName.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setFilteredGroceries(filteredGroceries);
    }
  };

  return (
    <div className="home">
      <Carousel />
      <p className="findgrocery">Find Your Grocery</p>
      <Search onSearch={handleSearch} placeholder="find your store" />

      <div className="Groceries">
        {filteredGroceries &&
          filteredGroceries.map((grocery) => (
            <GroceryDetail grocery={grocery} key={grocery._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;

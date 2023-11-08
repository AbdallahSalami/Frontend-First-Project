import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages and components
import Home from "./pages/HomePage/Home";
import Navbar from "./components/Navbar/navbar";
// import Offers from "./components/Offers/OffersProduct"
import Offer from "./pages/OfferPage/Offer"
import AboutUs from "./pages/AboutUs/AboutUsPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offer/>} />
            <Route path="/About" element= {<AboutUs />} />
          </Routes>
        </div>n
      </BrowserRouter>
    </div>
  );
}

export default App;

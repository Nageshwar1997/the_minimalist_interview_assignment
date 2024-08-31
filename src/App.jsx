import "./App.css";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import About from "./components/About";
import DesignedHeading from "./components/DesignedHeading";
import BottomProductsBanner from "./components/BottomProductsBanner";
import Footer from "./components/Footer";
import { createContext, useState } from "react";
import ProductDetailCard from "./components/ProductDetailCard";
import image1 from "./assets/image1.webp";
import image2 from "./assets/image2.webp";
import image3 from "./assets/image3.webp";
import image4 from "./assets/image4.webp";
import { Context } from "./context";

function App() {
  const [showProductDetailsCard, setShowProductDetailsCard] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
  });

  return (
    <div className="w-full h-full min-h-screen max-h-screen relative">
      <Context.Provider
        value={{
          showProductDetailsCard,
          setShowProductDetailsCard,
          setProductDetails,
        }}
      >
        <Header />
        <TopBanner />
        <DesignedHeading text={"About"} />
        <About />
        <DesignedHeading text={"Our Products"} />
        <BottomProductsBanner />
        <Footer />
        {showProductDetailsCard && (
          <ProductDetailCard
            productDetails={productDetails}
            images={[image1, image2, image3, image4]}
          />
        )}
      </Context.Provider>
    </div>
  );
}

export default App;

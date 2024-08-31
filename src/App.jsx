import "./App.css";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import About from "./components/About";
import DesignedHeading from "./components/DesignedHeading";
import BottomProductsBanner from "./components/BottomProductsBanner";
import Footer from "./components/Footer";
import { useContext, useState } from "react";
import ProductDetailCard from "./components/ProductDetailCard";
import image1 from "./assets/image1.webp";
import image2 from "./assets/image2.webp";
import image3 from "./assets/image3.webp";
import image4 from "./assets/image4.webp";
import { Context } from "./context/product.context";
import { ThemeContext } from "./context/theme.context";
import { LuSunMoon } from "react-icons/lu";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showProductDetailsCard, setShowProductDetailsCard] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
  });

  return (
    <Context.Provider
      value={{
        showProductDetailsCard,
        setShowProductDetailsCard,
        setProductDetails,
      }}
    >
      <div className="w-full h-full min-h-screen max-h-screen overflow-scroll dark:bg-darkBackground bg-slate-200 relative">
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
        <button
          className={`fixed bottom-4 right-4 p-3 transition-transform duration-300 ease-in-out rounded-full shadow-2xl transform ${
            theme === "white"
              ? "bg-darkBackground text-darkText hover:bg-slate-800 border-borderDark"
              : "bg-whiteBackground text-black hover:bg-slate-200 border-borderLight"
          } z-50 focus:outline-none border text-lg md:text-xl lg:text-2xl`}
          onClick={toggleTheme}
        >
          <LuSunMoon />
        </button>
      </div>
    </Context.Provider>
  );
}

export default App;

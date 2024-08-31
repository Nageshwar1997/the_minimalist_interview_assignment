import React, { useContext } from "react";
import productImage from "../assets/ProductImage.png";
import { Context } from "../context/product.context";

const ProductCard = ({ text }) => {
  const { setShowProductDetailsCard, setProductDetails } = useContext(Context);

  return (
    <div className="w-full border p-4 rounded dark:border-dark border-borderLight bg-whiteBackground dark:bg-darkBackground">
      <div className="w-full max-h-[434px] h-full">
        <img
          src={productImage}
          alt="Product"
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <div className="flex justify-between items-center mt-2 sm:mt-4 md:mt-6">
        <p className="text-lg md:text-xl font-semibold text-whiteText dark:text-darkText">
          {text}
        </p>
        <button
          className="text-sm lg:text-lg text-nowrap bg-[#FE0000] hover:bg-[#f62a2a] uppercase py-2 px-4 md:py-3 md:px-8 lg:px-14 rounded-sm text-white transition-all duration-300"
          onClick={() => {
            setShowProductDetailsCard(true);
            setProductDetails({
              name: text,
              price: "₹ 1,20,000",
            });
          }}
        >
          Quick View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

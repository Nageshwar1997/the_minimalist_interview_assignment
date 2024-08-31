import React, { useContext } from "react";
import productImage from "../assets/ProductImage.png";
import { Context } from "../context/product.context";

const ProductCard = ({ text }) => {
  const { setShowProductDetailsCard, setProductDetails } = useContext(Context);

  return (
    <div className="w-full border p-4 rounded">
      <div className="w-full max-h-[434px] h-full">
        <img
          src={productImage}
          alt="Product"
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-semibold">{text}</p>
        <button
          className="text-lg bg-[#FE0000] uppercase py-3 px-14 rounded-sm text-white"
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

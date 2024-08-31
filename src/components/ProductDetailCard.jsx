import React, { useContext } from "react";
import horizontalLine from "../assets/productDetailCardHorizontalDashedLine.png";
import starIcon from "../assets/starIcon.png";
import { IoClose } from "react-icons/io5";
import { Context } from "../context";

const ProductDetailCard = ({ productDetails, images }) => {
  const { setShowProductDetailsCard } = useContext(Context);
  return (
    <div className="fixed inset-0 z-50 p-4 sm:p-6 md:p-8 lg:p-10 flex justify-center items-center overflow-hidden bg-black/50 backdrop-blur-md">
      <div className="relative bg-white w-full max-w-6xl h-auto flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8 p-4 lg:p-6 xl:p-8 overflow-hidden rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="w-full flex flex-col gap-4 lg:w-2/3">
          <div className="w-full h-auto overflow-hidden rounded-lg shadow-md">
            <img
              src={images[0]}
              alt="MainImage"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2 justify-between lg:gap-4 overflow-x-auto pb-2 lg:pb-0">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[100px] lg:w-[150px] h-auto overflow-hidden rounded-lg shadow-sm"
              >
                <img
                  src={image}
                  alt={`Image${index + 2}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Details Section */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
            {productDetails?.name}
          </h1>
          <h2 className="text-md sm:text-lg lg:text-xl text-gray-600">
            MRP:{" "}
            <span className="font-semibold text-gray-900">{productDetails?.price}/-</span>
          </h2>
          <img src={horizontalLine} alt="Line" className="my-2 w-full" />
          <div>
            <h6 className="font-semibold text-sm sm:text-md text-gray-700">
              Product Description:
            </h6>
            <p className="text-sm sm:text-base text-gray-600">
              This product packs an extra punch, thanks to the literal blood,
              sweat, and tears of a young boy.
            </p>
          </div>
          <img src={horizontalLine} alt="Line" className="my-2 w-full" />
          <div>
            <h6 className="font-semibold text-sm sm:text-md text-gray-700">
              Product Contents:
            </h6>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600">
              <li className="flex items-center gap-2">
                <img src={starIcon} alt="star" className="w-4 h-4" />
                10 hand-hurting pieces of rassi bombs
              </li>
              <li className="flex items-center gap-2">
                <img src={starIcon} alt="star" className="w-4 h-4" />
                Jilled with great pain
              </li>
              <li className="flex items-center gap-2">
                <img src={starIcon} alt="star" className="w-4 h-4" />
                Raju's hopes
              </li>
            </ul>
          </div>
          <img src={horizontalLine} alt="Line" className="my-2 w-full" />
          <div>
            <h6 className="font-semibold text-sm sm:text-md text-gray-700">
              Shopping Time:
            </h6>
            <p className="text-sm sm:text-base text-gray-600">
              Before Raju understands that his dreams do not matter.
            </p>
          </div>
          <button className="bg-[#FE0000] text-white py-3 px-4 text-xl rounded hover:bg-blue-600 transition duration-200 mt-4">
            Choose Now
          </button>
        </div>
        <div
          className="absolute top-0 right-0 text-4xl p-4 hover:text-[#FE0000] cursor-pointer"
          onClick={() => setShowProductDetailsCard(false)}
        >
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;

import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="container mx-auto mt-10 mb-10 px-4">
      <h6 className="text-blue-600 font-bold text-center py-4">PRODUCTS</h6>
      <h2 className="text-center font-bold text-3xl pb-6">
        Check What We Have
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        <div className="transition-transform transform hover:scale-105 duration-300 cursor-pointer">
          <Image src="/image.png" alt="image" width={400} height={400} />
          <p className="text-lg font-bold pt-3">Cameryn Sash Tie Dress</p>
          <p className="text-gray-600">$545</p>
        </div>
        <div className="transition-transform transform hover:scale-105 duration-300 cursor-pointer">
          <Image src="/image1.png" alt="image1" width={400} height={400} />
          <p className="text-lg font-bold pt-3">Flex Sweatshirt</p>
          <p className="text-gray-600">$175</p>
        </div>
        <div className="transition-transform transform hover:scale-105 duration-300 cursor-pointer">
          <Image src="/image2.png" alt="image2" width={400} height={400} />
          <p className="text-lg font-bold pt-3">Flex Sweatpants</p>
          <p className="text-gray-600">$175</p>
        </div>
        </div>
    </div>
  );
};

export default Product;

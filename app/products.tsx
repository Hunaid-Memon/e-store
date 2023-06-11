import React from 'react';
import Image from "next/image";


const Products = () => {
    return (
      <div className='container mt-10 mb-10'>
        <h6 className="text-blue-600 font-bold text-center p-4">PRODUCTS</h6>
        <h2 className="text-center font-bold text-3xl pb-6">
          Check What We Have
        </h2>
        <div className=" container flex justify-between mt-10 mb-10">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <Image src="/image.png" alt="image" width={400} height={400} />
            <p className="text-lg font-bold pt-3">Cameryn Sash Tie Dress</p>
            <p className="">$545</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <Image src="/image1.png" alt="image1" width={400} height={400} />
            <p className="text-lg font-bold pt-">Flex Sweatshirt</p>
            <p className="">$175</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <Image src="/image2.png" alt="image2" width={400} height={400} />
            <p className="text-lg font-bold pt-2">Flex Sweatpants</p>
            <p className="">$175</p>
          </div>
        </div>
      </div>
    );
}

export default Products;
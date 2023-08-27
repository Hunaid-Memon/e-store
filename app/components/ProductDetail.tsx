import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import AddToCard from "./AddToCard";
import Quantity from "./Quantity";
import ProductInformation from "./ProductInformation";
import Size from './Size'
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  pname: string;
  image: string | StaticImageData | any;
  type: string;
  price: string;
}

interface ProductItemsProps {
  product: Product;
}

const size: string[] = ["XS", "S", "M", "L", "XL"];

const ProductDetail: React.FC<ProductItemsProps> = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row w-full mb-12 md:space-x-8">
      {/* left side image */}
      <div className="w-full md:w-1/12 mb-4 md:mb-0">
        <Image
          src={urlForImage(product.image).url()}
          width={120}
          height={120}
          alt={product.pname}
        />
      </div>
      {/* main div */}
      <div className="w-full md:w-7/12">
        <Image
          src={urlForImage(product.image).url()}
          width={700}
          height={550}
          alt={product.pname}
        />
      </div>
      {/* detail div */}
      <div className="flex flex-col md:justify-center w-full md:w-5/12">
        <h1 className="text-3xl md:text-4xl font-semibold">{product.pname}</h1>
        <p className="text-gray-500 text-lg md:text-2xl pb-2 md:pb-4">
          {product.type}
        </p>
        <div className="flex items-center">
          <p className="text-3xl md:text-4xl font-bold pr-4">{product.price}</p>
          <AddToCard product={product} />
        </div>
        <Size size={size} />
        <Quantity />
      </div>

      {/* Product Information Detail */}
      <div className="w-full mt-4">
        <ProductInformation />
      </div>
    </div>
  );
};

export default ProductDetail;

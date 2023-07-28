import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Size from "./Size";
import Quantity from "./Quantity";
import AddToCard from "./AddToCard";
import ProductInformation from "./ProductInformation";
import { urlForImage } from "@/sanity/lib/image";



interface ProductItemsProps {
  id: number;
  pname: string;
  image: string | StaticImageData;
  type: string;
  price: string;
}

const size:string[] = ['XS', 'S', 'M', 'L', 'XL']

const ProductDetail: React.FC<ProductItemsProps> = ({
  product: { _id, pname, image, type, price },
}) => {
    return (
      <>
        <div className="flex w-full mb-12 space-x-8">
          {/* left side image */}
          <div className="w-1/12">
            <Image
              src={urlForImage(image).url()}
              width={120}
              height={120}
              alt={pname}
            />
          </div>
          {/* main div */}
          <div className="w-7/12">
            <Image
              src={urlForImage(image).url()}
              width={700}
              height={550}
              alt={pname}
            />
          </div>
          {/* detail div */}
          <div className="flex flex-col justify-center w-5/12">
            <h1 className="text-4xl font-sm">{pname}</h1>
            <p className="text-gray-500 text-2xl pb-4">{type}</p>
            <Size size={size} />
            <Quantity />
            <div className="flex items-center">
              <AddToCard />
              <p className="pl-9 text-3xl font-bold ">{price}</p>
            </div>
          </div>

          {/* Product Information Detail */}
        </div>
        <ProductInformation />
      </>
    );
  };

export default ProductDetail;

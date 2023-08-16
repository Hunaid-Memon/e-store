import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface Product {
  _id: number | string;
  pname: string;
  image: string | StaticImageData | any;
  type: string;
  price: string | number;
}

interface ProductItemsProps {
  product: Product;
}

const ProductItems: React.FC<ProductItemsProps> = ({
  product: { _id, pname, image, type, price },
}) => {
  return (
    <div className="p-6">
      <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg">
        <Link href={`/products/${_id}`}>
          <Image
            className="mx-auto"
            src={urlForImage(image).url()}
            alt={pname}
            width={240}
            height={240}
          />
        </Link>
        <h3 className="mt-2 text-lg font-bold">{pname}</h3>
        <p className="text-gray-500">{type}</p>
        <p className="mt-1 font-semibold text-purple-600">{price}</p>
      </div>
    </div>
  );
};

export default ProductItems;

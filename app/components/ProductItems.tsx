// components/ProductItems.tsx
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
      <div className="">
        <Link href={`/products/${_id}`}>
          {/* Display menu data */}
          <Image
            className=""
            src={urlForImage(image).url()}
            alt={pname}
            width={240}
            height={240}
          />
          <h3 className="text-lg font-bold">{pname}</h3>
          <p>{type}</p>
          <p>{price}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductItems;

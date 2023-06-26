import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";



interface ProductItemsProps {
  id: number
  pname: string;
  image: string | StaticImageData;
  type: string;
  price: string;
}



const ProductItems: React.FC<ProductItemsProps> = ({
  id,
  pname,
  image,
  type,
  price,
}) => {
  return (
    <div className="p-6">
      <div className="">
        <Link href={`/products/${id}`}>
          {/* Display menu data */}
          <Image className="" src={image} alt={pname} width={240} height={240} />
          <h3 className="text-lg font-bold">{pname}</h3>
          <p>{type}</p>
          <p>{price}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductItems;

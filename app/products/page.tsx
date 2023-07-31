'use client'
import { StaticImageData } from "next/image";
import ProductItems from "../components/ProductItems";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  pname: string;
  description: string;
  image: string | StaticImageData | any;
  type: string;
  price: number;
}

const AllProducts: React.FC = () => {

   const [result, setResult] = useState<Product[]>([]);

   useEffect(() => {
     getProductData();
   }, []);

   const getProductData = async () => {
     try {
       const response = await client.fetch<Product[]>(
         `*[_type == "product"]`
       );
       setResult(response);
     } catch (error) {
       console.error("Error fetching product data:", error);
     }
   };

  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {result.length > 0 ?
        result?.map((product) => (
        <ProductItems key={product._id} product={product} />
        )) : 'Loading'
    }
    </div>
  );
};

export default AllProducts;

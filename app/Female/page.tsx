"use client";
import { StaticImageData } from "next/image";
import ProductItems from "../components/ProductItems";
import React, { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  pname: string;
  description: string;
  image: string | StaticImageData | any;
  type: string;
  price: number;
}

const Female: React.FC = () => {
  const [result, setResult] = useState<Product[]>([]);

  useEffect(() => {
    getFemaleData();
  }, []);

  const getFemaleData = async () => {
    try {
      const response = await client.fetch<Product[]>(
        `*[_type == "product" && category=="Female"]`
      );
      setResult(response);
    } catch (error) {
      console.error("Error fetching female data:", error);
    }
  };

  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {result?.map((product) => (
        <ProductItems key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Female;

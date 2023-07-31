"use client";
import { StaticImageData } from "next/image";
import ProductItems from "../components/ProductItems";
import React, { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  pname: string;
  description: string;
  image: string | StaticImageData;
  type: string;
  price: number;
}

const Kids: React.FC = () => {
  const [result, setResult] = useState<Product[]>([]);

  useEffect(() => {
    getKidsData();
  }, []);

  const getKidsData = async () => {
    try {
      const response = await client.fetch<Product[]>(
        `*[_type == "product" && category=="Kids"]`
      );
      setResult(response);
    } catch (error) {
      console.error("Error fetching male data:", error);
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

export default Kids;

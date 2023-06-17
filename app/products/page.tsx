'use client'
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Data from "./data";

interface MenuItem {
  name: string;
  image: string;
  type: string;
  price: string
}

const Products: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuItem[]>(Data);

  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {menuData.map((menu, key) => (
        <div
          className="flex flex-col pb-8 w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4"
          key={key}
        >
          {/* Display menu data */}
          <Image
            className="flex"
            src={menu.image}
            alt={menu.name}
            width={240}
            height={240}
          />
          <h3 className="text-lg font-bold">{menu.name}</h3>
          <p>{menu.type}</p>
          <p>{menu.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;

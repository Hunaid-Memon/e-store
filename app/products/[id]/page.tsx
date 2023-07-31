import ProductDetail from "@/app/components/ProductDetail";
import { StaticImageData } from "next/image";

// import Products from "../../data/Products";

import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  pname: string;
  description: string;
  image: string | StaticImageData;
  type: string;
  price: string |number;
}


const getProductById = async (id: string | number) => {
   const Products = await client.fetch(`*[_type=="product"]`); 
   return Products.filter((product: any) => product._id == id);
};

export default async function Page({ params }: { params: { id : string | number  } }) {
  const result = await getProductById(params.id);
  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {result.map((product: any) => (
        <ProductDetail key={product._id} product={product} />
      ))}
    </div>
  );
}
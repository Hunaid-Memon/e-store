// import Products from "../../data/Products";
import ProductItems from "@/app/components/ProductItems";

const getProductByCategory = async (category: string) => {
  const Products: IProduct[] = await getProductData() 
  return Products.filter((product) => product.category === category);
};

import { StaticImageData } from "next/image";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

interface IProduct {
  _id: string;
  pname: string;
  description: string;
  image: string | StaticImageData;
  type: string;
  price: number;
  category: string;
}

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
    pname,
    description,
    image,
    type,
    price,
    category
  }`);
  return res
};



export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductByCategory(params.slug);
  console.log(result)
  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {result.length > 0 ? (
        result.map((product) => (
          <ProductItems
            key={product._id}
            id={product._id}
            pname={product.pname}
            image={product.image}
            type={product.type}
            price={product.price}
          />
        ))
      ) : (
        <p>No Products found in this category</p>
      )}
    </div>
  );
}

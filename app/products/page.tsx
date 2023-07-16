import { StaticImageData } from "next/image";
import ProductItems from "../components/ProductItems";
//import Products from "../data/Products";


import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

interface IProduct {
  _id: string;
  pname: string;
  description: string;
  image: string | StaticImageData;
  type: string;
  price: number
}

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    _id,
    pname,
    description,
    image,
    type,
    price
  }`);
  return res;
};

const AllProducts: React.FC = async () => {
  const result: IProduct[] = await getProductData();
  console.log(result);
  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {result.map((product) => (
        <ProductItems
          key={product._id}
          id={product._id}
          pname={product.pname}
          image={product.image}
          type={product.type}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default AllProducts;

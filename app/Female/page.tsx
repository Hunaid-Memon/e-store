import { StaticImageData } from "next/image";
import ProductItems from "../components/ProductItems";
//import Products from "../data/Products";

import { client } from "@/sanity/lib/client";

interface IProduct {
  _id: string;
  pname: string;
  description: string;
  image: string | StaticImageData;
  type: string;
  price: number;
}

const Female: React.FC<IProduct[]> = async (): Promise<any> => {
  const result = await getProductData();
  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {result?.map((product) => (
        <ProductItems key={product._id} product={product} />
      ))}
    </div>
  );
};

export const getProductData = async () => {
  const result = await client.fetch<IProduct[]>(`*[_type == "product" && category=="Female"]`);
  return result;
};

export default Female;

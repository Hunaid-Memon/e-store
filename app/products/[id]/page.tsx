import ProductDetail from "@/app/components/ProductDetail";
import { StaticImageData } from "next/image";

// import Products from "../../data/Products";

import { client } from "@/sanity/lib/client";

interface IProduct {
  _id: string;
  pname: string;
  description: string;
  image: string | StaticImageData;
  type: string;
  price: string |number;
}



const getProductById = async (id: string | number) => {
   const Products = await client.fetch<IProduct[]>(`*[_type=="product"]`); 
   return Products.filter((product) => product._id == id);
  // return Products

};


export default async function Page({ params }: { params: { id : string | number  } }) {
  const result = await getProductById(params.id);
  console.log(result)
  console.log(params.id)
  console.log()
  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {result.map((product) => (
        <ProductDetail key={product._id} product={product} />
      ))}
    </div>
    // <div>
    //   {params.id}
    //   {Products.map(product => (
    //     <div key={product._id} >{ product.pname}</div>
    //   ))}
    // </div>
  );
}
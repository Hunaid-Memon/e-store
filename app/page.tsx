import Main from "./main";
import Promotion from "./promotion";
import Product from "./product";
import About from "./about";
import Subscribe from "./subscribe";

// import Image from "next/image";
// import { StaticImageData } from "next/image";



// import { client } from "@/sanity/lib/client";
// import { urlForImage } from '@/sanity/lib/image'

// interface IProduct {
//   pname: string;
//   description: string;
//   image: string | StaticImageData;
// }

// export const getProductData = async () => {
//   const res = await client.fetch(`*[_type=="product"]{
//     pname,
//     description,
//     image
//   }`);
//   return res;
// };

export default async function Home() {
  // const result: IProduct[] = await getProductData();
  // console.log(result);
  return (
    <>
      {/* {result.map((item,i) => (
        <Image key={i} width={120} height={120} src={urlForImage(item.image).url()} alt={""}/>
      ))} */}
      <Main />
      <Promotion />
      <Product />
      <About />
      <Subscribe />
    </>
  );
}

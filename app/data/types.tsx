import { StaticImageData } from "next/image";

export type product = {
  id: number;
  pname: string;
  image: string | StaticImageData;
  type: string;
  category: string;
  price: string;
  description: string;
};
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Truck } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col sm:flex-row justify-between items-center my-5 py-3 container">
        <Link href={"/"}>
          <li className="flex cursor-pointer mb-4 sm:mb-0">
            <Truck className="h-7 w-7" />
            &nbsp;
            <h4 className="text-xl">EStore</h4>
          </li>
        </Link>
        <ul className="flex items-center">
          <Link href={"/female"}>
            <li className="mr-4 cursor-pointer">Female</li>
          </Link>
          <Link href={"/male"}>
            <li className="mr-4 cursor-pointer">Male</li>
          </Link>
          <Link href={"/kids"}>
            <li className="mr-4 cursor-pointer">Kids</li>
          </Link>
          <Link href={"/products"}>
            <li className="mr-4 cursor-pointer">All Products</li>
          </Link>
        </ul>
        <li className="flex mt-4 sm:mt-0">
          <Search className="mr-2 h-5 w-5 mt-2" />
          <input
            className="border p-1 rounded"
            type="text"
            placeholder="What are you looking for"
          />
        </li>
        <li className="ml-4 sm:ml-6 mt-4 sm:mt-0">
          <Button className="rounded-full bg-gray-100 text-black p-3 hover:bg-gray-200">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

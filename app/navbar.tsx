import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react"
import { Truck } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center my-5 py-3 container">
        <li className="flex cursor-pointer">
          <Truck className="h-7 w-7" />
          &nbsp;
          <h4 className="text-xl">E-Store</h4>
        </li>
        <ul className="flex items-center">
          <li className="mr-6 cursor-pointer">Female</li>
          <li className="mr-6 cursor-pointer">Male</li>
          <li className="mr-6 cursor-pointer">Kids</li>
          <li className="mr-6 cursor-pointer">All Products</li>
        </ul>
        <li className="flex">
          <Search className="mr-2 h-5 w-5 mt-2" />
          <input
            className="border p-1 rounded"
            type="text"
            placeholder="what you looking for"
          />
        </li>
        <li>
          <Button className="rounded-full bg-gray-100 text-black hover:bg-gray-200">
            <ShoppingCart className="mr-2 h-4 w-4" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

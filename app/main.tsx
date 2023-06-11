import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Main: React.FC = () => {
  return (
    <div className="container flex justify-between pt-5 mb-10">
      <div className="pt-9 ">
        <button
          disabled
          className="border bg-blue-50 rounded pt-2 pb-2 pl-6 pr-6 mb-8 text-blue-900"
        >
          Sale 70%
        </button>
        <h1 className="text-6xl mb-8">An Industrial Take on Streetwear</h1>
        <p className="text-xl mb-9">
          Anyone can beat you, but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="p-8 ">
          <ShoppingCart size={16} /> {/* Specify the size of the icon */}
          &nbsp; Start Shopping
        </Button>
        <div className="flex pt-9 mt-9 justify-between">
          <Image src="/Featured1.webp" alt="main" width={100} height={100} />
          <Image src="/Featured2.webp" alt="main" width={100} height={100} />
          <Image src="/Featured3.webp" alt="main" width={100} height={100} />
          <Image src="/Featured4.webp" alt="main" width={100} height={100} />
        </div>
      </div>
      <div className="bg-red-50 rounded-full">
        <Image src="/header.webp" alt="main" width={700} height={700} />
      </div>
    </div>
  );
};

export default Main;

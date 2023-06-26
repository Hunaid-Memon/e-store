import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const AddToCard = () => {
  return (
    <Button className="p-4 ">
      <ShoppingCart size={16} /> 
      &nbsp; Start Shopping
    </Button>
  );
};

export default AddToCard;

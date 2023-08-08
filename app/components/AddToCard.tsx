'use client'
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const AddToCard: React.FC<{ product: any }> = ({ product }) => {

  const handleAddToCard = async () => {
    const res = await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        product_id: product._id
      })
    })
    const result = await res.json()
    console.log(result)
  } 

  return (
    <Button
      onClick={handleAddToCard}
      className="p-4 ">
      <ShoppingCart size={16} /> 
      &nbsp; Start Shopping
    </Button>
  );
};

export default AddToCard;

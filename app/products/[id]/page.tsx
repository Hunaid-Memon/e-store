import ProductDetail from "@/app/components/ProductDetail";
import Products from "../../data/Products";



const getProductById = (id: number) => {
  return Products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { id: number  } }) {
  const result = getProductById(params.id);
  console.log(result)
  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {
        result.map((product) => (
          <ProductDetail
            key={product.id}
            id={product.id}
            pname={product.pname}
            image={product.image}
            type={product.type}
            price={product.price}
          />
        ))}
    </div>
  );
}
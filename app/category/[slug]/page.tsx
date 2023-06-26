import Products from "../../data/Products";
import ProductItems from "@/app/components/ProductItems";

const getProductByCategory = (category: string) => {
  return Products.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductByCategory(params.slug);
  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {result.length > 0 ? (
        result.map((product) => (
          <ProductItems
            key={product.id}
            id={product.id}
            pname={product.pname}
            image={product.image}
            type={product.type}
            price={product.price}
          />
        ))
      ) : (
        <p>No Products found in this category</p>
      )}
    </div>
  );
}

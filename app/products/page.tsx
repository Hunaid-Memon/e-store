import ProductItems from "../components/ProductItems";
import Products from "../data/Products";

const AllProducts: React.FC = () => {
  return (
    <div className="container flex flex-wrap mt-12 mb-12">
      {Products.map((product) => (
        <ProductItems
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
};

export default AllProducts;

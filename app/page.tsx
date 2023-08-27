import Main from "./main/main";
import Promotion from "./main/promotion";
import Product from "./main/product";
import About from "./main/about";
import Subscribe from "./main/subscribe";

export default async function Home() {
 
  return (
    <>
      <Main />
      <Promotion />
      <Product />
      <About />
      <Subscribe />
    </>
  );
}

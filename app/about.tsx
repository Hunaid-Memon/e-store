import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="container flex flex-row mt-12 mb-9 pt-12">
        <div className="w-1/2"></div>
        <div className="text-5xl font-medium w-1/2">
          Unique and Authentic Vintage Designer Jewellery
        </div>
      </div>
      <div className="container relative flex pt-5 mb-10">
        <div className="absolute text-8xl opacity-5 font-bold">
          Different <br /> from <br /> others
        </div>
        <div className="w-1/4">
          <div className="pt-4 pr-12">
            <h3 className="text-2xl font-bold pb-4 pr-4">
              Using Good Quality Material
            </h3>
            <p className="text-lg pb-8 pr-4">
              Lorem ipsum dolor adipisicing elit. Facilis eius erfe
            </p>
          </div>
          <div className="pr-12">
            <h3 className="text-2xl font-bold pb-4 pr-4">
              Modern Fashion Design
            </h3>
            <p className="text-lg pr-4">
              Lorem ipsum dolor adipisicing elit. Facilis eius erfe{" "}
            </p>
          </div>
        </div>
        <div className="w-1/4">
          <div className="pt-4 pr-12">
            <h3 className="text-2xl font-bold pb-4 pr-4">
              100% Handmade Products
            </h3>
            <p className="text-lg pb-8 pr-4">
              Lorem ipsum dolor adipisicing elit. Facilis eius erfe{" "}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold pb-4 pr-4">
              Discount for Bulk Orders
            </h3>
            <p className="text-lg pr-4">
              Lorem ipsum dolor adipisicing elit. Facilis eius erfe{" "}
            </p>
          </div>
        </div>
        <div className="w-1/4 pb-10">
          <Image src="/image3.png" alt="image3" width={300} height={320} />
        </div>
        <div className="w-1/4 flex flex-col justify-center pl-6 pr-10">
          <p className="pr-5 pb-6">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
          <div>
            <button className="text-white bg-black text-sm p-3">
              See All Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

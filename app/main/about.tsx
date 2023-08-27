import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row mt-12 mb-9 pt-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="text-3xl md:text-5xl font-medium">
            Unique and Authentic Vintage Designer Jewellery
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="text-8xl opacity-5 font-bold md:absolute md:static">
            Different <br /> from <br /> others
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-5 mb-10">
        <div className="w-full md:w-1/4 pt-4 pr-12">
          <h3 className="text-xl md:text-2xl font-bold pb-4">
            Using Good Quality Material
          </h3>
          <p className="text-base md:text-lg pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            eius erfe
          </p>
          <h3 className="text-xl md:text-2xl font-bold pb-4">
            100% Handmade Products
          </h3>
          <p className="text-base md:text-lg pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            eius erfe
          </p>
        </div>
        <div className="w-full md:w-1/4 pt-4 pr-12">
          <h3 className="text-xl md:text-2xl font-bold pb-4">
            Modern Fashion Design
          </h3>
          <p className="text-base md:text-lg pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            eius erfe
          </p>
          <h3 className="text-xl md:text-2xl font-bold pb-4">
            Discount for Bulk Orders
          </h3>
          <p className="text-base md:text-lg pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            eius erfe
          </p>
        </div>
        <div className="w-full md:w-1/4 pb-10">
          <Image src="/image3.png" alt="image3" width={300} height={320} />
        </div>
        <div className="w-full md:w-1/4 flex flex-col justify-center pt-4 md:pt-0 pl-6 pr-10">
          <p className="text-sm md:text-base pr-5 pb-6">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
          <div>
            <button className="text-white bg-black text-sm md:text-base p-3">
              See All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

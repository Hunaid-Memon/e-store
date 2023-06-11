import Image from "next/image";
import { Button } from "@/components/ui/button";
  
const Promotion = () => {
  return (
    <div className="container mt-10 mb-10">
      <h6 className="text-blue-600 font-bold text-center p-4">PROMOTIONS</h6>
      <h2 className="text-center font-bold text-3xl pb-6" >Our Promotions Events</h2>
      <div className="flex justify-between" >
        <div className="w-1/2" >
          <div className="bg-gray-300 flex justify-between p-2 pr-4 pl-4 items-center">
            <div className="flex flex-col">
            <h3 className="text-4xl font-bold">
              GET UP TO <span className="text-6xl">60%</span>
            </h3>
            <p className="text-lg" >For the summer season</p>
            </div>
            <Image src="/event1.webp" alt="event1" width={250} height={250} />
          </div>
          <div className="flex flex-col h-44 p-4 items-center justify-center mt-3 bg-black text-white">
            <h3 className="text-4xl font-bold p-2">GET 30% Off</h3>
            <p className="text-xs m-2">USE PROMO CODE</p>
            <button className="bg-gray-800 p-2 pl-12 pr-12 rounded">DINEWEEKENDSALE</button>
          </div>
        </div>
        <div className="flex w-1/2 ml-3" >
          <div className="flex w-full flex-col pl-6 pt-6 text-lg w-1/2 ml-2 bg-red-100">
            <p className="">
              Flex Sweatshirt <span className="flex line-through flex-row" >$100</span>
              <span className="font-bold">$75</span>
            </p>
            <div className="flex justify-center" >
            <Image className="" src="/event2.webp" width={220} height={220} alt="event2" />
            </div>
          </div>
          <div className="flex flex-col w-full pl-6 pt-6 ml-3 bg-gray-200 w-1/2">
            <p className="">
              Flex Push Button Bomber <span className="flex flex-row line-through" >$225</span>
              <span className="font-bold">$190</span>
            </p>
            <div className="flex justify-center" >
            <Image className="" src="/event3.webp" width={220} height={220} alt="event2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <h6 className="" >PROMOTIONS</h6> */}
      // <h2>Our Promotions Events</h2>

      // <h3>
      //       GET UP TO <span>60%</span>
      //     </h3>
      //     <p>For the summer season</p>
      //     <Image src="/event1.webp" alt="event1" width={200} height={200} />
        

      //  <h3>GET 30% Off</h3>
      //     <p>USE PROMO CODE</p>
      //     <button>DINEWEEKENDSALE</button>


      //  <p>
      //         Flex Sweatshirt
      //         <span>$100</span>
      //         <span>$75</span>
      //       </p>
      //       <Image src="/event2.webp" width={200} height={200} alt="event2" />
          

//  <p>
//               Flex Push Button Bomber
//               <span>$225</span>
//               <span>$190</span>
//             </p>
//             <Image src="/event3.webp" width={200} height={200} alt="event2" />
          

export default Promotion;
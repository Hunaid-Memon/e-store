
const Subscribe = () => {
  return (
    <div className="flex flex-col items-center mt-12 p-12 mb-12 relative">
      <div className="absolute text-9xl font-bold opacity-5">
        Newsletter
      </div>
      <h1 className="text-4xl font-bold pb-3">Subscribe Our Newsletter</h1>
      <p className=" text-lg pb-10 mb-3">
        Get the latest information and promo offers directly
      </p>
      <form className="">
        <input
          size={34}
          className="p-1 pl-4 mr-2"
          type="email"
          placeholder="input email address"
        />
        <button className="bg-black text-white p-1 pl-2 pr-2 text-lg">
          Get Started
        </button>
      </form>
    </div>
  );
}

export default Subscribe
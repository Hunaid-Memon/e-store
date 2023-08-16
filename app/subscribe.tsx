const Subscribe = () => {
  return (
    <div className="flex flex-col items-center mt-12 p-6 sm:p-12 mb-12 relative">
      <div className="absolute text-4xl sm:text-9xl font-bold opacity-50">
        Newsletter
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold pb-2 sm:pb-3">
        Subscribe to Our Newsletter
      </h1>
      <p className="text-base sm:text-lg pb-6 sm:pb-10 mb-2 sm:mb-3">
        Get the latest information and promo offers directly
      </p>
      <form className="flex flex-col sm:flex-row items-center">
        <input
          className="p-2 sm:p-1 sm:pl-4 mr-2 w-full sm:w-96"
          type="email"
          placeholder="Enter your email address"
        />
        <button className="bg-black text-white p-2 sm:p-1 sm:pl-2 sm:pr-2 text-base sm:text-lg mt-2 sm:mt-0">
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Subscribe;

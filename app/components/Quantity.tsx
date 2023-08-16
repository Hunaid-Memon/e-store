const Quantity = () => {
  return (
    <div className="flex flex-col md:flex-row mb-8 space-y-4 md:space-y-0 md:space-x-4">
      <p className="text-lg font-bold md:self-center">Quantity:</p>
      <div className="flex space-x-4 md:self-center">
        {" "}
        {/* Responsive flex layout */}
        <button className="text-3xl w-10 h-10 border-solid border-2 border-black rounded-full">
          -
        </button>
        <p className="text-3xl w-10 h-10 md:self-center">1</p>
        <button className="text-3xl w-10 h-10 border-solid border-2 border-black rounded-full">
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;

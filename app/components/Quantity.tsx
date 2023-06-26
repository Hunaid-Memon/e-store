
const Quantity = () => {
  return (
    <div className="flex mb-8 space-x-4">
      <p className="text-lg font-bold">Quantity:</p>
      <button className="text-3xl w-10 h-10 border-solid border-2 border-black rounded-full text-">
        -
      </button>
      <p className="text-3xl w-10 h-10">1</p>
      <button className="text-3xl w-10 h-10 border-solid border-2 border-black rounded-full text-">
        +
      </button>
    </div>
  );
}

export default Quantity
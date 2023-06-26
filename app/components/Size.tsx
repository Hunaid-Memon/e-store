import React from "react";

interface SizeProps {
  size: string[];
}

const Size: React.FC<SizeProps> = ({ size }) => {
  return (
    <div className="m-4 space-x-3">
      <h4 className="text-sm font-bold py-3">SELECT SIZE</h4>
      {size.map((s) => (
        <button
          className=" font-bold w-12 h-12 border-solid hover:bg-white hover:drop-shadow-xl rounded-full"
          key={s}
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default Size;

import React from "react";

interface SizeProps {
  size: string[];
}

const Size: React.FC<SizeProps> = ({ size }) => {
  return (
    <div className="m-4 space-x-3">
      <h4 className="text-base md:text-sm font-semibold py-3">SELECT SIZE</h4>
      <div className="flex flex-wrap">
        {size.map((s) => (
          <button
            className="w-12 h-12 md:w-14 md:h-14 border-solid border hover:bg-white hover:drop-shadow-xl rounded-full text-sm md:text-base font-semibold flex items-center justify-center mb-2 md:mb-0 md:mr-2"
            key={s}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Size;

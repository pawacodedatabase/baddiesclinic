import React from 'react';

const MovingText: React.FC = () => {
  return (
    <div className="relative bg-[#FFD700] text-white py-4 px-3">
      <div className="absolute top-0 left-0 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-sm font-bold text-gray-900 ">
          <span> <span className='text-[#000]'>Welcome</span> to our shop! Get amazing discounts on all items. Shop Now!</span>
        </div>
      </div>
    </div>
  );
};

export default MovingText;

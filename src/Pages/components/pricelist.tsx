// import React from 'react';

const PriceList = () => {
  const wigPrices = [
    { name: 'Closure Wig', price: '£75.00' },
    { name: 'Frontal Wig', price: '£85.00' },
    { name: 'Full Fringe Wig', price: '£80.00' },
    { name: 'Pixie Cut Wig', price: '£75.00' },
    { name: 'U-Part Wig', price: '£75.00' },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-yellow-600 rounded-lg p-8 shadow-xl">
        <h1 className="text-center text-3xl font-bold text-yellow-500 uppercase tracking-widest mb-2">
          Baddies Clinic
        </h1>
        <h2 className="text-center text-white text-2xl font-semibold mb-1">The Pricelist</h2>
        <h3 className="text-center text-gray-300 mb-6 tracking-wide">The Ladies</h3>

        <p className="text-center text-gray-200 text-sm mb-8">
          Let’s make a wig. This service also includes<br />
          <span className="text-yellow-400">customisation & styling</span>
        </p>

        <div className="border border-yellow-600 rounded-lg p-4 space-y-3">
          {wigPrices.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-white text-base border-b border-gray-700 last:border-none pb-2 last:pb-0"
            >
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-yellow-400 text-xs mt-6 uppercase font-medium">
          Please note: After 4 bundles being added, if you want to add additional bundles it's £6 per bundle.
        </p>
      </div>
    </div>
  );
};

export default PriceList;

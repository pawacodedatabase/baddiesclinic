// import React from 'react';

const WigRevamp = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-yellow-600 rounded-lg p-8 shadow-2xl text-white space-y-6">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold uppercase text-yellow-500 tracking-wider">Baddies Clinic</h1>
          <p className="text-sm text-gray-300 mt-1">Wig Revamp Experience</p>
        </div>

        {/* Tagline */}
        <div className="text-center space-y-2">
          <p className="text-pink-400 uppercase tracking-widest font-medium">Let’s bring them back to life!</p>
          <p className="text-gray-300 text-sm">
            This revamp package service is designed for people that have multiple wigs they would like to revamp.
          </p>
          <div className="bg-yellow-800 text-sm text-white p-3 rounded-md border border-yellow-600 font-medium">
            Minimum of 5 wigs, max 25 • International service • Turnaround: 7–14 days
          </div>
        </div>

        {/* Services Included */}
        <div className="md:flex gap-6">
          <div className="flex-1 space-y-3">
            <h2 className="text-lg font-semibold text-yellow-500 uppercase mb-2">This Service Includes:</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Luxury Wash & Blowdry Set</li>
              <li>Hair Colouring Service</li>
              <li>Closure and Frontal Replacements</li>
              <li>Bundle Add-ins</li>
              <li>Trimming and Cutting Service</li>
              <li>Tighten Loose Tracks</li>
              <li>Styling Service <span className="text-pink-400">(including up and down styles, ponytails, curls, crimps)</span></li>
              <li>Customisation Services <span className="text-pink-400">(plucking & bleaching knots)</span></li>
              <li>
                Wigs are sent back in branded Baddies Clinic bags with hangers or luxury satin bags.
              </li>
            </ul>
            <p className="text-xs text-pink-400 mt-3">
              Note: Bundles/frontals & closures can also be provided at additional cost.
            </p>
          </div>

          {/* Process */}
          <div className="flex-1 space-y-4 mt-8 md:mt-0">
            <h2 className="text-lg font-semibold text-yellow-500 uppercase mb-2">What's the Process?</h2>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-yellow-400 font-semibold">Step 1:</span> Book a consultation call via our website or Instagram.
                All calls are placed via WhatsApp or Zoom. International calls are free.
              </p>
              <p>
                <span className="text-yellow-400 font-semibold">Step 2:</span> Once your wig order is finalised and deposit paid,
                you’ll receive confirmation with the delivery address.
              </p>
              <p>
                <span className="text-yellow-400 font-semibold">Step 3:</span> Once wigs arrive, we’ll work on them and send before/after
                pictures. Wigs are then packed and returned in Baddies Clinic hair bags or satin bags.
              </p>
              <p className="text-xs text-pink-400 mt-2">
                Please note: All wigs are sent back signed and tracked with insurance on it.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 pt-4">
          For more info, follow us on Instagram <span className="text-yellow-400 font-medium">@baddies_clinic</span>
        </p>
      </div>
    </div>
  );
};

export default WigRevamp;

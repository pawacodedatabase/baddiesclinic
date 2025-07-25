import {  useState } from "react";
import { X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function BusinessPopup() {
  const [showPopup, setShowPopup] = useState(true); // Show by default

  const handleClose = () => {
    setShowPopup(false); // Just close without storing anything
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="relative bg-black rounded-2xl p-6 w-80 shadow-2xl text-center text-white">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={handleClose}
        >
          <X size={18} />
        </button>

        <img src={logo} alt=" Logo" width={100} className="mx-auto mb-4" />

        <h2 className="font-semibold text-xl text-[#FFD700]  mb-2 ">Explore & Learn</h2>

        <p className="text-sm text-gray-200 mb-5">
  Ready to slay your next look? Book your{" "}
  <span className="text-[#FFD700] font-bold">Appointment</span> now with Baddies Clinic and let our experts bring your hair goals to life!
</p>


        <div className="flex flex-col gap-3">
          <Link
            to={"/book"}
            className="bg-[#FFD700] text-black  font-semibold py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            Book A Session
          </Link>

          {/* <Link
            to={"/guide"}
            className="border border-gray-500 text-gray-300 py-2 rounded-lg hover:border-white hover:text-white transition"
          >
            Check Leg Size Guide
          </Link> */}

          <button
            className="mt-2 text-sm text-gray-500 hover:text-gray-300 underline"
            onClick={handleClose}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

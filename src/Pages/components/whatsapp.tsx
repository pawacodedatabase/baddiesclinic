import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhatsAppIcon: React.FC = () => {
  return (

    <>
    
    
    <a
    href="https://wa.me/+447516359788" 
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-[420px] right-2 bg-[#000] text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
  >
    <FaWhatsapp />
  </a>

  <Link to='/book' className='fixed bottom-[20px] left-2  bg-[#000] text-white px-2 py-2 text-sm border-2  shadow-lg hover:bg-gray-600 transition duration-300 z-50
'>
   Book Appointment
  </Link>
 
  
  
  </>
  
  );
};

export default WhatsAppIcon;

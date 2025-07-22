import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../products/product";
import { Link, useNavigate } from "react-router-dom";

import wigImg from '../../assets/rose.jpg';
import dreadImg from '../../assets/lash.jpg';
import styleImg from '../../assets/lip.jpg';

const BIN_ID = "687e72d97b4b8670d8a4f140";
const API_KEY = "$2a$10$yti1izYQ7PKY9IhwxrQiuuIk8TZDdxM6nzYFnduMOvJtKIdyRhBB.";

const headers = {
  "X-Master-Key": API_KEY,
  "Content-Type": "application/json",
};

const services = [
  {
    label: "Wig Sales",
    value: "wig sales",
    image: wigImg,
  },
  {
    label: "Dreadlocks",
    value: "dreadlocks",
    image: dreadImg,
  },
  {
    label: "Hairstyling (Male & Female)",
    value: "hairstyling",
    image: styleImg,
  },
];

export default function ServiceSelector() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, { headers });
    setProducts(res.data.record);
  };

  const handleServiceClick = (service: string) => {
    setSelectedService(service === selectedService ? null : service);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts =
    selectedService === "wig sales"
      ? products.filter((p) => p.category.toLowerCase() === "wig sales").slice(0, 4)
      : [];

  return (
    <div className="p-6 max-w-7xl mx-auto bg-[#000]">
      <h1 className="text-2xl font-thin mb-6 text-center text-[#FFD700]">
        <span className="text-[#eee]">Our</span> Services
      </h1>

      {/* Service Cards */}
      <div className="flex gap-4 mb-8 justify-center flex-wrap">
        {services.map((service) => (
          <div
            key={service.value}
            className="relative w-40 h-[230px] rounded overflow-hidden cursor-pointer border-4 border-[#FFD700] transition transform hover:scale-105"
            onClick={() => handleServiceClick(service.value)}
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fade-in">
              <h2 className="text-white text-sm font-thin text-center px-2">
                {service.label}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="mt-4">
          <h2 className="text-sm font-semibold mb-4 text-center text-white">
            {selectedService === "wig sales"
              ? `Showing ${selectedService} Products`
              : `Service: ${selectedService}`}
          </h2>

          {/* Wig Sales Products */}
          {selectedService === "wig sales" ? (
            <div className="flex flex-wrap justify-center gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="w-48 bg-black shadow p-3 rounded text-sm">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <h3 className="font-semibold text-sm text-[#ccc]">{product.name}</h3>
                    <p className="text-gray-300 text-xs">{product.category}</p>
                    <p className="font-bold text-red-500 text-sm">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            // Book an Appointment Button
            <div className="text-center mt-6">
              <button
                onClick={() => navigate("/book")}
                className="bg-[#FFD700] text-black font-medium px-6 py-2 rounded hover:bg-white transition"
              >
                Book an Appointment
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

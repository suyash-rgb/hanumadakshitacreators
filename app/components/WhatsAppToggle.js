"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhatsAppToggle() {
  const [isOpen, setIsOpen] = useState(false);
  // Replace with your WhatsApp number (e.g., '918888888888' for +91-88888-88888)
  const whatsappNumber = "916267121751";
  const message =
    "Hi! I am interested in your services. Can you please help me?";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Toggle Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-56 animate-in fade-in slide-in-from-bottom-4">
          <h3 className="font-bold text-gray-800 mb-3 text-lg">
            Connect with us!
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Chat directly with our team to discuss your project.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Message
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <Image
          src="/whatsapp.webp" // <-- your PNG file in /public
          alt="WhatsApp Logo"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
}

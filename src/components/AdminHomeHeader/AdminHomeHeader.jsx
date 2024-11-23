import React from 'react';
import { FaWhatsapp, FaUniversity } from 'react-icons/fa';

const AdminHomeHeader = () => {
    const handleWhatsAppClick = () => {
        window.open('https://whatsapp.com/channel/0029Vaxoos79RZAdpsvCX12r', '_blank');
      };

  const handleInstituteClick = () => {
    window.location.href = '/knowledge-base';
  };

  return (
    <header className="relative flex justify-between items-center bg-white p-6 rounded-lg shadow-md mb-6">
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Home</h1>
        <p className="text-gray-600">Everything you need to run your business smoothly.</p>
      </div>

      {/* Right Section */}
      <div className="flex space-x-8 relative">
        {/* WhatsApp Icon */}
        <div
          className="relative group cursor-pointer"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp
            className="text-green-500 text-3xl transition-transform duration-200 transform group-hover:scale-105"
          />
          <div
            className="absolute top-12 left-1/2 transform -translate-x-2/3 hidden group-hover:flex bg-gray-600 text-white text-sm rounded-lg p-4 shadow-lg z-50 w-[280px]"
            style={{
              whiteSpace: 'normal', // Prevent text overflow
              overflowWrap: 'break-word', // Break long words if necessary
            }}
          >
            Join our WhatsApp channel and get tips, growth hacks, product updates, and more.
          </div>
        </div>

        {/* Institute Icon */}
        <div
          className="relative group cursor-pointer"
          onClick={handleInstituteClick}
        >
          <FaUniversity
            className="text-blue-500 text-3xl transition-transform duration-200 transform group-hover:scale-105"
          />
          <div
            className="absolute top-12 left-1/2 transform -translate-x-[90%] hidden group-hover:flex bg-gray-600 text-white text-sm rounded-lg p-4 shadow-lg z-50 w-[280px]"
            style={{
              whiteSpace: 'normal',
              overflowWrap: 'break-word',
            }}
          >
            Search our knowledge base for your doubts.
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHomeHeader;

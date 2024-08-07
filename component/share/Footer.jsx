import { assets } from "@/Assets/assets";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 px-8 bg-gray-800 text-white">
      {/* Left Side: Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <Image src={assets.logo} alt="Logo" width={120} className="mr-2 text-white" />
      
      </div>
      
      {/* Middle: Copyright */}
      <div className="text-center mb-4 md:mb-0">
        <p className="text-sm">&copy; 2024 by Kawsar</p>
      </div>
      
      {/* Right Side: Social Media Icons */}
      <div className="flex items-center space-x-4">
        <Image src={assets.facebook_icon} alt="Facebook" width={40}  />
        <Image src={assets.twitter_icon} alt="Twitter" width={40}  />
        <Image src={assets.googleplus_icon} alt="Instagram" width={40}  />
      </div>
    </div>
  );
};

export default Footer;

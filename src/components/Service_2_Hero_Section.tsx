import React from 'react';
import Link from 'next/link';

const Service2HeroSection = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#000B18] to-[#001F3F] flex items-center justify-center px-4 py-16 md:py-24">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617] opacity-50"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Welcome text */}
        <p className="text-[#C0EBFD] font-[600] text-[20px] mb-4">
          Welcome to INFRABOT
        </p>
        
        {/* Main heading */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Transform your enterprise IT<br />
          Automation with Infrabot
        </h1>
        
        {/* Description text */}
        <p className="text-[#EDEDEDE5] font-[500] text-[20px] max-w-[70%] mx-auto mb-10">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#watch-demo" className="px-8 py-3 bg-white text-black rounded-[50px] hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base font-medium">
                Watch Demo
            </Link>

            <Link href="#book-demo" className="px-8 py-3 bg-transparent border rounded-[50px] border-white text-white hover:bg-white/10 transition-colors duration-300 text-sm md:text-base font-medium">
                Book Demo
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Service2HeroSection;
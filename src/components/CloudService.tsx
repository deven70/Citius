// src/components/CloudService.tsx
import React from 'react';
import { Container } from './Container';

const CloudService = () => {
  return (
    // w-full 
    <section className="flex relative w-full  px-4 md:px-6 lg:px-8 pl-[9.25rem] pr-[9.25rem] pb-[8.31rem] pt-[5rem] bg-[linear-gradient(135deg,#0a192f_0%,#0d1f3a_100%)]">
      <Container>
        <div className="container flex flex-col lg:flex-row items-center justify-between mx-auto px-4 w-1140 pl-[5rem] pr-[5rem]">
          {/* Hero Content */}
          <div className="flex-1 max-w-[600px] pt-16">
            <h1 className="text-[4rem] mb-6 text-white font-semibold font-manrope">
              Cloud Services
            </h1>
            <p className="text-lg leading-relaxed text-[#a8b2d1] mb-8">
              Amazon Web Services (AWS) offers over 200 fully functional services from data centers all over the world. 
              Millions of clients use AWS to increase agility, cut costs, and spur innovation
            </p>
            <div className="flex gap-4">
              <button 
                className="px-8 py-3 rounded-[50px] bg-gradient-to-r from-[#0D4E6C] via-[#3288AE] to-[#FDD1B1] 
                text-white font-medium transition-all duration-300 hover:bg-[#1976d2]"
              >
                Know More
              </button>
              <button 
                className="px-8 py-3 rounded-[50px] border-2 border-[linear-gradient(circle,#FFAE6C_0%,#39A9FF_100%)] text-white font-medium 
                transition-all duration-300 hover:bg-[#2196f3]/10"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Hero Diagram */}
          <div className="flex-1 relative flex justify-center items-center p-8">
            <img 
              src="/images/banner.svg" 
              alt="Cloud Services Banner" 
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CloudService;
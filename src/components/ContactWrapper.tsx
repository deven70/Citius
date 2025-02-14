import React from 'react';
import { Container } from './Container';
import { ArrowRight } from 'lucide-react';

const ContactWrapper = () => {
  return (
    <div className="w-full bg-[#000000] py-20 md:py-[80px]">
      <Container>
        <div className="flex justify-between items-center">
          {/* Left Section - Heading */}
          <div className="flex-1">
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-[700] text-[#FFFFFF] leading-[1.2]">
              Connect with us
            </h2>
          </div>

          {/* Right Section - Button */}
          <div>
            <button className="group flex items-center gap-2 px-8 py-4 rounded-[100px] bg-gradient-to-r from-[#3288AE] via-[#3288AE] to-[#FDD1B1] text-white hover:bg-[#1a1a1a] transition-colors duration-300">
              <span className="font-dmSans">Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactWrapper;
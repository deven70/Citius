import React from 'react';
import { Container } from './Container';

const WhatWeDo = () => {
  const services = [
    {
      title: 'Implementation',
      description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
    },
    {
      title: 'Implementation',
      description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
    },
    {
      title: 'Implementation',
      description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
    },
    {
      title: 'Business Process Automation',
      description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
    },
    {
      title: 'Business Process Automation',
      description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
    },
    {
      title: 'Business Process Automation',
      description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
    },
    {
        title: 'Cloud Infrastructure Automation',
        description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
    },
    {
        title: 'Cloud Infrastructure Automation',
        description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
    },
    {
        title: 'Cloud Infrastructure Automation',
        description: 'Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.'
    },
  ];

  return (
    <div className="w-full bg-[url('/images/What-we-can.svg')] bg-cover bg-bottom bg-no-repeat py-16 md:py-24">
      <Container>
        <div className="space-y-8">
          {/* Header Section */}
          <div className="">
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-[700] text-[#ffffff] leading-tight">
              What we do
            </h2>
            <p className="text-[#ffffff] mt-4 text-lg font-dmSans">
              Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px] mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#131418] rounded-[12px] p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Placeholder for service icon/image */}
                <div className="w-16 h-16 bg-[#EEF2F6] mb-6 text-[#000000] font-medium text-[32px] flex items-center justify-center rounded-[50px] shadow-[0px_4px_20px_0px_rgba(155,219,245,0.47)]">
                  0{index + 1}
                </div>

                
                <h3 className="text-xl font-[600] text-[#ffffff] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#ffffff] font-dmSans">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
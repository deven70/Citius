import React from 'react';
import Image from 'next/image';

const Service2Banner = () => {
  const services = [
    {
      icon: '/images/sliders.svg',
      title: 'Account Setup',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia'
    },
    {
      icon: '/images/lock.svg',
      title: 'Security and Privacy',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia'
    },
    {
      icon: '/images/user.svg',
      title: 'Technical Support',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia'
    },
    {
      icon: '/images/sliders.svg',
      title: 'Account Setup',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia'
    },
    {
      icon: '/images/lock.svg',
      title: 'Security and Privacy',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia'
    },
    {
      icon: '/images/user.svg',
      title: 'Technical Support',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia'
    },
    {
        icon: '/images/sliders.svg',
        title: 'Account Setup',
        description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia'
      },
      {
        icon: '/images/lock.svg',
        title: 'Security and Privacy',
        description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia'
      },
      {
        icon: '/images/user.svg',
        title: 'Technical Support',
        description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia'
      }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#001F3F] to-[#000B18] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#1E293B] rounded-[22px] overflow-hidden group hover:bg-[#1E293B]/80 transition-all duration-300"
            >
              {/* Icon Section */}
              <div className="bg-[#1A1B1E] p-8 flex items-center justify-center h-[240px]">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-[30px_40px_80px_40px] bg-white">
                <h3 className="text-[#070113] text-[22px] font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[#8B8D98] text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service2Banner;
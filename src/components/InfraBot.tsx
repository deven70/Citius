import React from 'react';
import Image from 'next/image';

const InfraBot = () => {
  const visionItems = [
    {
      title: 'Secure Crypto Solutions',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia',
      icon: '/images/icon-right.svg'
    },
    {
      title: 'Empowering Crypto Education',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia',
      icon: '/images/icon-right.svg'
    },
    {
      title: 'Advancing Decentralization',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia',
      icon: '/images/icon-right.svg'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24 px-4 rounded-[22px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 w-[45%] infra-main">
          <h3 className="text-[#6366F1] font-semibold text-lg mb-4">
            Our Vision
          </h3>
          <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold mb-6">
            InfraBot's Vision
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl">
            Commodo nec mi id ullamcorper vitae augue neque dis nunc lacinia viverra orci diam.
          </p>
        </div>

        {/* Vision Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Vision Items */}
          <div className="space-y-8 w-[70%] infra-vision">
            {visionItems.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                    style={{maxWidth: 70}}
                    // className="text-white"
                  />
                </div>
                <div>
                  <h3 className="text-[#1E293B] text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 h-[400px] lg:h-full">
            {/* Placeholder for image - you'll need to add your actual image */}
            {/* <div className="w-full h-full bg-gray-200 rounded-xl"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfraBot;
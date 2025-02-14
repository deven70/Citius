import React from 'react';
import Image from 'next/image';

const KeyFeature = () => {
  const features = [
    {
      title: 'Blockchain Innovation Award',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.'
    },
    {
      title: 'Crypto Exchange of the Year',
      description: 'Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci.'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24 px-4 rounded-[22px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 w-[82%] h-[400px] lg:h-full key-feature-image">
            {/* Placeholder for image */}
            {/* <div className="w-full h-full bg-gray-100 rounded-xl"></div> */}
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center w-[80%] key-feature-content">
            {/* Trophy Icon */}
            <div className="mb-6">
              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center">
                <Image
                  src="/images/trophy.svg"
                  alt="Trophy"
                  width={70}
                  height={70}
                  className="text-white"
                />
              </div>
            </div>

            {/* Title Section */}
            <h2 className="text-[#1E293B] text-4xl md:text-5xl font-bold mb-4">
              Key feature of the product
            </h2>
            <p className="text-[#64748B] text-lg mb-12">
              Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam nibh est vitae.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-[#1E293B] text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748B] text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;
// src/components/CloudService.tsx
import React from 'react';
import { Container } from './Container';

const Awards = () => {
  return (
    <section className="bg-gradient-to-b from-[#000B18] to-[#001F3F] py-16 px-6 md:py-24 md:px-12 lg:px-16 relative overflow-hidden">
    <Container>
        <h2 className="text-white text-3xl md:text-4xl text-center mb-12 md:mb-16 relative z-10">
            Awards and Accolades
        </h2>
        <div className="max-w-5xl mx-auto relative z-10">
            {/* First row of awards */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10 md:mb-12">
                {/* Award 1 */}
                <div className="w-full sm:w-auto text-center">
                    <div className="flex items-center justify-center gap-4 md:gap-6 p-4 md:p-6">
                        <img src="/images/laurel-left.svg" alt="" className="w-8 md:w-10 opacity-80 -mr-1 md:-mr-2" />
                        <span className="text-center min-w-[180px] md:min-w-[200px]">
                            <h3 className="text-white text-lg md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">
                                Nutanix Global Services
                            </h3>
                            <p className="text-[#FFD4A3] text-sm md:text-base">Partner Of The Year 2021</p>
                        </span>
                        <img src="/images/laurel-right.svg" alt="" className="w-8 md:w-10 opacity-80 -ml-1 md:-ml-2" />
                    </div>
                </div>

                {/* Award 2 */}
                <div className="w-full sm:w-auto text-center">
                    <div className="flex items-center justify-center gap-4 md:gap-6 p-4 md:p-6">
                        <img src="/images/laurel-left.svg" alt="" className="w-8 md:w-10 opacity-80 -mr-1 md:-mr-2" />
                        <span className="text-center min-w-[180px] md:min-w-[200px]">
                            <h3 className="text-white text-lg md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">
                                Nutanix Service Champion
                            </h3>
                            <p className="text-[#FFD4A3] text-sm md:text-base">Only company to receive title</p>
                        </span>
                        <img src="/images/laurel-right.svg" alt="" className="w-8 md:w-10 opacity-80 -ml-1 md:-ml-2" />
                    </div>
                </div>
            </div>

            {/* Second row (centered) */}
            <div className="flex justify-center">
                <div className="w-full sm:w-auto text-center">
                    <div className="flex items-center justify-center gap-4 md:gap-6 p-4 md:p-6">
                        <img src="/images/laurel-left.svg" alt="" className="w-8 md:w-10 opacity-80 -mr-1 md:-mr-2" />
                        <span className="text-center min-w-[180px] md:min-w-[200px]">
                            <h3 className="text-white text-lg md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">
                                Nutanix Specialized
                            </h3>
                            <p className="text-[#FFD4A3] text-sm md:text-base">Partner Of The Year 2020</p>
                        </span>
                        <img src="/images/laurel-right.svg" alt="" className="w-8 md:w-10 opacity-80 -ml-1 md:-ml-2" />
                    </div>
                </div>
            </div>
        </div>

        {/* Background wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-0">
            <div className="absolute bottom-0 left-0 right-0 h-full bg-[url('/images/wave-pattern.svg')] bg-repeat-x bg-bottom"></div>
        </div>
    </Container>
</section>

  );
};

export default Awards;
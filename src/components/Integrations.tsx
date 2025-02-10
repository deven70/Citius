import React from 'react';
import Image from 'next/image';

const Integrations = () => {
    return (
            <section className="w-full py-16 bg-black">
                <div className="container mx-auto ">
                    <div className="max-w-[100%] mx-auto">
                        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-lg text-center md:text-left">
                                <span className="text-[#6366F1] text-sm font-semibold uppercase tracking-wide block mb-4">INTEGRATIONS</span>
                                <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-6">
                                    Unified view of your customers
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    Interpret will integrate directly with any feedback channel. Take advantage of our CSV importer or API.
                                </p>
                                <button className="px-6 py-3 border-2 border-[#7286FF] text-white rounded-full text-sm font-medium transition-colors hover:bg-white hover:text-black">
                                    View all integrations
                                </button>
                            </div>
                            <div className="w-full md:w-auto flex justify-center px-6 md:px-16">
                                {/* <img src="/images/integrations-grid.svg" alt="Integration Partners" className="w-full max-w-[500px] md:max-w-[600px] object-contain" /> */}
                                <Image
                                    src="/images/integrations-grid.svg"
                                    fill
                                    alt="Integration Partners"
                                    className="w-full max-w-[500px] md:max-w-[600px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Integrations;
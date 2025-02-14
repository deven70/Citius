'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Container } from './Container';
import Image from "next/image";


const ServiceHero = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-[url('/images/service-back.svg')] bg-cover bg-bottom bg-no-repeat">
        <Container>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
            <div >
                <h2 className="text-sm uppercase text-[#ffffff] tracking-wide mb-2">SERVICES</h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-[700] text-[#ffffff] mb-6">Enterprise Automation</h1>
                <p className="text-[#ffffff] max-w-2xl font-[DM Sans]">
                    Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns. Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.
                </p>
            </div>

            <div>
                {/* <img src="/images/Placeholder_image.svg" alt="" /> */}
                <Image
                    src="/images/Service-wrapper.svg"
                    alt="Citius Cloud Logo"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </div>

        <div className="trusted-by">
          <p className="text-[#ffffff] mb-8">Trusted by:</p>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="swipp" 
          >
            <SwiperSlide>
              <div className="flex items-center justify-center">
                {/* <img src="/images/Google.svg" alt="Google" className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity" /> */}
                <Image
                    src="/images/Google.svg" 
                    alt="Google" 
                    className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity"
                    width={120}
                    height={40}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                {/* <img src="/images/YouTube.svg" alt="YouTube" className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity" /> */}
                <Image
                    src="/images/YouTube.svg" 
                    alt="YouTube" 
                    className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity"
                    width={120}
                    height={40}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                {/* <img src="/images/Facebook.svg" alt="Facebook" className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity" /> */}
                <Image
                    src="/images/Facebook.svg" 
                    alt="Facebook" 
                    className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity"
                    width={120}
                    height={40} 
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default ServiceHero;
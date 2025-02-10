'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Container } from './Container';
import Image from "next/image";


const ServiceHero = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-white">
        <Container>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
            <div >
                <h2 className="text-sm uppercase text-[#486284] tracking-wide mb-2">SERVICES</h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-[700] text-[#486284] mb-6">Enterprise Automation</h1>
                <p className="text-[#8CA2C0] max-w-2xl font-[DM Sans]">
                    Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns. Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.
                </p>
            </div>

            <div>
                {/* <img src="/images/Placeholder_image.svg" alt="" /> */}
                <Image
                    src="/images/Placeholder_image.svg"
                    alt="Citius Cloud Logo"
                    fill
                />
            </div>
        </div>

        <div className="w-[50%] mt-4">
          <p className="text-[#9CB0C9] mb-8">Trusted by:</p>
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
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="w-[50%] ml-0 mr-auto float-left" 
          >
            <SwiperSlide>
              <div className="flex items-center justify-center">
                {/* <img src="/images/Google.svg" alt="Google" className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity" /> */}
                <Image
                    src="/images/Google.svg" 
                    alt="Google" 
                    className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity"
                    fill
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
                    fill
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
                    fill
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
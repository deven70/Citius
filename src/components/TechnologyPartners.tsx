'use client';
import Image from 'next/image';
import { Container } from './Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const TechnologyPartners = () => {
  const partners = [
    { id: 1, name: 'Rubrik Velocity', logo: '/images/our-technology-1.svg' },
    { id: 2, name: 'Red Hat', logo: '/images/our-technology-2.svg' },
    { id: 3, name: 'Nutanix', logo: '/images/our-technology-3.svg' },
    { id: 4, name: 'Fujitsu', logo: '/images/our-technology-4.svg' },
    { id: 5, name: 'VMware', logo: '/images/our-technology-5.svg' },
    { id: 6, name: 'Veeam', logo: '/images/our-technology-6.svg' },
    { id: 7, name: 'Rubrik Velocity 2', logo: '/images/our-technology-1.svg' },
    { id: 8, name: 'Red Hat 2', logo: '/images/our-technology-2.svg' }
  ];

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 xl:px-[9.25rem] pb-16 pt-10 bg-black">
      <Container>
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="font-manrope font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-center text-white mb-8 md:mb-12">
            Our Technology Partners
          </h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={1000}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 6 },
            }}
            className="technology-partners-swiper"
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="w-36 h-20 sm:w-40 sm:h-24 mx-auto flex items-center justify-center bg-white rounded-lg p-4 transition-transform hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={80}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default TechnologyPartners;

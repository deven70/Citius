'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './CaseStudy.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

interface CaseStudyCardProps {
  title: string;
  description: string;
  readTime: string;
  dotColor: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, readTime, dotColor }) => (
  <div className="bg-[#D9D9D921] p-8 rounded-lg flex flex-col h-full">
    <div className="flex items-center gap-2 mb-4 justify-between">
      <div className={`w-2 h-2 rounded-full ${dotColor}`} />
      <span className="text-[#878C91] text-sm">{readTime} read</span>
    </div>
    <h3 className="text-[#010205] mb-4 font-semibold text-2xl md:text-xl lg:text-lg">{title}</h3>
    <div className="flex justify-between items-center">
        <p className="text-gray-600 mb-6 flex-grow max-w-[75%] line-clamp-3">
            {description}
        </p>
        <button className="w-[4rem] h-[2.5rem] rounded-full bg-white text-black flex items-center justify-center border border-black transition-colors hover:bg-[#010205] hover:text-white font-[800]">
            →
        </button>


    </div>

  </div>
);

const CaseStudy = () => {
  const caseStudies = [
    {
      title: "How a Digital Marketing Agency Can Boost Your Business",
      description: "We are the top digital marketing agency for branding corp. We offer a full range engine ...",
      readTime: "5 min",
      dotColor: "bg-blue-500"
    },
    {
      title: "The Latest Trends and Strategies with a Digital Marketing Agency",
      description: "Working with this digital marketing agency has been a true partnership. They have tak...",
      readTime: "5 min",
      dotColor: "bg-orange-500"
    },
    {
      title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
      description: "What sets this digital marketing agency apart is their commitment to transparency a...",
      readTime: "5 min",
      dotColor: "bg-purple-500"
    },
    {
        title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
        description: "What sets this digital marketing agency apart is their commitment to transparency a...",
        readTime: "5 min",
        dotColor: "bg-red-500"
    },
  ];

  return (
    <section className="w-full pt-20 pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[90%] mx-auto">
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#010205]">
                        Entire Case studies in one carousel on home page for easy access
                    </h2>
                </div>
                <div>
                    <p className="font-medium max-w-2xl text-[#878C91] leading-relaxed">
                        We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
                    </p>
                    <button className="mt-4 px-6 py-2 border border-[#010205] text-[#010205] rounded-full hover:bg-black hover:text-white transition-colors">
                        See more
                    </button>
                </div>
            </div>


          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className={styles['case-study-swiper']}
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <CaseStudyCard {...study} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
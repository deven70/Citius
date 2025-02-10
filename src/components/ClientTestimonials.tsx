'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Stephanie Powell',
        role: 'VP of Sales',
        company: 'SalesForce',
        image: '/images/client-image.svg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: 5
    },
    {
        id: 2,
        name: 'John Smith',
        role: 'CTO',
        company: 'TechCorp',
        image: '/images/client-image.svg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: 5
    },
];

const ClientTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="w-full pt-12 pb-16 bg-white">
            <div className="container mx-auto">
                <div className="max-w-[80%] mx-auto">
                    <div className="flex flex-col space-y-8">
                        <div className="xs-max:grid xs-max:grid-cols-1 sm:flex sm:justify-between sm:items-start">
                            <div className="flex flex-col space-y-3">
                                <h2 className="text-4xl md:text-4xl font-semibold text-[#6D758F]">
                                    What our clients have to say
                                </h2>
                                <p className="text-[#6D758F] text-[16px]">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit phasellus mollis sit aliquam sit nullam.
                                </p>
                            </div>
                            <div className="flex items-center space-x-2 sm:m-0 mt-4">
                                <button
                                    onClick={prevSlide}
                                    className="p-3 rounded-[8px] bg-[#F8FAFF] border border-[#E1E4ED] hover:bg-[#6D758F] transition-colors focus:outline-none group"
                                    aria-label="Previous testimonial"
                                >
                                    <svg className="w-6 h-6 text-[#4A5568] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-3 rounded-[8px] bg-[#F8FAFF] border border-[#E1E4ED] hover:bg-[#6D758F] transition-colors focus:outline-none group"
                                    aria-label="Next testimonial"
                                >
                                    <svg className="w-6 h-6 text-[#4A5568] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="overflow-hidden">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.id}
                                        className="w-full h-full flex-shrink-0 border-2 border-[#F1F3F7] p-[15px] sm:p-[40px] rounded-[8px]"
                                    >
                                        <div className="grid md:grid-cols-12 gap-8 items-center">
                                            <div className="md:col-span-4">
                                                <div className="aspect-square relative rounded-2xl overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:col-span-8 flex flex-col space-y-6 bg-[#F8FAFF] p-[40px] rounded-[8px]">
                                                <div className="flex">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                                <h3 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[30px] font-extrabold text-[#6D758F]">
                                                    &quot;Revitalized my work approach&quot;
                                                </h3>

                                                <p className="text-[#6D758F] text-[16px] leading-[24px]">
                                                    {testimonial.quote}
                                                </p>
                                                <div className="flex flex-row">
                                                <span className="font-semibold text-[#6D758F] pr-[15px] border-r border-[#B4B9C9]">
                                                        {testimonial.name}
                                                    </span>
                                                    <span className="text-[#6D758F] pl-[15px]">
                                                        {testimonial.role} at {testimonial.company}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
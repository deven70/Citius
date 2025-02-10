'use client';
import React, { useState } from 'react';
import { Container } from './Container';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'The Challenge',
      answer: 'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.'
    },
    {
      question: 'The Solution',
      answer: 'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility.'
    },
    {
      question: 'The Results',
      answer: 'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility.'
    },
    {
      question: 'Conclusion',
      answer: 'Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Section */}
          <div className="lg:w-[40%]">
            <h2 className="text-[2rem] md:text-[2.5rem] font-[700] text-[#000000] leading-tight mb-6">
                {"India's leading NBFC safeguards their RBI License."}
            </h2>
            <p className="text-[#878C91] mb-8 font-dmSans">
              As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-[50px] border border-[#000000] text-[#000000] hover:bg-[#486284] hover:text-white transition-colors duration-300 font-dmSans">
                More Questions
              </button>
              <button className="px-6 py-3 rounded-lg text-white font-dmSans text-[#000000]">
                Contact Us
              </button>
            </div>
          </div>

          <div className="lg:w-[60%]">
            <div>
              {faqData.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b-2 border-[#000000] last:border-b-2"
                >
                  <button
                    className="w-full flex justify-between items-center py-[30px] text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg font-[600] text-[#000000]">
                      {faq.question}
                    </span>
                    <span className="text-[#000000] ml-4">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[#878C91] font-dmSans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
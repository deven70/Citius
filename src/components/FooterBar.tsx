"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container"; // Assuming Container component is in the same directory

export const FooterBar = () => {
    const companyLinks = [
        { name: 'About us', href: '/' },
        { name: 'Partner program', href: '/' },
        { name: 'Career', href: '/' },
        { name: 'Contact us', href: '/' },
        { name: 'Privacy Policy', href: '/' },
    ];

    const resourceLinks = [
        { name: 'Pricing', href: '/' },
        { name: 'Reviews', href: '/' },
        { name: 'Direct Mail Academy', href: '/' },
        { name: 'Success stories', href: '/' },
        { name: 'Terms & conditions', href: '/' },
    ];

    const contactInfo = {
        email: 'support@citiuscloud.com'
    };

    return (
        <footer className="bg-black text-white pt-8 md:pt-[4.875rem] px-4 md:px-6 lg:px-0">
            <Container >
                <div className="lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[3rem]">
                        {/* Logo and About */}
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <Link href="/" className="inline-block">
                                <Image
                                    src="/images/logo.svg"
                                    alt="Citius Cloud Logo"
                                    width={143}
                                    height={55}
                                    className="hover:opacity-90 transition-opacity mb-6 lg:mb-[3.43rem]"
                                />
                            </Link>
                            <p className="text-[#FFF5F1] text-sm font-inter font-[500] max-w-[80%] lg:max-w-full">
                                Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.
                            </p>
                        </div>

                        {/* Company Links */}
                        <div className="md:pl-8 lg:pl-[5rem] font-inter font-[500]">
                            <h3 className="text-lg font-bold mb-4 uppercase font-[700] text-[#FFFFFF] text-[0.81rem] leading-[1.12rem] tracking-[0.09rem]">Company</h3>
                            <ul className="space-y-3 font-[500] text-[#FFFFFF] text-[1rem] leading-[1.87rem] pt-[0.68rem]">
                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href}
                                            className="hover:text-[#3288AE] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resource Links */}
                        <div className="md:pl-8 lg:pl-[5rem] font-inter font-[500]">
                            <h3 className="text-lg font-bold mb-4 uppercase font-[700] text-[#FFFFFF] text-[0.81rem] leading-[1.12rem] tracking-[0.09rem]">Resources</h3>
                            <ul className="space-y-3 font-[500] text-[#FFFFFF] text-[1rem] leading-[1.87rem] pt-[0.68rem]">
                                {resourceLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href}
                                            className="hover:text-[#3288AE] transition-colors text-line-height-30 text-size-16"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="md:pl-8 lg:pl-[0rem] font-inter font-[500]">
                            <h3 className="text-lg font-bold mb-4 uppercase font-[700] text-[#FFFFFF] text-[0.81rem] leading-[1.12rem] tracking-[0.09rem]">Contact</h3>
                            <Link 
                                href={`mailto:${contactInfo.email}`}
                                className="font-inter font-[500] text-[0.93rem] text-[#FFFFFF] leading-[1.12rem] hover:text-[#3288AE] transition-colors flex items-center gap-2"
                            >
                                <Image
                                    src="/images/email-address.svg"
                                    width={24}
                                    height={24}
                                    alt="Email Icon"
                                />
                                {contactInfo.email}
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 lg:mt-[2.56rem] px-0 md:px-8 lg:px-[13.12rem]">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                            {/* Social Links */}
                            <div className="flex items-center space-x-6">
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    <Image
                                        src="/images/linkedin-icon.svg"
                                        width={24}
                                        height={24}
                                        alt="LinkedIn Icon"
                                    />
                                </Link>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    <Image
                                        src="/images/instagram-icon.svg"
                                        width={24}
                                        height={24}
                                        alt="Instagram Icon"
                                    />
                                </Link>
                                
                                <div className="flex items-center space-x-2 text-gray-400 font-[400] text-[#FFF7F7] text-[1.12rem] leading-[1.5rem]">
                                    <Image
                                        src="/images/lang-icon.svg"
                                        width={24}
                                        height={24}
                                        alt="Language Icon"
                                    />
                                    <span>EN</span>
                                </div>
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 font-inter font-[400] text-[#FFF7F7] text-[1rem] leading-[1.5rem]">
                                <Link href="/" className="hover:text-[#3288AE] transition-colors whitespace-nowrap">
                                    Terms of Service
                                </Link>
                                <Link href="/" className="hover:text-[#3288AE] transition-colors whitespace-nowrap">
                                    Privacy Policy
                                </Link>
                                <Link href="/" className="hover:text-[#3288AE] transition-colors whitespace-nowrap">
                                    Manage Cookies
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 lg:mt-[1.62rem] pt-8 lg:pt-[5.25rem] pb-8 lg:pb-[3.06rem] font-inter text-center font-[500] text-[0.87rem] text-[#FFF5F1] leading-[1.37rem] border-t border-[#9B99AF]-800">
                        2022 PostPilot, Inc. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default FooterBar;
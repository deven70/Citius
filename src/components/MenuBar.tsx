"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from './Container';

export const MenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const navigation = [
        { 
            name: "Product",
            submenu: [
                "Product 1",
                "Product 2" 
            ]
        },
        { 
            name: "Services",
            submenu: [
                "Services 1",
                "Services 2",
            ]
        },
        "Company",
        "Aws",
        "Career",
    ];
    
    return (
        <div key={"menu-bar"} className="w-full bg-black relative z-50">
            <div className="w-full bg-black sticky top-0 z-50 shadow-md px-4 md:px-6 lg:px-8">
                <Container>
                    <nav className="lg:px-8 relative flex flex-wrap items-center justify-between py-4">
                        {/* Logo  */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.svg"
                                width="143"
                                alt="Logo"
                                height="55"
                                className="hover:opacity-90 transition-opacity"
                            />
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                                setActiveSubmenu(null); // Reset submenu when toggling main menu
                            }}
                            className="lg:hidden inline-flex items-center p-2 text-white hover:text-gray-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        {/* Desktop Navigation */}
                        <div 
                            className={`
                                fixed lg:relative top-[4.5rem] lg:top-0 left-0 h-screen lg:h-auto w-[18.75rem] lg:w-auto 
                                bg-black lg:bg-transparent transform transition-transform duration-300 ease-in-out
                                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
                                lg:translate-x-0 lg:flex lg:items-center
                                overflow-y-auto lg:overflow-visible
                                border-r border-gray-800 lg:border-none
                            `}
                        >
                            <ul className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-end flex-1 pt-6 list-none lg:pt-0 lg:space-x-4 px-4 lg:px-0">
                                {navigation.map((item, index) => (
                                    <li className="nav__item relative group w-full lg:w-auto" key={index}>
                                        {typeof item === 'string' ? (
                                            <Link 
                                                href="/" 
                                                onClick={() => setActiveItem(index)}
                                                className={`
                                                    inline-block px-4 py-2 w-full text-left lg:text-center font-grotesk 
                                                    font-bold text-[0.875rem] leading-[0.825rem] tracking-[0.081rem] text-white 
                                                    uppercase transition-colors rounded-md
                                                    ${activeItem === index ? 'bg-[#3288AE]' : 'hover:text-gray-300'}
                                                `}
                                            >
                                                {item}
                                            </Link>
                                        ) : (
                                            <>
                                                <div className="relative">
                                                    <button
                                                        onClick={() => {
                                                            setActiveSubmenu(activeSubmenu === index ? null : index);
                                                            setActiveItem(index);
                                                        }}
                                                        className={`
                                                            inline-flex items-center justify-between lg:justify-center w-full 
                                                            px-4 py-2 font-grotesk font-bold text-[0.875rem] leading-[0.825rem] 
                                                            tracking-[0.081rem] text-white uppercase transition-colors rounded-md
                                                            ${activeItem === index ? 'bg-[#3288AE]' : 'hover:text-gray-300'}
                                                        `}
                                                    >
                                                        {item.name}
                                                        <svg 
                                                            className={`ml-1 w-4 h-4 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''} lg:group-hover:rotate-180`}
                                                            fill="none" 
                                                            stroke="currentColor" 
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </button>
                                                    {/* Submenu */}
                                                    <div 
                                                        className={`
                                                            lg:absolute lg:left-0 lg:hidden lg:group-hover:block lg:pt-[1.2rem] lg:w-[15.625rem]
                                                            ${activeSubmenu === index ? 'block' : 'hidden'}
                                                            w-full bg-black lg:bg-transparent
                                                        `}
                                                    >
                                                        <div className="bg-black shadow-lg rounded-lg py-2">
                                                            {item.submenu.map((subItem, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href="/"
                                                                    className="block px-4 py-2 text-[0.875rem] text-white hover:bg-[#3288AE] font-grotesk font-bold tracking-[0.081rem] uppercase text-left rounded-md transition-colors"
                                                                >
                                                                    {subItem}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/"
                            className="hidden lg:inline-block w-[11.625rem] h-[2.688rem] bg-gradient-to-r from-[#3288AE] via-[#3288AE] to-[#FDD1B1] rounded-[1.25rem] text-white font-bold hover:opacity-90 transition-opacity uppercase font-grotesk text-[1rem] leading-[1.7rem] tracking-[0.081rem] text-center p-2"
                        >
                            Infrabot Demo
                        </Link>
                    </nav>
                </Container>
            </div>
        </div>
    );
};

export default MenuBar;
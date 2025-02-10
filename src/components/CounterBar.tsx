'use client';
import { useState, useEffect, useRef } from 'react';
import { Container } from './Container';
import 'swiper/css';
import 'swiper/css/autoplay';

const stats = [
    { icon: "fas fa-check-circle", value: 500, label: "Successful projects" },
    { icon: "fas fa-handshake", value: 12, label: "OME Partnership" },
    { icon: "fas fa-award", value: 5, label: "Years of Experience" },
    { icon: "fas fa-globe", value: 12, label: "Countries Covered" },
];

const Counter = ({ endValue, startCounting }: { endValue: number; startCounting: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

        let start = 0;
        const duration = 2000; // Total animation time (2 seconds)
        const increment = endValue / (duration / 16); // Adjust for smooth animation

        const counter = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                setCount(endValue);
                clearInterval(counter);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(counter);
    }, [startCounting, endValue]);

    return <span>{count}+</span>;
};

const CounterBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.5 } // 50% of the section should be visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="w-full bg-white">
            <Container>
                <section ref={sectionRef} className="stats pt-[106px] pb-[106px]">
                    <div className="stats-header">
                        <h2>Choose us to be your technology partner and let us do the heavy lifting while you focus on your core business.</h2>
                    </div>
                    <div className="stats-container">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-icon">
                                    <i className={stat.icon}></i>
                                </div>
                                <div className="stat-number">
                                    <Counter endValue={stat.value} startCounting={isVisible} />
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </section>
    );
};

export default CounterBar;

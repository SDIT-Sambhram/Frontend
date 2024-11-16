import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Spotlight from '../../Components/Spotlights/Spotlights';
import TicketCards from '../../Components/TicketCards/TicketCards';

const Home = () => {
    const headerRef = useRef(null);
    const spotlightRef = useRef(null);
    const ticketsRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const lastScrollPosition = useRef(0);

    // Handle animations
    useEffect(() => {
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('animate-end');
                    requestAnimationFrame(() => {
                        entry.target.classList.add('animate');
                    });
                } else {
                    const element = entry.target;
                    if (element.classList.contains('animate')) {
                        element.classList.add('animate-end');
                        element.classList.remove('animate');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '-10%',
            threshold: 0.2
        });

        const elements = [headerRef.current, spotlightRef.current, ticketsRef.current];
        elements.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    // Handle scroll-triggered navigation
    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling) return;

            const currentScrollPosition = window.scrollY;
            const headerSection = headerRef.current;
            const spotlightSection = spotlightRef.current;
            
            if (!headerSection || !spotlightSection) return;

            const headerRect = headerSection.getBoundingClientRect();
            const triggerPoint = headerRect.height * 0.2; // Trigger at 20% scroll of header

            // Check if we're scrolling down in the header section and passed the trigger point
            if (currentScrollPosition > lastScrollPosition.current && 
                headerRect.top < -triggerPoint && 
                headerRect.bottom > 0) {
                
                setIsScrolling(true);
                spotlightSection.scrollIntoView({ behavior: 'smooth' });

                // Reset scrolling state after animation
                setTimeout(() => {
                    setIsScrolling(false);
                }, 1000);
            }

            lastScrollPosition.current = currentScrollPosition;
        };

        // Throttle scroll handler
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [isScrolling]);

    return (
        <div className="home">
            <div ref={headerRef} className="animated-component header-container">
                <Header/>
            </div>
            <div ref={spotlightRef} className="animated-component spotlight-container">
                <Spotlight/>
            </div>
            <div ref={ticketsRef} className="animated-component tickets-container">
                <TicketCards/>
            </div>
        </div>
    );
};

export default Home;
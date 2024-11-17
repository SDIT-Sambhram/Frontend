import { useState, useEffect, useRef } from 'react';
import './Header.css';
import Countdown from '../Countdown/Countdown.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const lastScrollY = useRef(0);

    const scrollToSpotlight = () => {
        setIsAutoScrolling(true);
        window.scrollTo({
            top: 800,
            behavior: 'smooth',
        });

        // Reset auto-scrolling after 1 second (smooth scroll time)
        setTimeout(() => {
            setIsAutoScrolling(false);
        }, 1000); 
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isAutoScrolling) return; // Prevent handling while auto-scrolling

            const currentScrollY = window.scrollY;

            // Check if scrolling down and within the header section
            if (currentScrollY > 20 && currentScrollY < 700 && currentScrollY > lastScrollY.current) {
                scrollToSpotlight();
            }

            // Update last scroll position
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isAutoScrolling]);

    return (
        <>
            <div className="invite-container">
                <video
                    className="head-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source
                        src="https://sambhram-assets.s3.ap-south-1.amazonaws.com/sambhram-header.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://sambhram-assets.s3.ap-south-1.amazonaws.com/sambhram-header.webm"
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>


                <div className="header-overlay"></div>

                <div className={`content`}>
                    <div className="main-contents">
                        <h1 className="title-sd">Shree Devi</h1>
                        <h1 className="title">SAMBHRAM&apos;24</h1>
                        <p className="description">
                            National Level Technical & Cultural Fest.
                        </p>
                        <p className="date">On 6th & 7th December 2024</p>

                        <div className='btn-width'>
                            <Link to='/about'><button className='explore-btn'>Explore</button></Link>

                            <Link to='/events'><button className='glowing-btn'>Register</button></Link>
                        </div>

                    </div>

                    <div className="middle">
                        <Countdown targetDate="2024-12-06" />
                    </div>
                    <div onClick={scrollToSpotlight} className="down-button">
                        <i
                            className="fa-solid fa-angle-down fa-bounce fa-2xl"
                            style={{ color: '#ffffff' }}
                        ></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

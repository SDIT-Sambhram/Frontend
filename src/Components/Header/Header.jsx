import { useState } from 'react';
import Preloader from '../Preloader/Preloader.jsx'
import './Header.css';
import Countdown from '../Countdown/Countdown.jsx';
import "../Countdown/Countdown.css"

const Header = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Handler to mark the video as loaded
    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    return (
        <>
            <div className="invite-container">
                {/* Loading Spinner */}
                {!isVideoLoaded && (
                    <div className="loading-overlay">
                        <Preloader />
                    </div>
                )}

                {/* Video that will play */}
                <video
                    className='head-video'
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onLoadedData={handleVideoLoad}
                >
                    <source src="https://sambhram-assets.s3.ap-south-1.amazonaws.com/header-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>

                <div className="header-overlay"></div>

                {/* Content that appears immediately after the video is ready */}
                <div className={`content ${isVideoLoaded ? 'fade-in' : ''}`}>
                    <h1 className="title-sd">Shree Devi</h1>
                    <h1 className="title">SAMBHRAM&apos;24</h1>
                    <p className="description">
                        We cordially invite you to our national level college fest of 2024.
                    </p>
                    <p className="date">On Dec 06 & 07</p>
                    <button className="btn-white">
                        Discover
                    </button>

                    {/* Countdown Component */}
                    <div className="middle">
                        {/* <h1 className="label">Sambhram</h1> */}
                        <Countdown targetDate="2024-12-06" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

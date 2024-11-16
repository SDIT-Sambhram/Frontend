import React, { useRef } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Spotlight from '../../Components/Spotlights/Spotlights';
import TicketCards from '../../Components/TicketCards/TicketCards';

const Home = () => {
    const headerRef = useRef(null);
    const spotlightRef = useRef(null);
    const ticketsRef = useRef(null);

    return (
        <div className="home">
            <div ref={headerRef} className="header-container">
                <Header />
            </div>
            <div ref={spotlightRef} className="spotlight-container">
                <Spotlight />
            </div>
            <div ref={ticketsRef} className="tickets-container">
                <TicketCards />
            </div>
        </div>
    );
};

export default Home;

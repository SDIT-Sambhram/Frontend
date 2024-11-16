import { useRef } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Spotlight from '../../Components/Spotlights/Spotlights';
import TicketCards from '../../Components/TicketCards/TicketCards';
import '../../Components/MainAttractions/MainAttractions.jsx'
import MainAttractions from '../../Components/MainAttractions/MainAttractions.jsx';

const Home = () => {
    const headerRef = useRef(null);
    const spotlightRef = useRef(null);
    const ticketsRef = useRef(null);
    const attractionRef = useRef(null);

    return (
        <div className="home">
            <div ref={headerRef} className="header-container">
                <Header />
            </div>
            <div ref={attractionRef} className="attraction-container">
                <MainAttractions />
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

import './EventCard.css';
import { useContext, useState } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';

const EventCard = () => {
    const { eventType, setPopUpStatus, selectEvent, selectedEvent, eventDatas } = useContext(StoreContext);
    const [flippedCard, setFlippedCard] = useState(null);

    const toggleFlip = (id) => setFlippedCard(prevId => (prevId === id ? null : id));

    return (
        <>
            {eventDatas
                .filter(event => event.eventType === eventType)
                .map(event => (
                    <div key={event._id} className="card-container">
                        <div
                            className={`event-card ${flippedCard === event._id ? 'flipped' : ''}`}
                            onClick={() => toggleFlip(event._id)}
                        >
                            <div className="front">
                                <p>{event.eventName}</p>
                                <button onClick={(e) => { selectEvent(event._id); e.stopPropagation() }} className={`button-event ${selectedEvent.includes(event._id) ? 'clicked' : ''}`}>
                                            {selectedEvent.includes(event._id) ? 'EVENT ADDED' : 'ADD EVENT'}
                                        </button>
                                
                            </div>
                            <div className="back">
                                <div className="back-div">
                                
                                    <div className="card-button-back">
                                        <i onClick={(e) => {
                                            e.stopPropagation();
                                            setPopUpStatus(event);
                                        }}
                                            className="fa-solid fa-circle-question fa-lg " style={{ color: '#FFFFFF' }}></i>

                                    </div>
                                    {/* <div className="card-button2-back">
                                        <button onClick={(e) => { selectEvent(event._id); e.stopPropagation() }} className={`button-event ${selectedEvent.includes(event._id) ? 'clicked' : ''}`}>
                                            {selectedEvent.includes(event._id) ? 'EVENT ADDED' : 'ADD EVENT'}
                                        </button>
                                    </div> */}
                                    <div className="event-back-dec">
                                    <p>{event.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum perferendis repellendus similique obcaecati ad omnis maxime </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default EventCard;

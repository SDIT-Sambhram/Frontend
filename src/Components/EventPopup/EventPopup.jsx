import './EventPopup.css'
import { StoreContext } from '../../Contexts/StoreContext';
import React, { useContext } from 'react';

const EventPopup = () => {
    const { setPopUpStatus, popUpStatus, selectEvent, selectedEvent } = useContext(StoreContext);

    return (
        <div onClick={() => setPopUpStatus('')} className={`event-popup-container ${popUpStatus ? 'show' : ''}`}>
            <div className="event-popup" onClick={(e) => e.stopPropagation()}>
                <div className="close-icon">
                    <i onClick={() => setPopUpStatus('')} className="fa-solid fa-xmark" style={{ color: '#610000' }}></i>
                </div>
                <div className="event-content">
                    <div className='pop-main'>
                        {popUpStatus && typeof popUpStatus === 'object' ? (
                            <>
                            
                                <h3 className="event-name">{popUpStatus.eventName}</h3>
                                <p className="event-desc">{popUpStatus.description}</p>
                                <h4>Time & Date</h4>
                                <p className="event-desc">{popUpStatus.date}</p>
                                <div className="event-time">{popUpStatus.time}</div>
                                <div className="event-coordinater">{popUpStatus.studentCoordinator}</div>
                                <div className="event-coordinater-number">{popUpStatus.studentCoordinatorContact}</div>
        
        <div className="rule-box">
        <h3>Rules</h3>
        <div className="rules">
        {popUpStatus.rules && popUpStatus.rules.map((rule, index) => (
                                    <p key={index}># {rule}</p>
                                ))}
        </div>
                                
            </div> 

                                {selectedEvent.includes(popUpStatus._id) ? (
                                    <button className='event-selected-button' onClick={() => selectEvent(popUpStatus._id)}>Remove</button>
                                ) : (
                                    <button className='event-select-button' onClick={() => selectEvent(popUpStatus._id)}>Select</button>
                                )}
                            </>
                        ) : (
                            <p>No event selected.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventPopup;

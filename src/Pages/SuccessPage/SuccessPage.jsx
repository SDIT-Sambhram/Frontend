import './SuccessPage.css';
import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import Save from '../../Components/Save/Save';

const SuccessPage = () => {
    const location = useLocation();
    let { participantId, orderId } = location.state || {};
    
    const [isTicketOverlayVisible, setIsTicketOverlayVisible] = useState(false);
    console.log(orderId);
    
    let imgSrc = `https://sambhram-tickets-bucket.s3.ap-south-1.amazonaws.com/tickets/${participantId}/${orderId}.jpg`

    const handleViewTicketClick = () => { 
        setIsTicketOverlayVisible(true);
    };
    const handleCloseClick = () => {
        setIsTicketOverlayVisible(false);
    };

    return (
        <>
            <div className="success-page">  
                {isTicketOverlayVisible && (
                    <div className="ticket-overlay">
                        <div className="ticket">
                            <img src={imgSrc} alt="Ticket" />
                            <div className="ticket-button-flex">
                                <i onClick={handleCloseClick}
                                    className="fa-solid fa-xmark"
                                    style={{ color: '#ff3838', cursor: 'pointer' }}>
                                </i>
                            </div>

                        </div>
                        <div className="save-flex">
                            <div className="download-div">
                                
                            <a href={imgSrc} download={"ticket_sambhram"}>
                                <Save />
                            </a>
                            <p>Click to download</p>
                            </div>
                            

                        </div>
                    </div>
                )}
                <div className="success-component">
                {/* <img className='success-bg-img' src="bg-Special-phone.jpg" alt="" /> */}
                    <div className="flying-lantern">
                        <img src="https://oriental-decor.com/wp-content/uploads/2023/10/2545-w-900x900.png" alt="Flying Lantern" />
                    </div> 
                    <div className="flying-lantern">
                        <img src="https://oriental-decor.com/wp-content/uploads/2023/10/2545-w-900x900.png" alt="Flying Lantern" />
                    </div>
                    <div className="success-up">
                        <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="Checkmark" />
                        <h2>Registered successfully</h2>
                        <p>Click the Button to View and Download the Ticket</p>
                    </div>
                    <div className="success-down">
                       
                        <div className="success-btn-container">
                            <a className="button type--C" onClick={handleViewTicketClick}>
                                <div className="button__line"></div>
                                <div className="button__line"></div>
                                <span className="button__text">View Ticket</span>
                                <div className="button__drow1"></div>
                                <div className="button__drow2"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuccessPage;

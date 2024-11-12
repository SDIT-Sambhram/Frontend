import './SuccessPage.css';
import React, { useState } from 'react';
import Save from '../../Components/Save/Save';

const SuccessPage = () => {
    // State to control the visibility of the ticket overlay
    const [isTicketOverlayVisible, setIsTicketOverlayVisible] = useState(false);

    // Show overlay when "View Ticket" is clicked
    const handleViewTicketClick = () => {
        setIsTicketOverlayVisible(true);
    };

    // Hide overlay when "Close" is clicked
    const handleCloseClick = () => {
        setIsTicketOverlayVisible(false);
    };

    return (
        <>
            <div className="success-page">

                {/* Conditionally render the ticket overlay based on state */}
                {isTicketOverlayVisible && (
                    <div className="ticket-overlay">
                        <div className="ticket">
                            <img src="4.png" alt="" />
                            <div className="ticket-button-flex">
                                <i onClick={handleCloseClick}
                                    className="fa-solid fa-xmark"
                                    style={{ color: '#ff3838', cursor: 'pointer' }}>
                                </i>
                            </div>

                        </div>
                        <div className="save-flex">
                            <div className="download-div">
                                
                            <a href="4.png" download={"ticket_sambhram"}>
                                <Save />
                            </a>
                            <p>Click to download</p>
                            </div>
                            

                        </div>
                    </div>
                )}
                <div className="success-component">
                    <div className="flying-lantern">
                        <img src="https://oriental-decor.com/wp-content/uploads/2023/10/2545-w-900x900.png" alt="Flying Lantern" />
                    </div>
                    <div className="flying-lantern">
                        <img src="https://oriental-decor.com/wp-content/uploads/2023/10/2545-w-900x900.png" alt="Flying Lantern" />
                    </div>
                    <div className="success-up">
                        <img src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="Checkmark" />
                        <h2>Registered successfully</h2>
                        <p>Your ticket will send to your mobile number shortly.</p>
                    </div>
                    <div className="success-down">
                        <div className="container">
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

import './VerifyTicket.css';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { StoreContext } from '../../Contexts/StoreContext';

const VerifyTicket = () => {
    const { eventDatas } = useContext(StoreContext);
    const [verificationMessage, setVerificationMessage] = useState('Verifying...');
    const [isError, setIsError] = useState(false);
    const [items, setItems] = useState([]);
    const [participantData, setParticipantData] = useState(null);

    const location = useLocation(); // Get the current location object
    const searchParams = new URLSearchParams(location.search); // Parse query parameters
    const id = searchParams.get('id'); // Get the `id` from query parameters

    useEffect(() => {
        const verifyTicket = async () => {
            if (!id) {
                setVerificationMessage("No Participant ID provided");
                setIsError(true);
                return;
            }

            try {
                const verifyResponse = await axios.post(
                    "https://o83h8nltlc.execute-api.ap-south-1.amazonaws.com/api/v1/auth/verify/ticket",
                    { id } // Pass the fetched ID
                );

                const participant = verifyResponse.data;
                setParticipantData(participant);

                if (!participant || !participant.registrations) {
                    console.error('No participant or registration data');
                    return;
                }

                // Get registration IDs
                const registeredEventIds = participant.registrations.map(reg => reg.event_id);
                console.log('Registered Event IDs:', registeredEventIds);

                // Filter events
                const filteredEvents = eventDatas.filter(event => 
                    registeredEventIds.includes(event._id)
                );
                console.log('Filtered Events:', filteredEvents);

                // Set the filtered events to state
                setItems(filteredEvents);

                // Set verification message
                if (verifyResponse.data) {
                    setVerificationMessage("PARTICIPANT IS VALID");
                    setIsError(false);
                } else {
                    setVerificationMessage("Invalid Participant");
                    setIsError(true);
                }
            } catch (error) {
                console.error("Verification Error:", error);
                setIsError(true);
                setVerificationMessage("Verification Failed");
            }
        };

        if (eventDatas && eventDatas.length > 0) {
            verifyTicket();
        }
    }, [id, eventDatas]); // Depend on `id` and `eventDatas`

    return (
        <div className="verify-ticket">
            <div className="verification-container">
                <div className="participant-details">
                    <h3>Participant Details</h3>
                    {participantData && (
                        <>
                            <div className="participant-detail">
                                <h6>Id</h6>
                                <p>{participantData._id || 'N/A'}</p>
                            </div>
                            <div className="participant-detail">
                                <h6>Name</h6>
                                <p>{participantData.name || 'N/A'}</p>
                            </div>
                            <div className="participant-detail">
                                <h6>College</h6>
                                <p>{participantData.college || 'N/A'}</p>
                            </div>
                            <div className="participant-detail">
                                <h6>Phone</h6>
                                <p>{participantData.phone || 'N/A'}</p>
                            </div>
                            <div className="participant-detail">
                                <h6>USN</h6>
                                <p>{participantData.usn || 'N/A'}</p>
                            </div>
                        </>
                    )}
                </div>

                <div className="participated-events">
                    <h4>EVENTS REGISTERED</h4>
                    <div className="events-list">
                        {items && items.length > 0 ? (
                            items.map(event => (
                                <div className="participated-event" key={event._id}>
                                    <ul>
                                        <li><p>{event.eventName}</p></li>
                                    </ul>
                                    <p>
                                        {event.date}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p>No events found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyTicket;

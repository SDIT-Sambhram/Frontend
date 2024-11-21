import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './ViewTicket.css';
import { StoreContext } from '../../Contexts/StoreContext';
import Preloader from '../../Components/Preloader/Preloader';
import { toast } from 'react-toastify';

const ViewTicket = () => {
    const { stPartId } = useContext(StoreContext);
    const [participant, setParticipant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTicketDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                if (!stPartId) {
                    throw new Error('No participant ID found');
                }
                console.log("Participant ID:", stPartId);

                const response = await axios.post(
                    "https://o83h8nltlc.execute-api.ap-south-1.amazonaws.com/api/v1/auth/verify/ticket",
                    { id: stPartId }
                );

                let registrations = response.data.registrations || [];

                // Remove duplicate tickets
                const uniqueParticipant = Array.from(
                    new Map(registrations.map(event => [event.ticket_url, event])).values()
                );
                setParticipant(uniqueParticipant);

                console.log("Ticket details:", response.data);
                console.log("Unique Registrations:", uniqueParticipant);

            } catch (err) {
                console.error("Error fetching ticket:", err);
                const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch ticket details';
                setError(errorMessage);
                toast.error(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        if (stPartId) {
            fetchTicketDetails();
        }
    }, [stPartId]);

    const handleImageError = (e) => {
        e.target.src = '/path/to/placeholder/image.png'; // Replace with your placeholder
        e.target.onerror = null;
    };

    if (loading) {
        return (
            <div className="spinner-overlay">
                <Preloader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p className="error-message">{error}</p>
            </div>
        );
    }

    return (
        <div className="view-ticket-container">
            {participant && participant.length > 0 ? (
                <div className="view-tickets">
                    {participant.map((event, index) => (
                        <div 
                            key={event.ticket_url || index} 
                            className="ticket ticket-top"
                        >
                            <img 
                                src={event.ticket_url} 
                                alt={`Ticket for event ${event.event_id}`} 
                                onError={handleImageError}
                                className="ticket-image"
                            />
                            {event.event_name && (
                                <div className="ticket-details">
                                    <p>{event.event_name}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-tickets">
                    <p>No tickets found for this participant.</p>
                </div>
            )}
        </div>
    );
};

export default ViewTicket;
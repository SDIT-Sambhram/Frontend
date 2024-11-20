import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './ViewTicket.css';
import { StoreContext } from '../../Contexts/StoreContext';
import Preloader from '../../Components/Preloader/Preloader';
import { toast } from 'react-toastify';

const ViewTicket = () => {
    const { stPartId } = useContext(StoreContext);
    const [participant, setParticipant] = useState();
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
                console.log("id part:", stPartId);

                const response = await axios.post(
                    "https://o83h8nltlc.execute-api.ap-south-1.amazonaws.com/api/v1/auth/verify/ticket",
                    { id: stPartId }
                );

                let registrations = response.data.registrations;

                // Filter unique ticket URLs
                const uniqueParticipant = Array.from(
                    new Map(registrations.map(event => [event.ticket_url, event])).values()
                );

                // Set unique participants to the state
                setParticipant(uniqueParticipant);

                console.log("Ticket details:", response.data);
                console.log("Registration details:", registrations);
                console.log("Registration details filtered:", uniqueParticipant);

            } catch (err) {
                console.error("Error fetching ticket:", err);
                setError(err.response?.data?.message || err.message || 'Failed to fetch ticket details');
                toast.error(err.response?.data?.message || 'Failed to fetch ticket details');
            } finally {
                setLoading(false);
            }
        };

        fetchTicketDetails();
    }, [stPartId]);


    return (
        <div className="view-ticket-container">
            {loading ? <div className="spinner-overlay">
                <Preloader />
            </div> : <div className="view-tickets">
                {participant.map((event, index) => (
                    <div key={index} className="ticket ticket-top">
                        <img src={event.ticket_url} alt={`Ticket for event ${event.event_id}`} />
                        {/* Display other relevant ticket details */}
                    </div>
                ))}
            </div>}

        </div>
    );
};

export default ViewTicket;

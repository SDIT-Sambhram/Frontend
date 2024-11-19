import { createContext, useState, useEffect } from 'react';
import { eventsData } from '../sampleDB';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Constants
const url = process.env.REACT_APP_URL;
const razorpayKey = process.env.REACT_APP_RAZORPAY_ID;

// Create context
export const StoreContext = createContext();

// Context Provider Component
export const ContextProvider = ({ children }) => {
    // State management
    const [eventType, setEventType] = useState("Cultural");
    const [popUpStatus, setPopUpStatus] = useState('');
    const [eventDatas, setEventDatas] = useState([]);
    const [amount, setAmount] = useState(0);
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Form data state
    const [data, setData] = useState({
        name: "",
        usn: "",
        college: "",
        mobile: "",
        Othercollege: ""
    });

    // Selected events state with localStorage persistence
    const [selectedEvent, setSelectedEvent] = useState(() => {
        const savedEvents = localStorage.getItem("selectedEvent");
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    // State for tracking payment success
    const [paymentStatus, setPaymentStatus] = useState({
        participantId: null,
        orderId: null,
        isSuccess: false
    });

    // Effect for persisting selected events
    useEffect(() => {
        localStorage.setItem("selectedEvent", JSON.stringify(selectedEvent));
    }, [selectedEvent]);

    // Effect for persisting event data
    useEffect(() => {
        localStorage.setItem("eventDatas", JSON.stringify(eventDatas));
    }, [eventDatas]);

    // Effect for initial data load
    useEffect(() => {
        loadEvents();
    }, []);

    // Functions
    const loadEvents = async () => {
        try {
            // Try loading from localStorage first
            const cachedData = localStorage.getItem("eventDatas");
            if (cachedData) {
                setEventDatas(JSON.parse(cachedData));
            }

            // Fetch fresh data
            await fetchEvents();
        } catch (error) {
            console.error("Error loading events:", error);
            toast.error("Failed to load events");
        }
    };

    const fetchEvents = async () => {
        try {
            const response = await axios.get(`${url}/api/v1/auth/events`);
            const newEventDatas = response.data;

            if (Array.isArray(newEventDatas)) {
                setEventDatas(newEventDatas);
                localStorage.setItem("eventDatas", JSON.stringify(newEventDatas));
                console.log("Events fetched successfully:", newEventDatas.length);
            } else {
                throw new Error("Invalid event data format");
            }
        } catch (error) {
            console.error("Error fetching events:", error);
            throw error;
        }
    };

    const selectEvent = (id) => {
        if (selectedEvent.includes(id)) {
            setSelectedEvent(prev => prev.filter(eventId => eventId !== id));
            toast.error("Event removed");
        } else {
            if (selectedEvent.length >= 4) {
                toast.warn("Maximum 4 events can be selected");
                return;
            }
            setSelectedEvent(prev => [...prev, id]);
            toast.success("Event added");
        }
    };

    const validatePaymentData = () => {
        const requiredFields = ['name', 'usn', 'college', 'mobile'];
        const missingFields = requiredFields.filter(field => !data[field]);
        
        if (missingFields.length > 0) {
            throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
        }

        if (!selectedEvent.length) {
            throw new Error('Please select at least one event');
        }

        if (!amount || amount <= 0) {
            throw new Error('Invalid amount');
        }
    };

    const preparePaymentData = () => {
        return {
            name: data.name,
            usn: data.usn,
            college: data.college,
            phone: data.mobile,
            amount: amount,
            registrations: selectedEvent.map(id => ({ event_id: id }))
        };
    };

    const sendDatatoBackend = async () => {
        try {
            validatePaymentData();
            const paymentData = preparePaymentData();
            
            setLoading(true);
            const response = await axios.post(`${url}/api/v1/auth/payment`, paymentData);
            
            if (!response.data?.orderId) {
                throw new Error('Invalid response from payment server');
            }

            return {
                participantId: response.data.participantId,
                orderId: response.data.orderId,
                amount: response.data.amount,
                currency: response.data.currency || 'INR'
            };
        } catch (error) {
            console.error("Backend request failed:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handlePaymentSuccess = (response, paymentDetails) => {
        console.log("Payment successful", response);
        setPaymentStatus({
            participantId: paymentDetails.participantId,
            orderId: paymentDetails.orderId,
            isSuccess: true
        });

        setSelectedEvent([]);
        navigate('/success', {
            state: {
                participantId: paymentDetails.participantId,
                orderId: paymentDetails.orderId
            }
        });n
    };

    const handlePaymentError = (error) => {
        console.error("Payment failed:", error);
        toast.error(error.error?.response.data.message || 'Payment failed');
        setPaymentStatus(prev => ({ ...prev, isSuccess: false }));
    };

    const initializeRazorpay = (paymentDetails) => {
        return {
            key: razorpayKey,
            amount: paymentDetails.amount,
            currency: paymentDetails.currency,
            name: "SHREE DEVI SAMBHRAM",
            description: "National Level Technical and Cultural Fest",
            image: "https://storage.googleapis.com/educrib/colleges/uploads/f7a1791dd41f3fa5e5e4f8a6faea2467ShreeDeviCollegeOfPhysiotherapy_Fd.jpg",
            order_id: paymentDetails.orderId,
            handler: (response) => handlePaymentSuccess(response, paymentDetails),
            prefill: {
                name: data.name,
                contact: data.mobile
            },
            notes: {
                address: "Kenjar"
            },
            theme: {
                color: "#ff001b"
            },
            modal: {
                ondismiss: () => toast.info("Payment cancelled")
            }
        };
    };

    const payNow = async () => {
        try {
            if (!window.Razorpay) {
                throw new Error('Razorpay SDK not loaded');
            }

            if (!razorpayKey) {
                throw new Error('Razorpay key not configured');
            }

            const paymentDetails = await sendDatatoBackend();
            const options = initializeRazorpay(paymentDetails);
            
            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', handlePaymentError);
            rzp.open();
            return true
             
        } catch (error) {
            console.error("Payment initialization failed:", error);
            toast.error(error.response.data.message || 'Failed to initialize payment');
            return false
        }
    };

    // Reset functions
    const resetForm = () => {
        setData({
            name: "",
            usn: "",
            college: "",
            mobile: "",
            Othercollege: ""
        });
        setStep(1);
        setSelectedEvent([]);
        setAmount(0);
    };

    // Context value
    const contextValue = {
        eventType,
        setEventType,
        popUpStatus,
        setPopUpStatus,
        selectedEvent,
        setSelectedEvent,
        selectEvent,
        eventDatas,
        eventsData,
        setData,
        data,
        setAmount,
        amount,
        sendDatatoBackend,
        payNow,
        step,
        setStep,
        loading,
        paymentStatus,
        resetForm
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default ContextProvider;
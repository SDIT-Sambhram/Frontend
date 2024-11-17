import { createContext, useState, useEffect, } from 'react';
import { eventsData } from '../sampleDB';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const url = process.env.REACT_APP_URL;

export const StoreContext = createContext();
export const ContextProvider = ({ children }) => {
    const [eventType, setEventType] = useState("Cultural");
    const [popUpStatus, setPopUpStatus] = useState('');
    const [eventDatas, setEventDatas] = useState([]);
    const [amount, setAmount] = useState();
    const [step, setStep] = useState(1);
   
    const [data, setData] = useState({
        name: "",
        usn: "",
        college: "",
        mobile: "",
    });
    const [selectedEvent, setSelectedEvent] = useState(() => {
        const savedEvents = localStorage.getItem("selectedEvent");
        return savedEvents ? JSON.parse(savedEvents) : [];
    });

    let successData= {
        participantId:"no participant id",
        orderId:"no id"
    };

    useEffect(() => {
        localStorage.setItem("selectedEvent", JSON.stringify(selectedEvent));
    }, [selectedEvent]);

    useEffect(() => {
        localStorage.setItem("eventDatas", JSON.stringify(eventDatas));
    }, [eventDatas])
    const navigate = useNavigate();

    useEffect(() => {
        const loadEvents = async () => {
            // Try to load from localStorage first for immediate display
            const cachedData = localStorage.getItem("eventDatas");
            if (cachedData) {
                setEventDatas(JSON.parse(cachedData));
            }

            // Then fetch fresh data from server
            await fetchData();
        };

        loadEvents();
    }, []);
    
    const selectEvent = (id) => {
        if (selectedEvent.includes(id)) {
            setSelectedEvent((prev) => prev.filter(eventId => eventId !== id));
            toast.error("Event removed");
        }
        else {
            if (selectedEvent.length == 4) {
                toast.warn("only 4 event can be selected");
            }
            else {
                setSelectedEvent((prev) => [...prev, id]);
                toast.success("Event added");
            }
        }

    };

    const fetchData = async () => {
        try {
            console.log(url);
            const response = await axios.get(`${url}/api/v1/auth/events`);

            const newEventDatas = response.data;

            localStorage.setItem("eventDatas", JSON.stringify(newEventDatas.length));

            // Update state
            setEventDatas(newEventDatas);
            console.log("Data successfully fetched from server ||", "Fetched quantity :::", newEventDatas.length);
        } catch (err) {
            console.log("Error in axios", err);

            // Try to load from localStorage first
            const cachedData = localStorage.getItem("eventDatas");
            if (cachedData) {
                const parsedData = JSON.parse(cachedData);
                setEventDatas(parsedData);
                console.log("Data loaded from localStorage (", parsedData.length, "items)");
            } else {
                console.log("error fetching data");
            }
        }
    };
    const sendDatatoBackend = async () => {
        const dataSet = {
            name: data.name,
            usn: data.usn,
            college: data.college,
            phone: data.mobile,
            amount: amount,
            registrations: selectedEvent.map(id => ({ event_id: id }))
        };

        try {
            const res = await axios.post(`${url}/api/v1/auth/payment`, dataSet);
            console.log("success bro ", res.data);
            console.log(res.data.participantId);            
            successData.participantId = res.data.participantId
            successData.orderId = res.data.orderId
            return res.data; // Return the response data containing the order ID
        } catch (err) {
            console.error("Error in backend call", err);
            throw err; // Rethrow the error so it can be caught by payNow
        }
    };

    const payNow = async () => {
        try {
            // Get order details from backend
            const payLoad = await sendDatatoBackend();

            // Open Razorpay Checkout with dynamic order details
            const options = {
                key: process.env.REACT_APP_RAZORPAY_ID, // Your Razorpay Key ID
                amount: payLoad.amount, // Amount from backend response (should be in subunits, e.g., paise for INR)
                currency: payLoad.currency,
                name: "SHREE DEVI SAMBHRAM",
                description: "International Tech Fest",
                image: "https://storage.googleapis.com/educrib/colleges/uploads/f7a1791dd41f3fa5e5e4f8a6faea2467ShreeDeviCollegeOfPhysiotherapy_Fd.jpg",
                order_id: payLoad.orderId,
                redirect: url + '/api/v1/auth/payment/verify',
                handler: function (response) {

                    console.log("gateway success");

                    setSelectedEvent([]);
                    
                    navigate('/success', { state: { participantId: successData.participantId,orderId:successData.orderId } });

                },
                prefill: {
                    name: data.name,
                    contact: data.mobile
                },
                notes: {
                    address: "Kenjar"
                },
                theme: {
                    color: "#ff001b",
                }
            };

            const rzp = new Razorpay(options);
            rzp.on('payment.failed', function (response) {
                toast.error("Payment failed: " + response.error.description);
            });
            rzp.open();
        } catch (error) {
            console.error("Error initiating payment", error.response);
            toast.error(error.response.data.message)
        }
    };





    const objects = {
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
        successData
    };

    return (
        <StoreContext.Provider value={objects}>
            {children}
        </StoreContext.Provider>
    );
};

import React from 'react';

// ... (Snowflake and Snow classes remain the same)
 
function Countdown() {
    const [time, setTime] = React.useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    React.useEffect(() => {
        const target = new Date('2024-12-06T00:00:00');

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            if (difference < 0) {
                setTime({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                clearInterval(interval);
                return;
            }

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setTime({
                days: d.toString().padStart(2, '0'),
                hours: h.toString().padStart(2, '0'),
                minutes: m.toString().padStart(2, '0'),
                seconds: s.toString().padStart(2, '0')
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="middle">
            <div className="label">Get Ready, Sambhram is Coming.</div>
            <div className="time">
                <span>
                    <div>{time.days}</div>
                    Days
                </span>
                <span>
                    <div>{time.hours}</div>
                    Hours
                </span>
                <span>
                    <div>{time.minutes}</div>
                    Minutes
                </span>
                <span>
                    <div>{time.seconds}</div>
                    Seconds
                </span>
            </div>
        </div>
    );
}

export default Countdown;

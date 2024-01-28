import { useState, useEffect, useRef } from 'react';

export const Countdown = ({ initialCount, onEnd }) => {
    const [count, setCount] = useState(initialCount);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (count === 0) {
            onEnd();
        }
    }, [count, onEnd]);

    return <h1 className="countdown">{count}</h1>;
};

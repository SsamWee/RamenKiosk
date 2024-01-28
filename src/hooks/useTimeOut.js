import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

export const useTimeOut = (timeoutDuration, isActive) => {
    let inactivityTimeout = null;
    const { setShowTimeout, user } = useContext(AppContext);

    const resetTimeout = () => {
        if (inactivityTimeout) clearTimeout(inactivityTimeout);
    
        inactivityTimeout = setTimeout(() => {
            setShowTimeout(true);
        }, timeoutDuration);
    };

    const handleUserActivity = () => {
        resetTimeout();
    };

    useEffect(() => {
        if (isActive) {
            window.addEventListener('mousemove', handleUserActivity);
            window.addEventListener('keydown', handleUserActivity);
            window.addEventListener('click', handleUserActivity);
            resetTimeout();
        }

        return () => {
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('keydown', handleUserActivity);
            window.removeEventListener('click', handleUserActivity);
            if (inactivityTimeout) clearTimeout(inactivityTimeout);
        };
    }, [isActive]);
};


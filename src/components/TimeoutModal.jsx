import { AppContext } from "../context/index";
import { createPortal } from "react-dom";
import { Countdown } from "../helpers/Countdown"
import { useContext } from "react";

export const TimeoutModal = () => {

    const { t, nav, setShowTimeout, clearUser } = useContext(AppContext);

    const handleCountdownEnd = () => {
        clearUser();
        setShowTimeout(false);
        nav('/homepage');
    };

    const modal = (
        <>
            <div className="modal-background"></div>
            <div className="timeOut modal-content">
                <Countdown initialCount={30} onEnd={handleCountdownEnd} />
                <h2>{t('stillThere')}</h2>
                <div className=" timeOut-btn-container">
                    <button className="timeOut-btn-1 button-card" onClick={handleCountdownEnd}>{t('home')}</button>
                    <button className="button-card" onClick={() => setShowTimeout(false)}>{t('continue')}</button>
                </div>
            </div>
        </>
    );
    return createPortal(modal, document.getElementById("modal-root"));
}

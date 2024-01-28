import { createPortal } from "react-dom";
import { AppContext } from "../context/index";
import { useContext } from "react";

export const ResetModal = () => {

    const { t, nav, clearUser, setReset } = useContext(AppContext);

    const handleStart = () => {
        clearUser();
        nav('/homepage');
        setReset(false);
    };

    const modal = (
        <>
            <div className="modal-background"></div>
            <div className="modal-content reset-container">

            <h2>{t('loseOrder')}</h2>
                <div className=" timeOut-btn-container">
                    <button className="timeOut-btn-1 button-card" onClick={handleStart}>{t('home')}</button>
                    <button className="button-card" onClick={() => setReset(false)}>{t('continue')}</button>
                </div>

            </div>
        </>
    );
    return createPortal(modal, document.getElementById("modal-root"));
}

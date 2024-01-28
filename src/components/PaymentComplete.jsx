import { useContext } from "react";
import { AppContext } from "../context/index";
import { Countdown } from "../helpers/Countdown"
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

export const PaymentComplete = () => {

    const { t, nav, clearUser, loading, isLoading } = useContext(AppContext);

    const handleCountdownEnd = () => {
        clearUser();
        nav('/homepage');
    };

    loading();

    return (
        <>
            <div className="page-container">
                <div className="page-subcontainer payment-page">
                    {isLoading ?
                        <div className="loading-container">
                            <h1 className="isLoading"></h1>
                            <h1>{t('procesing')}</h1>
                        </div>

                        : <div className="payment-page">
                            <div>
                                <h1>{t('thanks')}</h1>
                                <h2 className="item-name"><FaLongArrowAltDown /> {t('pleaseBeSure')} <FaLongArrowAltDown /></h2>
                                <p>{t('pleaseWait')}</p>
                            </div>
                            <img className="logo" src="./src/assets/receipt.png" alt="Receipt" />
                            <div className="payment-back">
                                <h3 >{t('backTo')}</h3> <Countdown initialCount={20} onEnd={handleCountdownEnd} /> <h3>{t('seconds')}</h3>
                            </div>
                            <button className="checkOut-btn button-card" onClick={handleCountdownEnd}> <IoHomeSharp /> <p>{t('newOrder')}</p></button>
                            <h2>{t('payComp')}</h2>
                        </div>
                    }
                </div>
            </div >
        </>
    )
}

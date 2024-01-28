import { AppContext } from "../context/index";
import { ResetModal } from "../components";
import { IoTicketOutline } from "react-icons/io5";
import { BsCash } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { useContext } from "react";

export const CheckOut = () => {

    const { t, nav, user, calculateTotal, calculateSubtotal, showReset, setReset  } = useContext(AppContext);

    return (
        <>
            <div className="page-container">
                <div className="page-subcontainer">
                    <div className="checkOut-page">

                        <div className="checkOut-container">
                            <h1 className="checkOut-title">{t('checkOut')}</h1>
                            <ul>
                                {
                                    user.cart.map((item, index) => (
                                        <li key={index}>
                                            <div className="checkOut-list">
                                                <p>{item.quantity}</p>
                                                <p className="item-name">{item.name}</p>
                                                <p className="item-price">{item.price * item.quantity}€</p>
                                            </div>

                                        </li>
                                    ))}
                            </ul>
                            <div className="checkOut-resume">
                                <button className=" checkOut-btn button-card"> <IoTicketOutline /> <p>{t('coupon')}</p></button>

                                <div className="checkOut-resume-total">
                                    <div className="total">
                                        <h3>Subtotal:</h3>
                                        <h3>{calculateSubtotal()} €</h3>
                                    </div>
                                    <hr />
                                    <div className="total">
                                       <h3>Total:</h3> 
                                       <h3>{calculateTotal()} €</h3>
                                    </div>
                                    
                                    <p>10% {t('taxRate')} {calculateTotal()} €</p>
                                    
                                </div>
                            </div>

                            <div className="checkOut-footer">
                                <div className="checkOut-buttons">
                                    <button className="button-card" onClick={() => nav('/menu')}>{t('return')}</button>
                                    <button className="button-card" onClick={() => setReset(true)}>{t('cancelOrder')}</button>
                                </div>
                            </div>

                        </div>

                        <div className="checkOut-pay">
                            <h1 >{t('selectPayment')}</h1>

                            <div className="checkOut-buttons">
                                <button className=" checkOut-btn button-card" onClick={() => nav('/paymentComplete')}> <BsCreditCard /> <p>{t('creditCard')}</p></button>
                                <button className=" checkOut-btn button-card cash"> <BsCash /> <p>{t('payCash')}</p></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {showReset && (<ResetModal />)}
        </>


    )
}

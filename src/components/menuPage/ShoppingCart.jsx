import { AppContext } from "../../context/index";
import { IoClose } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsCartX } from "react-icons/bs";
import { useContext } from "react";

export const ShoppingCart = () => {

    const { t, nav, setShowCart, user, removeFromCart, clearCart, isCartEmpty } = useContext(AppContext);

    return (
        <>
            <div className="shopping-cart">
                <div className="shopping-cart-container">
                    <div className="return-container">
                        <h2>{t('cart')}</h2>
                        <IoClose type="button" className="icon" onClick={() => setShowCart(false)} />
                    </div>

                    <ul className="list-cart"> {
                        (user.cart.length === 0)
                            ? (<p className="not-item-cart animate__animated animate__fadeInDown"> <BsCartX /> {t('noItems')} <BsCartX /> </p>)
                            : (user.cart.map((item, index) => (
                                <li key={index}>
                                    <div className="li-container animate__animated animate__fadeInDown">
                                        <p>{item.quantity}</p>
                                        <p className="item-name">{item.name}</p>
                                        <p className="item-price">{item.price * item.quantity}€</p>
                                        <FaRegTrashAlt className="icon" type="button" onClick={() => removeFromCart(item.id)} />
                                    </div>
                                </li>
                            )))

                    }
                    </ul>

                    <div className="list-cart-buttons">
                        <button className={`homeButton ${isCartEmpty() ? 'cash' : ''}`} onClick={() => nav('/checkOut')} disabled={isCartEmpty()}>{t('checkOut')}</button>
                        <button className={`homeButton ${isCartEmpty() ? 'cash' : ''}`} onClick={clearCart} disabled={isCartEmpty()}>{t('clearCart')}</button>
                    </div>
                </div>
            </div>
        </>

    )
}

import { useContext } from "react";
import { AppContext } from "../../context/index";
import { LuInfo } from "react-icons/lu";


export const CardMenu = ({ image, name, price, id }) => {

    const { t, setShowInfo, addToCart } = useContext( AppContext );

    const modal = () => setShowInfo({isOpen: true, key: id})

    return (
        <>
            <div className="primary-container">
                <LuInfo type="button" className='icon-info' onClick={modal}/>
                <img 
                src={image} 
                alt={name} 
                className="card-image animate__animated animate__zoomIn" 
                type="button" 
                onClick={modal} />
                <h3 className="mt-2" >{name}</h3>
                <p>{price} €</p>
                <button className="button-card" onClick={()=>addToCart(id)}>+ {t('add')}</button>
            </div>
        </>
    )
}

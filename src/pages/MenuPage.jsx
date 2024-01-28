import { useContext, useEffect, useRef } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { CustomRamen, InfoModal, ShoppingCart, Category, TimeoutModal, ResetModal } from "../components";
import Slider from "react-slick";
import { AppContext } from "../context/AppContext";
import { useTimeOut } from '../hooks/useTimeOut';

export const MenuPage = () => {


    const buttonNames = ["customRamen", "classicRamen", "ramen", "drinks"];

    const categories = ["classicRamen", "ramen", "drinks"];

    const { i18n, t, data, showCart, setShowCart, showInfo, animateCart, showTimeout, isActive, setIsActive, showReset, setReset } = useContext(AppContext);

    const sliderRef = useRef();
    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const settings = {
        className: "center",
        centerMode: false,
        infinite: false,
        variableWidth: true
    };

    useTimeOut(60000, isActive);

    useEffect(() => {
        setIsActive(true);
        return () => setIsActive(false);
    }, []);

    return (
        <>
            <div className="page-container">
                <div className="page-subcontainer">
                    <div className=" home-btn-container">
                        <div type="button" className="return-container" onClick={() => setReset(true)}>
                            <IoHomeSharp className="icon" />
                        </div>
                        {buttonNames.map((name, index) => (
                            <button key={index} className="homeButton" onClick={() => goToSlide(index)}>{t(name)}</button>
                        ))}
                        <div type="button" className="return-container" onClick={() => setShowCart(true)}>
                            <FaShoppingCart className={`icon ${animateCart ? 'animate__animated animate__bounce' : ''}`} />
                        </div>
                    </div>
                    <div className="carousel-container">
                        <Slider {...settings} ref={sliderRef} >
                            <CustomRamen />
                            {categories.map((category, index) => (
                                <Category key={index} title={category} data={data.filter(item => item.type === category)} />
                            ))}
                        </Slider>
                    </div>
                </div>
                {showCart && (<ShoppingCart />)}
            </div>
            {showInfo && (<InfoModal />)}
            {showTimeout && (<TimeoutModal />)}
            {showReset && (<ResetModal />)}
        </>
    )
}

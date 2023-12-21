import { useRef } from "react"
import { IoArrowBackSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { CustomRamen, Drinks, ClassicRamen, Ramen } from "../components";
import Slider from "react-slick";

export const MenuPage = () => {

    const { i18n, t } = useTranslation();
    const sliderRef = useRef();

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const settings = {
        className: "center",
        centerMode: false,
        infinite: false,
        variableWidth: true,
    };

    return (
        <>
            <div className="container-fluid">




                <div className="container position-relative d-flex justify-content-evenly p-3 mt-3">

                    <div type="button" className="d-flex position-absolute top-50 start-0 translate-middle ">
                        <IoArrowBackSharp className="fs-2" />
                        <h4 className="mx-1">{t('return')}</h4>
                    </div>

                    <button className="buttonx3" onClick={() => goToSlide(0)}>Custom Ramen</button>
                    <button className="buttonx3" onClick={() => goToSlide(1)}>Classic Ramen</button>
                    <button className="buttonx3" onClick={() => goToSlide(2)}>Ramen</button>
                    <button className="buttonx3" onClick={() => goToSlide(3)}>Drinks</button>

                </div>



                <div className="container-fluid carousel p-3 mt-3">


                    <Slider {...settings} ref={sliderRef} >
                        <div className="p-2">
                            <CustomRamen />
                        </div>

                        <div className="p-2">
                            <ClassicRamen />
                        </div>

                        <div className="p-2">
                            <Ramen />
                        </div>

                        <div className="p-2">
                            <Drinks />
                        </div>

                    </Slider>

                </div>
            </div>

        </>
    )
}

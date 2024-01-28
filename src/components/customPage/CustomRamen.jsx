import { useContext } from "react";
import { AppContext } from "../../context";

export const CustomRamen = () => {

  const { t, nav } = useContext(AppContext);

  const goCustomize = () => {
    nav('/customize')
  }

  return (
    <>
    <h2 className="card-title">- {t('customRamen')} -</h2>
    <div className="card-container">
        <div className=" custom-ramen-image animate__animated animate__zoomIn">
          <button className="homeButton cash">{t('customize')}</button>
        </div>
    </div>
    </>
  )
}

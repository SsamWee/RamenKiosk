import { useContext } from "react";
import { AppContext } from "../../context/index";

export const Service = () => {

  const { t, nav, addService } = useContext( AppContext );

  const goMenu = (service) => {
    addService(service);
      nav('/menu');
  };

  return (
    <div className="home-btn-container">

      <button onClick={ () => goMenu("takeout") } className="homeButton">{t('takeout')}</button>
      <button onClick={ () => goMenu("eatin") } className="homeButton" >{t('eatin')}</button>

    </div>
  )
}

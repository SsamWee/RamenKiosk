import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { IoArrowBackSharp } from "react-icons/io5";
import { RamenContext } from "../context/RamenContext";
import { useNavigate } from "react-router-dom";

export const Service = () => {

  const { i18n, t } = useTranslation();
  const { user, setUser } = useContext( RamenContext );
  const navigate = useNavigate();

  const goBack = () => {
    setUser({ ...user, language: null })
    i18n.changeLanguage('en');
  }

  const goMenu = (service) => {
    setUser({ ...user, service: service });
      navigate('/menu')

  }

  return (
    <div className="container position-relative d-flex justify-content-evenly p-5 mt-4">

      <div type="button" onClick={ goBack } className="d-flex position-absolute top-50 start-0 translate-middle ">
        <IoArrowBackSharp className="fs-2" />
        <h4 className="mx-1">{t('return')}</h4>
      </div>

      <button onClick={ () => goMenu("takeout") } className="buttonx3">{t('takeout')}</button>
      <button onClick={ () => goMenu("eatin") } className="buttonx3" >{t('eatin')}</button>

    </div>
  )
}

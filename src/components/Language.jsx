import { useContext } from "react"
import { RamenContext } from "../context/RamenContext"

import { LANGUAGES } from '../context/languagesIndex'
import { useTranslation } from "react-i18next";

export const Language = () => {
  
  const { user, setUser } = useContext( RamenContext );

  const { i18n, t } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language.code);
    setUser({language: language.label});
  }


  return (
    <div className="container d-flex justify-content-around p-5 mt-4">

      {LANGUAGES.map((language, index) => (
        <button 
          key={index}
          className="buttonx3" 
          onClick={() => changeLanguage(language)}
        >
          {t(language.label)}
        </button>
      ))}

    </div>
  )
}

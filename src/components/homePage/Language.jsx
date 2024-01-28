import { useContext } from "react";
import { AppContext, LanguagesIndex } from "../../context/index";

export const Language = () => {
  
  const { addLanguage, i18n, t } = useContext( AppContext );

  const changeLanguage = (language) => {
    i18n.changeLanguage(language.code);
    addLanguage(language.label);
  }

  return (
    <div className="home-btn-container">

      {LanguagesIndex.map((language, index) => (
        <button 
          key={index}
          className="homeButton" 
          onClick={() => changeLanguage(language)}
        >
          {t(language.label)}
        </button>
      ))}

    </div>
  )
}

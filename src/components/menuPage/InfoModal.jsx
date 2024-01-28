import { useContext } from "react";
import { AppContext } from "../../context/index";
import { createPortal } from "react-dom";


export const InfoModal = () => {

  const { t, showInfo, setShowInfo, getItemById } = useContext(AppContext);
  const { key } = showInfo;
  const data = getItemById(key);

  const modal = (
    <>
      <div className="modal-background" onClick={() => setShowInfo(false)}></div>

      <div className="modal-content">

        <h2 className="info-title">{data.name}</h2>

        <img src={data.image} alt={data.name} className="card-image animate__animated animate__zoomIn" />

        <p className="info-text">{data.description}</p>

        <ul className="lista-modal">
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <button className="homeButton" onClick={() => setShowInfo(false)}>{t('close')}</button>
        
      </div>
    </>
  );

  return createPortal(modal, document.getElementById("modal-root"));
};




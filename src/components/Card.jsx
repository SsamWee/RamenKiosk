import { useState } from "react";
import { InfoModal } from "./InfoModal"

export const Card = ({ carpeta, nombre, precio }) => {


    let imgName = nombre.split(" ").join("");
    console.log(imgName)

    // Usamos un estado para controlar si mostrar o no el modal
  const [showModal, setShowModal] = useState(false);

  // Función para abrir el modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

    return (
        <>
            <div className="primary-container position-relative m-4">

                <div className="position-absolute top-0 end-0 opacity-25">
                    <img className="icon m-2" src="src/assets/icons/Info.png" type="button" onClick={handleOpenModal} />
                </div>
                <img src={`src/assets/${carpeta}/${imgName}.jpeg`} alt="" className="img-prueba animate__animated animate__zoomIn" type="button" onClick={handleOpenModal} />


                <h3 className="mt-2" >{nombre}</h3>
             
                <p>{precio}</p>

                <button className="btn btn-secondary">+ Añadir</button>

            </div>

            {showModal && (
          <InfoModal onClose={handleCloseModal} />
        )}
        </>
    )
}

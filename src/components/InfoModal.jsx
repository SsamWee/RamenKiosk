import { useState } from "react";
import { createPortal } from "react-dom";


export const InfoModal = ({ onClose }) => {
    // Usamos un estado para controlar la visibilidad del modal
    const [show, setShow] = useState(true);
  
    // Función para cerrar el modal y llamar al prop onClose
    const handleClose = () => {
      setShow(false);
      onClose();
    };
  
    // Creamos el modal con los props que recibimos
    const modal = (
      <div className="modal-background">
        <div className="modal-content">
          <h2>Holip!!</h2>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    );
  
    // Usamos la función createPortal para renderizar el modal dentro del elemento con id modal-root
    return createPortal(modal, document.getElementById("modal-root"));
  };
  

  

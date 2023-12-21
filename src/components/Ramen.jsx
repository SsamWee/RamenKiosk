import { RamenData } from "../data/RamenData";
import { Card } from "./Card"

export const Ramen = () => {

  return (
    <>
      <h2 className="mx-4">-Ramen-</h2>

      <div className="card-container">

        {RamenData.map(ramen => (<Card carpeta="ramen" key={ramen.nombre} {...ramen} />))}
        
      </div>

    </>
  )
}

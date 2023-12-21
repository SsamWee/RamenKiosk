import { ClassicRamenData } from "../data/ClassicRamenData";
import { Card } from "./Card"

export const ClassicRamen = () => {


  return (
    <>
      <h2 className="mx-4">-Classic Ramen-</h2>

      <div className="card-container">

        {ClassicRamenData.map(ramen => (<Card carpeta="classicRamen" key={ramen.nombre} {...ramen} />))}

      </div>

    </>
  )
}

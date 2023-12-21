import { Card } from "./Card"
import { DrinksData } from "../data/DrinksData"

export const Drinks = () => {
  return (
    <>
    <h2 className="mx-4">-Drinks-</h2>

    <div className="card-container">

        {DrinksData.map(drink => (<Card carpeta="drinks" key={drink.nombre} {...drink} />))}

      </div>

    </>
  )
}

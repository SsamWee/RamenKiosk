import { useState } from "react";
import { useMenuData } from "../../hooks/useMenuData";

export const CustomItem = ({ ingredientType }) => {
  const { getIngredients, getMax } = useMenuData();

  const ingredients = getIngredients(ingredientType);
  const maxSelection = getMax(ingredientType)

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleCheckboxChange = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
    } else {
      if (selectedIngredients.length < maxSelection) {
        setSelectedIngredients([...selectedIngredients, ingredient]);
      }
    }
  };

  return (
    <div className="page-container">

      <div className="custom-item-header">
        <h1>Select {ingredientType}</h1>
        <h3>Max selection: {maxSelection}</h3>
      </div>

      <div className="custom-item-body">

        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>

              <label>
                <input
                  type="checkbox"
                  checked={selectedIngredients.includes(ingredient)}
                  onChange={() => handleCheckboxChange(ingredient)}
                />
                <h3>{ingredient}</h3>
              </label>
              
            </li>
          ))}
        </ul>

      </div>

    </div>

  );
};


import { useEffect, useState } from 'react';
import i18n from '../i18n';

export function useMenuData() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadMenuData = async () => {
      const language = i18n.language;
      const response = await fetch(`/public/data/menuData.${language}.json`);
      const menuData = await response.json();
      setData(menuData);
    };

    loadMenuData();
  }, [i18n.language]);

  const getItemById = (id) => {
    return data.find(item => item.id === id);
  };

  const getIngredients = (ingredient) => {
    const customItem = data.find(item => item.tipo === "Custom");
    
    if (customItem && customItem.ingredients && customItem.ingredients[ingredient]) {
      return customItem.ingredients[ingredient].opciones;
    } else {
      console.error(`Error al obtener los ingredientes de tipo '${ingredient}'.`);
      return [];
    }
    
  };

  const getMax = (ingredient) => {
    const customItem = data.find(item => item.tipo === "Custom");
  
    if (customItem && customItem.ingredients && customItem.ingredients[ingredient]) {
      return customItem.ingredients[ingredient].maxSelect;
    } else {
      console.error(`Error al obtener el valor maxSelect para el tipo de ingrediente '${ingredient}'.`);
      return [];
    }
  };

  return { data, getItemById, getIngredients, getMax };
}

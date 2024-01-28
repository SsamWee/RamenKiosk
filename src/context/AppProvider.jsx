import { useState } from "react";
import { AppContext } from "./AppContext";
import { useMenuData } from "../hooks/useMenuData";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const AppProvider = ({ children }) => {

  //Conf idiomas
  const { i18n, t } = useTranslation();

  //Navigate
  const nav = useNavigate();

  //Props del usuario
  const [user, setUser] = useState({
    cart: [],
    language: "",
    service: ""
  });

  // Mostrar u ocultar elementos
  const [showInfo, setShowInfo] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showTimeout, setShowTimeout] = useState(false);
  const [showReset, setReset] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [ isLoading, setLoading ] = useState(true);

  //Data de mi json
  const { data, getItemById } = useMenuData();

  //Prop del carrito
  const [animateCart, setAnimateCart] = useState(false);

  const loading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  const clearUser = () => {
    setUser({
      cart: [],
      language: "",
      service: ""
    });
    setLoading(true);
    setShowCart(false);
  };

  const addLanguage = (language) => {
    setUser({
      ...user,
      language: language
    })
  };

  const addService = (service) => {
    setUser({
      ...user,
      service: service
    })
  };

  const addToCart = (id) => {
    const product = getItemById(id); // Busco el producto por su id
    if (product) {
      setUser(user => {
        // Compruebo si el producto ya está en el carrito
        const existingProduct = user.cart.find(item => item.id === id);
        if (existingProduct) {
          // Si el producto ya está en el carrito, incremento su cantidad
          const updatedCart = user.cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
          return { ...user, cart: updatedCart };
        } else {
          // Si el producto no está en el carrito, lo agrego
          return { ...user, cart: [...user.cart, { ...product, quantity: 1 }] };
        }
      });

      setAnimateCart(true);
      setTimeout(() => setAnimateCart(false), 900);
    }
  };


  const removeFromCart = (id) => {
    const existingProduct = user.cart.find(item => item.id === id);
    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        // Si la cantidad del producto es más de uno, disminuye la cantidad
        const updatedCart = user.cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setUser({ ...user, cart: updatedCart });
      } else {
        // Si la cantidad del producto es uno, elimina el producto del carrito
        const updatedCart = user.cart.filter(item => item.id !== id);
        setUser({ ...user, cart: updatedCart });
      }
    }
  };

  const isCartEmpty = () => {
    return user.cart.length === 0;
  };

  const clearCart = () => {
    setUser({ ...user, cart: [] });
  };

  const calculateSubtotal = () => {
    let total = calculateTotal();
    let taxRate = 0.1;

    let subtotal = total / (1 + taxRate);
    return subtotal.toFixed(2);
  };

  const calculateTotal = () => {
    let total = 0;
    user.cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <AppContext.Provider
      value={{
        i18n, 
        t,
        nav,
        user,
        setUser,
        addLanguage,
        addService,
        clearUser,
        showInfo,
        setShowInfo,
        showCart,
        setShowCart,
        data,
        addToCart,
        getItemById,
        removeFromCart,
        clearCart,
        animateCart,
        setShowTimeout,
        isActive,
        setIsActive,
        showTimeout,
        calculateTotal,
        calculateSubtotal,
        isCartEmpty,
        isLoading,
        loading,
        showReset,
        setReset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

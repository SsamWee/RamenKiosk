import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation:{
        escapeValue: false
    },
    resources: {
        en: {
            translation: {
                spanish: 'Spanish',
                english: "English",
                return: 'Return',
                takeout: 'Take-out',
                eatin: 'Eat-in',
                customRamen: 'Custom ramen',
                customize: 'Customize',
                classicRamen: 'Clasic ramen',
                ramen: 'Ramen',
                drinks: 'Drinks',
                add: 'Add',
                close: 'Close',
                continue: 'Continue',
                cancelOrder: 'Cancel order',
                cart: 'Cart',
                noItems: 'Your cart is empty',
                checkOut: 'Check Out',
                clearCart: 'Clear Cart',
                coupon: 'Enter Coupon',
                taxRate: 'Tax Rate',
                creditCard: 'Credit Card',
                payCash: 'Pay in cash',
                selectPayment: 'Choose your payment method',
                procesing: 'Processing payment',
                thanks: 'Thank you!',
                pleaseBeSure: 'Please be sure to take your number tag and receipt',
                pleaseWait: 'Please wait until your order is ready.',
                backTo: 'Back to home screen in',
                seconds: 'seconds',
                newOrder: 'New order',
                payComp: 'Payment Completed',
                stillThere: 'Still there? Your order will be cancelled...',
                home: 'Home',
                loseOrder: 'You will lose your order!',
            }
        },
        es: {
            translation: {
                spanish: 'Español',
                english: "Ingles",
                return: 'Regresar',
                takeout: 'Para llevar',
                eatin: 'Tomar aquí',
                customRamen: 'Ramen personalizado',
                customize: 'Personalizar',
                classicRamen: 'Ramen clasico',
                ramen: 'Ramen',
                drinks: 'Bebidas',
                add: 'Añadir',
                close: 'Cerrar',
                continue: 'Continuar',
                cancelOrder: 'Cancelar pedido',
                cart: 'Cesta',
                noItems: 'Su carrito está vacío',
                checkOut: 'Comprobar',
                clearCart: 'Vaciar Cesta',
                coupon: 'Introducir Cupón',
                taxRate: 'Tasa de impuesto',
                creditCard: 'Tarjeta de credito',
                payCash: 'Pago en metalico',
                selectPayment: 'Selecciona el metodo de pago',
                procesing: 'Procesando pago',
                thanks: 'Muchas gracias!',
                pleaseBeSure: 'Asegúrese de llevar la etiqueta de su número y el recibo.',
                pleaseWait: 'Espere hasta que su pedido esté listo.',
                backTo: 'Volver a la pantalla de inicio en',
                seconds: 'segundos',
                newOrder: 'Nuevo pedido',
                payComp: 'Pago completado',
                stillThere: '¿Sigue ahí? Su pedido será cancelado...',
                home: 'Inicio',
                loseOrder: 'Perderás tu pedido!',
            }
        },
    }
});

export default i18n;

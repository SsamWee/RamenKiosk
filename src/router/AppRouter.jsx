import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { MenuPage } from "../pages/MenuPage"
import { CheckOut, PaymentComplete } from "../components"
import { CustomizePage } from "../pages/CustomizePage"

export const AppRouter = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<Navigate to="homepage" />} />
      <Route path="homepage" element={<HomePage />} exact />
      <Route path="menu" element={<MenuPage />} />
      <Route path="customize" element={<CustomizePage />} />
      <Route path="checkOut" element={<CheckOut />} />
      <Route path="paymentComplete" element={<PaymentComplete />} />

    </Routes>
    </>
  )
}

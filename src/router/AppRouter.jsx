import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { MenuPage } from "../pages/MenuPage"
import { Language, Service } from "../components"

export const AppRouter = () => {
  return (
    <>
    <Routes>

      <Route path="/" element={<Navigate to="homepage" />} />
      <Route path="homepage" element={<HomePage />} exact>
        {/* <Route path="language" element={<Language />} />
        <Route path="service" element={<Service />} /> */}
      </Route>
      <Route path="menu" element={<MenuPage />} />

    </Routes>
    </>
  )
}

import { Routes, Route } from "react-router-dom"

import Home from "../routes/Home.jsx"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default AppRoutes
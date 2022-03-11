import Home from "../pages/home/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/login/index"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
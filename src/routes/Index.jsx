import Home from "../pages/home/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/login/index"
import Cadastro from "../pages/cadastro"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastrar' element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}
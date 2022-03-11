import CarrinhoProvider from "../../components/context/Carrinho";
import Navbar from "../../components/Navbar";

export default function Login() {
    return (
        <CarrinhoProvider>
            <Navbar></Navbar>
            <h1>Tela de Login</h1>
        </CarrinhoProvider>
    )
}
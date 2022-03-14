import { useContext } from "react"
import { CarrinhoContext } from "../context/Carrinho"
import Plus from '../../assets/img/plus.svg'
import Less from '../../assets/img/dash.svg'
import './index.css'
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function ItensCarrinho() {

    const { qtdItem, setQtdItem, setOpen } = useContext(CarrinhoContext)

    return (
        <div>
            <div className="listaItems">
                <h5 id="itemListaNome">
                    Hamburguer <strong id="qtd">{qtdItem}</strong>
                </h5>
                <div>
                    <img className="moreLess" onClick={() => setQtdItem(qtdItem + 1)} src={Plus} alt="Plus" />
                    <img className="moreLess" onClick={() => setQtdItem(qtdItem - 1)} src={Less} alt="Less" />
                </div>
            </div>
            <div className="listaItems">
                <Button onClick={() => setOpen(false)} sx={{ color: 'error.main' }}>
                    Continuar Comprando
                </Button>
                <Link className="link" to="/compras/confirmarCompra">
                    <Button sx={{ color: 'error.main' }}>
                        Pagar
                    </Button>
                </Link>
            </div>
        </div>
    )
}
import { useContext } from "react"
import { CarrinhoContext } from "../context/Carrinho"
import Plus from '../../assets/img/plus.svg'
import Less from '../../assets/img/dash.svg'
import './index.css'
import { Button, Stack } from "@mui/material"
import { Link } from "react-router-dom"

export default function ItensCarrinho() {

    const { qtdItem, setQtdItem, setOpen } = useContext(CarrinhoContext)

    return (
        <div>
            <div className="listaItems">
                <h5 id="itemListaNome">
                    Hamburguer <strong id="qtd">{qtdItem}</strong> | <strong id="preco">R$ 1580</strong>
                </h5>
                <div>
                    <img className="moreLess" onClick={() => setQtdItem(qtdItem + 1)} src={Plus} alt="Plus" />
                    <img className="moreLess" onClick={() => setQtdItem(qtdItem - 1)} src={Less} alt="Less" />
                </div>

            </div>
            <div className="listaItemsTotal">
                <p id="itemListaTotal">Total: <strong id="preco">R$ 150</strong></p>
            </div>
            <Stack spacing={2} direction="row" className="listaItems" sx={{marginTop: '10px'}}>
                <Button variant="outlined" onClick={() => setOpen(false)}>
                    Continuar Comprando
                </Button>
                <Link className="link" to="/compras/confirmarCompra">
                    <Button variant="outlined">
                        Finalizar Pedido
                    </Button>
                </Link>
            </Stack>
        </div>
    )
}
import { useContext } from "react"
import { CarrinhoContext } from "../context/Carrinho"
import Plus from '../../assets/img/plus.svg'
import Less from '../../assets/img/dash.svg'
import './index.css'


export default function ItensCarrinho() {

    const { qtdItem, setQtdItem } = useContext(CarrinhoContext)

    return (
        <div className="listaItems">
            <h5 id="itemListaNome">
                Hamburguer <strong id="qtd">{qtdItem}</strong>
            </h5>
            <div>
                <img className="moreLess" onClick={() => setQtdItem(qtdItem + 1)} src={Plus} alt="Plus" />
                <img className="moreLess" onClick={() => setQtdItem(qtdItem - 1)} src={Less} alt="Less" />
            </div>
        </div>
    )
}
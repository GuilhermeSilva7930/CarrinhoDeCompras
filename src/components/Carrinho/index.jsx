import { IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { CarrinhoContext } from "../context/Carrinho";

export default function Carrinho() {

    const { qtdItem } = useContext(CarrinhoContext)

    return (
        <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon /> <small>{qtdItem === 0 ? '' : qtdItem }</small>
        </IconButton>
    )
}
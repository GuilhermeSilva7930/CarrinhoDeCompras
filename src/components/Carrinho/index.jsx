import React from "react";
import { ClickAwayListener, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { CarrinhoContext } from "../context/Carrinho";
import './index.css'
import { Box } from "@mui/system";

export default function Carrinho() {

    const { qtdItem } = useContext(CarrinhoContext)

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 45,
        right: 0,
        left: -265,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        backgroundColor: 'white',
        width: '300px'
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
                <div onClick={handleClick}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon /> <small>{qtdItem === 0 ? '' : qtdItem}</small>
                    </IconButton>
                </div>
                {open ? (
                    <Box className='modalCarrinho' sx={styles}>
                        {qtdItem === 0 ? 'Não tem nenhum item na lista' : 'Foram adicionados ' + qtdItem + ' itens nas lista'}
                    </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    )
}
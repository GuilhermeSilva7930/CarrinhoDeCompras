import React from "react";
import { ClickAwayListener, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { CarrinhoContext } from "../context/Carrinho";
import './index.css'
import { Box } from "@mui/system";
import ItensCarrinho from "../ItensCarrinho";

export default function Carrinho() {

    const { qtdItem, open, setOpen } = useContext(CarrinhoContext)

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
        left: -325,
        zIndex: 1,
        border: '1px solid #8cbae8',
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
                        {qtdItem === 0 ? 'Carrinho Vazio' : 
                        <div>
                            <ItensCarrinho></ItensCarrinho>
                        </div>
                        }
                    </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    )
}
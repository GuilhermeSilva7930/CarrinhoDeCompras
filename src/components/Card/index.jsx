import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CarrinhoContext } from '../context/Carrinho';
import Lanche from '../../assets/img/lanche.jpg'

function MyCard() {

    const { qtdItem, setQtdItem } = useContext(CarrinhoContext)

    return (
        <div>
            <Card sx={{ maxWidth: 345, margin: '20px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Lanche}
                        alt="Hamburguer"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Hamburguer
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ marginBottom: '12px' }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, natus. Magni est!
                        </Typography>
                        <Typography style={{ marginBottom: '12px' }}>
                            <strong id='preco'>R$ 9,99</strong>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" onClick={() => { setQtdItem(qtdItem + 1) }}>
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    <AddShoppingCartIcon />
                                </IconButton>
                                <p>Adicionar</p>
                            </Button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MyCard;
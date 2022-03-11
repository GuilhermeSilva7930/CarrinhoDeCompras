import './index.css'
import Carrinho from '../Carrinho/index'
import ImgLogin from '../../assets/img/person-circle.svg'
import Logo from '../../assets/img/hamburger-icon.svg'
import { Container, IconButton } from '@mui/material'

export default function Navbar() {
    return (
        <header>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'auto' }}>
                <div id='logo'>
                    <img src={Logo} alt="Logo FoodHouse" className='imgLogo' />
                    <h3 id='logo-text'>FoodHouse</h3>
                </div>
                <div>
                    <IconButton>
                        <img src={ImgLogin} alt="" className='imgLogin' />
                    </IconButton>
                    <Carrinho></Carrinho>
                </div>
            </Container>
        </header>
    )
}
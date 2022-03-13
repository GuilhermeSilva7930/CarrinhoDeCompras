import './index.css'
import Carrinho from '../Carrinho/index'
import ImgLogin from '../../assets/img/person-circle.svg'
import Logo from '../../assets/img/hamburger-icon.svg'
import { Container, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'auto' }}>
                <Link to='/' className='link'>
                    <div id='logo'>
                        <img src={Logo} alt="Logo FoodHouse" className='imgLogo' />
                        <h3 id='logo-text'>FoodHouse</h3>
                    </div>
                </Link>
                <div className='nav-icons'>
                    <Link to='/login'>
                        <IconButton>
                            <img src={ImgLogin} alt="" className='imgLogin' />
                        </IconButton>
                    </Link>
                    <Carrinho></Carrinho>
                </div>
            </Container>
        </header>
    )
}
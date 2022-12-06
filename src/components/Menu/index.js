import { Link } from 'react-router-dom';

import Code from '../../assets/imgs/code.png';
import Supplies from '../../assets/imgs/supplies.png';
import Box from '../../assets/imgs/box.png';
import Gift from '../../assets/imgs/gift-box.png';
import Favorites from '../../assets/imgs/recommended.png';
import Logo from '../../assets/imgs/logo.png';

import './styles.scss';

const Menu = () =>{
    return (
        <nav className='menu'>
            <ul className='menu__list'>
                <Link to='/' className='menu__link'>
                    <img className='menu__img' src={Code} alt='' />
                </Link>

                <Link to='/' className='menu__link'>
                    <img className='menu__img' src={Supplies} alt='' />
                    <span className='menu__title'>Todos</span>
                </Link>

                <Link to='/exclusives' className='menu__link'>
                    <img className='menu__img' src={Box} alt='' />
                    <span className='menu__title'>Exclusivos</span>
                </Link>

                <Link to='/promotion' className='menu__link'>
                    <img className='menu__img' src={Gift} alt='' />
                    <span className='menu__title'>Promoção</span>
                </Link>

                <Link to='/favorites' className='menu__link'>
                    <img className='menu__img' src={Favorites} alt='' />
                    <span className='menu__title'>Favoritos</span>
                </Link>

                <a className='menu__link' href='https://finchsolucoes.com.br/' target='_blank' rel='noreferrer'>
                    <img className='menu__img' src={Logo} alt='Logo Finch Soluções' />
                </a>
            </ul>
        </nav>
    );
}

export default Menu;
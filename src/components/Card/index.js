import React from 'react';
import { Link } from 'react-router-dom';

import formatPrice from '../../utils/formatPrice';

import Toggle from '../Toggle';

import './styles.scss';

const Card = ({ product }) => {
    return (
        <section className='card'>
            <div className='card__content'>
                <div className="card__header">
                    <img src={product.imagem} alt='' />
                    <span className={
                            product.promocao  === true ? '--promotion' : '' || 
                            product.exclusivo === true ? '--exclusive' : ''
                        } >
                        {
                            product.promocao  === true ? 'Promoção'  : '' || 
                            product.exclusivo === true ? 'Exclusivo' : ''
                        }
                    </span>
                </div>
            </div>
            <div className='card__details'>
                <div className="card__info">
                    <span className='card__price'>{formatPrice(product.valor)}</span>
                    <Toggle />
                </div>
                <Link to={`/product/${product.id}`}>
                    <h5>{product.nome}</h5>
                </Link>
                <p>{product.decricaoCurta}</p>
            </div>
        </section>
    );
}

export default Card;
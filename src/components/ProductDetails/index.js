import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import formatPrice from '../../utils/formatPrice';

import Toggle from '../../components/Toggle';
import Search from '../../components/Search';

import Return from '../../assets/imgs/return.png';

import './styles.scss';

export default function ProductDetails() {
  const { product, loadingProductDetails } = useSelector((state) => state.ProductReducer);

  return (
    <section>
        {loadingProductDetails ? (
            <div className='loader'>
                <RotatingLines
                    strokeColor='grey'
                    strokeWidth='5'
                    animationDuration='1'
                    width='96'
                    visible={true}
                />
            </div>
            ) : (
            <section className='product'>
                <header className='header'>
                    <div className='header__description'>
                        <div className='header__title'>
                            <h1>{product.nome}</h1>
                            <div className='header__info'>
                                <span className='header__price'>{formatPrice(product.valor)}</span>
                                <Toggle />
                            </div>
                        </div>
                        <p>{product.decricaoCurta}</p>
                    </div>
                    <div className='product__container'>
                        <Link to='/' className='menu__link'>
                            <img className='product__return' src={Return} alt='' />
                        </Link>
                        <div className='header__search'>
                            <Search />
                        </div>
                    </div>
                </header>
                <main className='main__product'>
                    <div className='main__product__img'>
                        <img src={product.imagem} alt='' />
                        <span
                            className={
                                product.promocao === true ? '-promotion' : '' || 
                                product.exclusivo === true ? '-exclusive' : ''
                            }
                            >
                            {
                                product.promocao === true ? 'Promoção' : '' ||
                                product.exclusivo === true ? 'Exclusivo' : ''
                            }
                </span>
                    </div>
                    <div className='main__product__details'>
                        <h2>Detalhes do Produto</h2>
                        <p>{product.descricaoLonga}</p>
                    </div>
                </main>
                <section className='product__technical'>
                        <h2>Ficha Técnica</h2>
                        <ul>
                            {product.fichaTecnica && product.fichaTecnica.map((product, id) => (
                                <li key={product.titulo}>{product.titulo}: {product.descricao}</li>
                            ))}
                        </ul>
                </section>
            </section>
        )}
    </section>
  );
}
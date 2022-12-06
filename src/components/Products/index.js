import React from 'react';
import { useSelector } from 'react-redux';

import { RotatingLines } from 'react-loader-spinner';

import Card from '../../components/Card';
import Header from '../../components/Header';

import './styles.scss';

export default function Products() {
  const { products, loadingProducts, title, subtitle } = useSelector((state) => state.ProductReducer);

  return (
    <section className='main'>
        <Header title={title} subtitle={subtitle} />
        <section className='main__products'>
            <div className='main__list'>
                <div className='main__item'>
                    {loadingProducts ? (
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
                            products.map((product) => {
                                return (
                                    <Card key={product.id} product={product} />
                                );
                            })
                        )}
                </div>
            </div>
        </section>
    </section>
  );
}
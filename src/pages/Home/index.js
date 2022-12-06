import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllProducts } from '../../redux/store/products/actions';

import Products from '../../components/Products';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <section className='home'>
      <Products />
    </section>
  );
}
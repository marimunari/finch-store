import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProductsExclusives } from '../../redux/store/products/actions';

import Products from '../../components/Products';

export default function Exclusives() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsExclusives());
  }, [dispatch]);

  return (
    <section className='home'>
      <Products />
    </section>
  );
}
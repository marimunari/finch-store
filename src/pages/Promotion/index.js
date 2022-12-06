import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProductsPromotion } from '../../redux/store/products/actions';

import Products from '../../components/Products';

export default function Promotion() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsPromotion());
  }, [dispatch]);

  return (
    <section className='home'>
      <Products />
    </section>
  );
}
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getProductDetails } from '../../redux/store/products/actions';

import ProductDetails from '../../components/ProductDetails';

export default function Details() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch]);

  return (
    <section className='product'>
      <ProductDetails />
    </section>
  );
}

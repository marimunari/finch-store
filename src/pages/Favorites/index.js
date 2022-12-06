import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProductsFavorites } from '../../redux/store/products/actions';

import Products from '../../components/Products';

const Favorites = () => {
    const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProductsFavorites());
    }, [dispatch]);

    return (
        <section className='home'>
            <Products />
        </section>
    );
}

export default Favorites;
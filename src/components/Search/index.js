import { useDispatch } from 'react-redux';

import { getSearchProduct } from '../../redux/store/products/actions';

import Loupe from '../../assets/imgs/loupe.png';

import './styles.scss';

const Search = () => {
    const dispatch = useDispatch();

    return (
        <section className='search'>
            <div className='search__img'>
                <img src={Loupe} alt='Ícone de lupa' />
            </div>
            <input 
                type='text' 
                className='search__input' 
                placeholder='Buscar'
                onChange={(event) => 
                dispatch(getSearchProduct(event.target.value))} 
            />
        </section>
    );
}

export default Search;
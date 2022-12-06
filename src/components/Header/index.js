import React from 'react';

import Search from '../Search';

import './styles.scss';

export default function Header({ title, subtitle }) {
  return (
    <header className='header'>
        <div className='header__description'>
            <h1>Empresa XPTO - <span>{title}</span></h1>
            <p>{subtitle}</p>
        </div>
        <div className='header__search'>
            <Search />
        </div>
    </header>
  );
}
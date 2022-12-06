import React from 'react';

import './styles.scss';

const Toggle = () => {
    return (
        <div className='toggle'>
           <label className="switch">
               <input type="checkbox" />
               <span className="slider round"></span>
           </label>
           <span className='toggle__favorite'>tornar favorito</span>
        </div>
    );
}

export default Toggle;
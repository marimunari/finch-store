import { combineReducers } from 'redux';

import ProductReducer from './products/reducer';

const rootReducer = combineReducers({
    ProductReducer,
});

export default rootReducer;
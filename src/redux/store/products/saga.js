import { takeLatest, put, call } from 'redux-saga/effects';

import { 
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCTS_EXCLUSIVES,
  SEARCH_PRODUCT,
  GET_PRODUCTS_PROMOTION,
  GET_PRODUCTS_FAVORITE
} from './actionTypes';

import {
  getProductsSuccess,
  getProductsFail,
  getExclusivesSuccess,
  getExclusivesFail,
  getPromotionSuccess,
  getPromotionFail,
  getSearchProductSuccess,
  getSearchProductFail,
  getProductDetailsSuccess,
  getProductDetailsFail,
  getFavoritesSuccess,
  getFavoritesFail,
} from './actions';

import { 
  getProducts,
  getExclusives,
  getPromotion,
  getProductDetails,
  getFavorites,
  getSearch
} from '../../../helpers/backend_helper';

function* getAllProducts() {
  try {
    const response = yield call(getProducts);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsFail(error.response));
  }
}

function* getProductsExclusives() {
  try {
    const response = yield call(getExclusives);
    yield put(getExclusivesSuccess(response));
  } catch (error) {
    yield put(getExclusivesFail(error.response));
  }
}

function* getProductsPromotion() {
  try {
    const response = yield call(getPromotion);
    yield put(getPromotionSuccess(response));
  } catch (error) {
    yield put(getPromotionFail(error.response));
  }
}

function* getProductsFavorites() {
  try {
    const response = yield call(getFavorites);
    yield put(getFavoritesSuccess(response));
  } catch (error) {
    yield put(getFavoritesFail(error.response));
  }
}

function* getSearchProduct({ payload: products }) {
  console.log('aaa', products)
  try {
    const response = yield call(getSearch, products);
    const result = response.filter(
      product => {
          return (
          product
            .nome.toLowerCase()
            .includes(products.toLowerCase()) ||
            product
            .decricaoCurta.toLowerCase()
            .includes(products.toLowerCase())
          )
        })
    console.log('gt', getSearch)
    console.log('pdt', products)
    console.log('resp', response);
    yield put(getSearchProductSuccess(result));
  } catch (error) {
    yield put(getSearchProductFail(error.response));
  }
}

function* getProductById({ payload: id }) {
  try {
    const response = yield call(getProductDetails, id);
    yield put(getProductDetailsSuccess(response));
  } catch (error) {
    yield put(getProductDetailsFail(error.response));
  }
}

function* ProductSaga() {
  yield takeLatest(GET_ALL_PRODUCTS, getAllProducts);
  yield takeLatest(GET_PRODUCTS_EXCLUSIVES, getProductsExclusives);
  yield takeLatest(GET_PRODUCTS_PROMOTION, getProductsPromotion);
  yield takeLatest(GET_PRODUCTS_FAVORITE, getProductsFavorites);
  yield takeLatest(SEARCH_PRODUCT, getSearchProduct);
  yield takeLatest(GET_PRODUCT_DETAILS, getProductById);
}

export default ProductSaga;
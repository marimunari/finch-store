import { all, fork } from 'redux-saga/effects';

import ProductSaga from './products/saga';

export default function* rootSaga() {
  yield all([fork(ProductSaga)]);
}
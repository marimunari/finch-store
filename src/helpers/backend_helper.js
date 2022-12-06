import { get } from './api_helper';
import * as url from './url_helper';

export const getProducts = () => get(url.GET_ALL_PRODUCTS);

export const getExclusives = () => get(url.GET_ALL_EXCLUSIVES);

export const getPromotion = () => get(url.GET_ALL_PROMOTION);

export const getFavorites = () => get(url.GET_ALL_FAVORITES);

export const getSearch = (product) =>
  get(url.GET_SEARCH_PRODUCT, {
    params: {
      product: product,
    }
});

export const getProductDetails = (id) =>
  get(url.GET_PRODUCT_DETAILS, {
    params: {
      id: id,
    },
});
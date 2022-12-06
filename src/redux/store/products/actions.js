import { 
    GET_ALL_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_PRODUCTS_EXCLUSIVES,
    GET_EXCLUSIVES_SUCCESS,
    GET_EXCLUSIVES_FAIL,
    GET_PRODUCTS_PROMOTION,
    GET_PROMOTION_SUCCESS,
    GET_PROMOTION_FAIL,
    SEARCH_PRODUCT,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAIL,
    GET_PRODUCT_DETAILS,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAIL, 
    GET_PRODUCTS_FAVORITE,
    GET_PRODUCTS_FAVORITE_SUCCESS,
    GET_PRODUCTS_FAVORITE_FAIL
} from './actionTypes';

export const getAllProducts = () => {
    return {
      type: GET_ALL_PRODUCTS,
    };
};
  
export const getProductsSuccess = (products) => {
    return {
      type: GET_PRODUCTS_SUCCESS,
      payload: products,
    };
};
  
export const getProductsFail = (error) => {
    return {
      type: GET_PRODUCTS_FAIL,
      payload: error,
    };
};

export const getProductsExclusives = () => {
  return {
    type: GET_PRODUCTS_EXCLUSIVES,
  };
};

export const getExclusivesSuccess = (products) => {
  return {
    type: GET_EXCLUSIVES_SUCCESS,
    payload: products,
  };
};

export const getExclusivesFail = (error) => {
  return {
    type: GET_EXCLUSIVES_FAIL,
    payload: error,
  };
};

export const getProductsFavorites = () => {
  return {
    type: GET_PRODUCTS_FAVORITE,
  };
};

export const getFavoritesSuccess = (products) => {
  return {
    type: GET_PRODUCTS_FAVORITE_SUCCESS,
    payload: products,
  };
};

export const getFavoritesFail = (error) => {
  return {
    type: GET_PRODUCTS_FAVORITE_FAIL,
    payload: error,
  };
};

export const getProductsPromotion = () => {
  return {
    type: GET_PRODUCTS_PROMOTION,
  };
};

export const getPromotionSuccess = (products) => {
  return {
    type: GET_PROMOTION_SUCCESS,
    payload: products,
  };
};

export const getPromotionFail = (error) => {
  return {
    type: GET_PROMOTION_FAIL,
    payload: error,
  };
};

export const getSearchProduct = (query) => {
  return {
    type: SEARCH_PRODUCT,
    payload: query,
  };
};

export const getSearchProductSuccess = (product) => {
  return {
    type: SEARCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const getSearchProductFail = (error) => {
  return {
    type: SEARCH_PRODUCT_FAIL,
    payload: error,
  };
};
  
export const getProductDetails = (id) => {
    return {
      type: GET_PRODUCT_DETAILS,
      payload: id,
    };
};
  
export const getProductDetailsSuccess = (product) => {
    return {
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payload: product,
    };
};
  
export const getProductDetailsFail = (error) => {
    return {
      type: GET_PRODUCT_DETAILS_FAIL,
      payload: error,
    };
};
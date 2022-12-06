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

const initialState = {
    products: [],
    product: {},
    loadingProducts: false,
    loadingProductDetails: false,
    error: {
        message: '',
    },
    title: 'Carregando',
    subtitle: 'Carregando'
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_PRODUCTS:
        state = { 
          ...state,
          loadingProducts: true,
          title: 'Conheça todos os nossos produtos',
          subtitle: 'Listagem de produtos - clique no produto desejado para saber mais'
        };
        break;
      case GET_PRODUCTS_SUCCESS:
        state = { ...state, products: action.payload, loadingProducts: false };
        break;
      case GET_PRODUCTS_FAIL:
        state = {
          ...state,
          error: {
            message: 'Error',
          },
          loadingProducts: false,
        };
        break;
      case GET_PRODUCTS_EXCLUSIVES:
        state = { 
          ...state,
          loadingProducts: true,
          title: 'Conheça nossos produtos exclusivos',
          subtitle: 'Listagem de produtos exclusivos - clique no produto desejado para saber mais'
        };
        break;
      case GET_EXCLUSIVES_SUCCESS:
        state = { ...state, products: action.payload, loadingProducts: false };
        break;
      case GET_EXCLUSIVES_FAIL:
        state = {
          ...state,
          error: {
            message: 'Erro ao carregar os produtos exclusivos',
          },
          loadingProducts: false,
        };
        break;
      case GET_PRODUCTS_PROMOTION:
        state = { 
          ...state,
          loadingProducts: true,
          title: 'Conheça nossas promoções',
          subtitle: 'Listagem de produtos em promoção - clique no produto desejado para saber mais'
        };
        break;
      case GET_PROMOTION_SUCCESS:
        state = {
          ...state,
          products: action.payload,
          loadingProducts: false
        };
        break;
      case GET_PROMOTION_FAIL:
        state = {
          ...state,
          error: {
            message: 'Erro ao carregar os produtos em promoção',
          },
          loadingProducts: false,
        };
        break;
      case GET_PRODUCTS_FAVORITE:
        state = { 
          ...state,
          loadingProducts: true,
          title: 'Meus Favorito',
          subtitle: `Listagem de produtos marcados como favoritos
          - clique no produto desejado para saber mais`
        };
          break;
      case GET_PRODUCTS_FAVORITE_SUCCESS:
        state = {
          ...state,
          products: action.payload,
          loadingProducts: false
        };
        break;
      case GET_PRODUCTS_FAVORITE_FAIL:
        state = {
          ...state,
          error: {
            message: 'Erro ao carregar seus produtos favoritos',
          },
          loadingProducts: false,
        };
        break;
      case SEARCH_PRODUCT:
        state = { 
          ...state,
          loadingProducts: true
        };
        break;
      case SEARCH_PRODUCT_SUCCESS:
        state = {
          ...state,
          products: action.payload,
          loadingProducts: false
        };
        break;
      case SEARCH_PRODUCT_FAIL:
        state = {
          ...state,
          error: {
            message: 'Erro ao buscar o produto',
          },
          loadingProducts: false,
        };
        break;
      case GET_PRODUCT_DETAILS:
        state = {
          ...state,
          loadingProductsDetails: true
        };
        break;
      case GET_PRODUCT_DETAILS_SUCCESS:
        state = {
          ...state,
          product: action.payload[0],
          loadingProductDetails: false
        };
        break;
      case GET_PRODUCT_DETAILS_FAIL:
        state = {
          ...state,
          error: {
              message: 'Erro ao carregar os detalhes produto',
          },
          loadingProductDetails: false,
        };
        break;
      default:
          state = { 
            ...state 
          };
          break;
    }
    return state;
};

export default ProductReducer;
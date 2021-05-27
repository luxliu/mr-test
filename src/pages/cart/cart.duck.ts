import { Action, createAction } from 'redux-actions';

import { wrapWithModule } from 'src/redux/utils';
import { CartProduct, CartState } from './types';

import classicTee from 'src/assets/img/classic-tee.jpg';

/*********************
 *   INITIAL STATE   *
 *********************/

const initialState: CartState = {
  products: [
    {
      id: '9943953a-9111-4603-ada2-8d94c7b4f90d',
      name: 'Classic Tee',
      price: 75,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      sizeOptions: ['S', 'M', 'L'],
      size: 'S',
      quantity: 5,
      image: classicTee,
    },
  ],
};

/***************
 *   ACTIONS   *
 ***************/

const wrapWithNamespace = wrapWithModule('modules/cart');
const ADD_TO_CART = wrapWithNamespace('ADD_TO_CART');
const DELETE_PRODUCT = wrapWithNamespace('DELETE_PRODUCT');

export const addToCart = createAction<CartProduct>(ADD_TO_CART);
export const deleteProduct = createAction<string>(DELETE_PRODUCT);

/***************
 *   REDUCER   *
 ***************/
export default (
  state: CartState = initialState,
  action: Action<CartProduct & string>
) => {
  const { type, payload } = action;

  const reducer = {
    [ADD_TO_CART]: (state: CartState, payload: CartProduct) => {
      const { products: existingProducts } = state;
      // const products = existingProducts.reduce((acc: CartProduct[], p) => {
      //   if (p.id === payload.id && p.size === payload.size) {
      //     p.quantity++;
      //     acc.push(p);
      //   } else {
      //     acc.push(payload);
      //   }

      //   return acc;
      // }, []);
      const products = [...existingProducts];

      const existing = products.find(
        (p) => p.id === payload.id && p.size === payload.size
      );
      if (existing) {
        existing.quantity++;
      } else {
        products.push(payload);
      }

      return { products };
    },
    [DELETE_PRODUCT]: (state: CartState, payload: string) => {
      const { products: existingProducts } = state;

      const otherProducts = existingProducts.filter(
        (product) => product.id !== payload
      );
      const filteredProducts = existingProducts.find(
        (product) => product.id === payload
      );
      const changedQuantity = filteredProducts.quantity - 1;

      return {
        ...state,
        products: [
          ...otherProducts,
          {
            ...filteredProducts,
            quantity: changedQuantity < 0 ? 0 : changedQuantity,
          },
        ],
      };
    },
  }[type];

  return reducer ? reducer(state, payload) : state;
};

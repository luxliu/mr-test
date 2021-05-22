import { Action, createAction } from 'redux-actions';

import { wrapWithModule } from 'src/redux/utils';
import { Product, ShoppingState } from './types';

import classicTee from 'src/assets/img/classic-tee.jpg';

/*********************
 *   INITIAL STATE   *
 *********************/

const initialState: ShoppingState = {
  loading: false,
};

/***************
 *   ACTIONS   *
 ***************/

const wrapWithNamespace = wrapWithModule('modules/shopping');
const GET_PRODUCT_SUCCEED = wrapWithNamespace('GET_PRODUCT_SUCCEED');

export const getProductSucceed = createAction<Product>(GET_PRODUCT_SUCCEED);

/***************
 *   REDUCER   *
 ***************/
export default (
  state: ShoppingState = initialState,
  action: Action<Product>
) => {
  const { type, payload } = action;

  const reducer = {
    [GET_PRODUCT_SUCCEED]: (
      state: ShoppingState,
      payload: Product
    ): ShoppingState => ({
      ...state,
      loading: false,
      product: {
        id: '9943953a-9111-4603-ada2-8d94c7b4f90d',
        name: 'Classic Tee',
        price: 75.0,
        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
        sizeOptions: ['S', 'M', 'L'],
        image: classicTee,
      },
    }),
  }[type];

  return reducer ? reducer(state, payload) : state;
};

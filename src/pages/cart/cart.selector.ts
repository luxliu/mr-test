import * as R from 'ramda';
import { createSelector } from 'reselect';

import { getModuleSelector } from 'src/redux/utils';
import { CartProduct } from './types';

const cartSelector = getModuleSelector('cart');

export const productsSelector = createSelector(
  cartSelector,
  R.prop<string, CartProduct[]>('products')
);

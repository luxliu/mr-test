import * as R from 'ramda';
import { createSelector } from 'reselect';

import { getModuleSelector } from 'src/redux/utils';
import { Product } from './types';

const shoppingSelector = getModuleSelector('shopping');

export const productSelector = createSelector(
  shoppingSelector,
  R.prop<string, Product>('product')
);

import { combineReducers } from 'redux';

import { default as shopping } from 'src/pages/shopping/shopping.duck';
import { default as cart } from 'src/pages/cart/cart.duck';

export default combineReducers({ shopping, cart });

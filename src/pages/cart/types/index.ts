import { Product } from 'src/pages/shopping/types';

export interface CartProduct extends Product {
  quantity: number;
  size: string;
}

export interface CartState {
  products: CartProduct[];
}

export type AddToCardPayload = {
  product: Product;
  size: string;
};
